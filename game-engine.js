
(() => {
  const SAVE_KEY = "compilePlayableGameV21";
  const SUPPORTED_SETS = new Set(["Main 1","Aux 1","Main 2","Aux 2"]);
  const shuffle = arr => {
    const a=[...arr];
    for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
    return a;
  };
  const plain = s => String(s||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();

  class CompileEngine {
    constructor(cardData){
      this.cards=cardData.cards||[];
      this.byProtocol=new Map();
      this.cards.forEach(c=>{if(!this.byProtocol.has(c.protocol))this.byProtocol.set(c.protocol,[]);this.byProtocol.get(c.protocol).push(c);});
      this.state=null;
    }

    supportedProtocols(){
      return [...this.byProtocol.keys()].filter(n=>{
        const c=(this.byProtocol.get(n)||[])[0]; return c&&SUPPORTED_SETS.has(c.set);
      }).sort((a,b)=>a.localeCompare(b));
    }

    makeDeck(protocols,owner){
      const out=[];
      for(const protocol of protocols){
        for(const d of [...(this.byProtocol.get(protocol)||[])].sort((a,b)=>Number(a.value)-Number(b.value))){
          out.push({
            instanceId:`${owner}-${protocol}-${d.value}-${Math.random().toString(36).slice(2,8)}`,
            cardId:d.id,protocol:d.protocol,set:d.set,value:Number(d.value)||0,
            top:d.top||"",middle:d.middle||"",bottom:d.bottom||"",keywords:d.keywords||[],
            owner,controller:owner,face:"up",covered:false,line:null
          });
        }
      }
      return shuffle(out);
    }

    newGame({humanName,humanProtocols,aiProtocols}){
      this.state={
        version:21,status:"playing",winner:null,turn:1,active:"human",control:null,
        humanName:humanName||"Player 1",
        protocols:{
          human:humanProtocols.map((name,i)=>({name,position:i,compiled:false})),
          ai:aiProtocols.map((name,i)=>({name,position:i,compiled:false}))
        },
        players:{
          human:{hand:[],cache:this.makeDeck(humanProtocols,"human"),trash:[]},
          ai:{hand:[],cache:this.makeDeck(aiProtocols,"ai"),trash:[]}
        },
        lines:[{id:0,human:[],ai:[]},{id:1,human:[],ai:[]},{id:2,human:[],ai:[]}],
        hasTakenAction:false,
        pendingCompile:[],
        pendingManualEffects:[],pendingEffectChoices:[],
        log:[]
      };
      this.draw("human",5,false); this.draw("ai",5,false);
      this.log("Game started. Control begins neutral.");
      this.startTurn("human",false);
      return this.state;
    }

    save(){if(this.state)localStorage.setItem(SAVE_KEY,JSON.stringify(this.state));}
    load(){try{const s=JSON.parse(localStorage.getItem(SAVE_KEY)||"null");if(s&&s.version===21){this.state=s;return s;}}catch(_){}return null;}
    clearSave(){localStorage.removeItem(SAVE_KEY);}
    log(message){this.state.log.unshift({t:Date.now(),message});this.state.log=this.state.log.slice(0,100);}

    fieldCards(player=null){
      const out=[];
      for(const line of this.state.lines){
        for(const side of ["human","ai"]){
          if(player && side!==player) continue;
          out.push(...line[side]);
        }
      }
      return out;
    }

    canDraw(player){
      // Ice 6: while it is face-up on your side, if you have cards in hand you cannot draw.
      const hasIceSix=this.fieldCards(player).some(c=>c.cardId==="ice-6" && c.face==="up");
      if(hasIceSix && this.state.players[player].hand.length>0) return false;
      return true;
    }

    draw(player,n=1,logIt=true,{fromPlayer=null,triggerEvents=true}={}){
      const p=this.state.players[player];
      let drawn=0;

      for(let i=0;i<n;i++){
        if(!this.canDraw(player)){
          if(logIt) this.log(`${player==="human"?this.state.humanName:"AI"} cannot draw because of Ice 6.`);
          break;
        }

        const sourcePlayer=fromPlayer || player;
        const source=this.state.players[sourcePlayer];

        if(!source.cache.length && source.trash.length){
          source.cache=shuffle(source.trash);
          source.trash=[];
          this.log(`${sourcePlayer==="human"?this.state.humanName:"AI"} reshuffles Trash to reform the deck.`);
          this.resolveAfterShuffle(sourcePlayer);
        }

        if(source.cache.length){
          const card=source.cache.pop();
          if(fromPlayer && fromPlayer!==player){
            card.owner=player;
            card.controller=player;
          }
          p.hand.push(card);
          drawn++;
        }
      }

      if(logIt && drawn){
        if(fromPlayer && fromPlayer!==player){
          this.log(`${player==="human"?this.state.humanName:"AI"} draws ${drawn} from ${fromPlayer==="human"?this.state.humanName:"AI"}'s deck.`);
        }else{
          this.log(`${player==="human"?this.state.humanName:"AI"} draws ${drawn}.`);
        }
      }

      if(drawn && triggerEvents) this.resolveAfterDraw(player,drawn);
      return drawn;
    }

    resolveAfterDraw(player,count){
      const opponent=player==="human"?"ai":"human";

      // Mirror 4 — After your opponent draws cards: Draw 1 card.
      for(const owner of [opponent]){
        const active=this.fieldCards(owner).some(c=>c.cardId==="mirror-4" && c.face==="up");
        if(active){
          this.log(`${owner==="human"?this.state.humanName:"AI"} triggers Mirror 4 after the opponent draws.`);
          this.draw(owner,1,true,{triggerEvents:false});
        }
      }

      // Spirit 3 also says "After you draw cards", but its effect is an optional Shift;
      // keep that non-Draw portion queued until Shift targeting is implemented.
    }

    resolveAfterShuffle(player){
      // Time 2 — After you shuffle your deck: Draw 1 card and you may shift this card.
      const active=this.fieldCards(player).some(c=>c.cardId==="time-2" && c.face==="up");
      if(active){
        this.log(`${player==="human"?this.state.humanName:"AI"} triggers Time 2 after shuffling.`);
        this.draw(player,1,true,{triggerEvents:true});
      }
    }

    refresh(player){
      if(this.state.active!==player||this.state.hasTakenAction||this.state.pendingCompile.length||this.hasPendingChoice(player))return false;
      const p=this.state.players[player];
      const need=Math.max(0,5-p.hand.length);
      if(need)this.draw(player,need,false);
      this.state.hasTakenAction=true;
      this.log(`${player==="human"?this.state.humanName:"AI"} Refreshes to ${p.hand.length} cards.`);
      // Control rearrangement is deliberately not auto-spent in prototype:
      // official rule says it is optional before Refresh/Compile.
      return true;
    }

    cardBoardValue(card){
      // Core Compile rule: every face-down card has a board value of 2,
      // regardless of printed value, Protocol, owner, or which line it occupies.
      if(card.face==="down") return 2;
      return Number(card.value)||0;
    }

    lineValue(player,lineId){
      return this.state.lines[lineId][player].reduce(
        (sum,c)=>sum+this.cardBoardValue(c),
        0
      );
    }

    protocolAt(player,lineId){return this.state.protocols[player].find(p=>p.position===lineId);}

    checkControl(player){
      let leads=0;
      for(let i=0;i<3;i++) if(this.lineValue(player,i)>this.lineValue(player==="human"?"ai":"human",i)) leads++;
      if(leads>=2 && this.state.control!==player){
        this.state.control=player;
        this.log(`${player==="human"?this.state.humanName:"AI"} gains Control.`);
      }
    }

    compilableLines(player){
      const opp=player==="human"?"ai":"human";
      const lines=[];
      for(let i=0;i<3;i++){
        const mine=this.lineValue(player,i), theirs=this.lineValue(opp,i);
        if(mine>=10 && mine>theirs) lines.push(i);
      }
      return lines;
    }

    resolveStartDrawEffects(player){
      const cards=this.fieldCards(player).filter(c=>c.face==="up");

      // Courage 0 — Start: If you have no cards in hand, draw 1.
      if(cards.some(c=>c.cardId==="courage-0") && this.state.players[player].hand.length===0){
        this.log(`${player==="human"?this.state.humanName:"AI"} triggers Courage 0 at Start.`);
        this.draw(player,1);
      }

      // Unity 4 — Start: If hand empty, draw all Unity cards from deck, shuffle deck.
      if(cards.some(c=>c.cardId==="unity-4") && this.state.players[player].hand.length===0){
        const p=this.state.players[player];
        const unity=p.cache.filter(c=>c.protocol==="Unity");
        if(unity.length){
          p.cache=p.cache.filter(c=>c.protocol!=="Unity");
          p.hand.push(...unity);
          this.log(`${player==="human"?this.state.humanName:"AI"} draws ${unity.length} Unity card${unity.length===1?"":"s"} with Unity 4.`);
          p.cache=shuffle(p.cache);
          this.resolveAfterShuffle(player);
          this.resolveAfterDraw(player,unity.length);
        }
      }

      // Chaos 0 / Death 1 have Start Draw text tied to additional exchange/delete choices.
      // Those remain pending until their linked non-Draw action is implemented.
    }

    resolveEndDrawEffects(player){
      const opponent=player==="human"?"ai":"human";
      const cards=this.fieldCards(player).filter(c=>c.face==="up");

      // Light 1 — End: Draw 1.
      if(cards.some(c=>c.cardId==="light-1")){
        this.log(`${player==="human"?this.state.humanName:"AI"} triggers Light 1 at End.`);
        this.draw(player,1);
      }

      // Peace 1 — End: If hand is empty, draw 1.
      if(cards.some(c=>c.cardId==="peace-1") && this.state.players[player].hand.length===0){
        this.log(`${player==="human"?this.state.humanName:"AI"} triggers Peace 1 at End.`);
        this.draw(player,1);
      }

      // Courage 2 — End: if opponent has higher value in this line, draw 1.
      for(const c of cards.filter(c=>c.cardId==="courage-2")){
        if(c.line!==null && this.lineValue(opponent,c.line)>this.lineValue(player,c.line)){
          this.log(`${player==="human"?this.state.humanName:"AI"} triggers Courage 2 at End.`);
          this.draw(player,1);
        }
      }

      // Chaos 4 — End: Discard hand. Draw that many.
      if(cards.some(c=>c.cardId==="chaos-4")){
        const p=this.state.players[player];
        const n=p.hand.length;
        while(p.hand.length){
          const discarded=p.hand.pop();
          p.trash.push(discarded);
        }
        if(n){
          this.log(`${player==="human"?this.state.humanName:"AI"} discards ${n} card${n===1?"":"s"} with Chaos 4.`);
          this.resolveAfterDiscard(player,n);
          this.draw(player,n);
        }
      }
    }

    startTurn(player,logIt=true){
      this.state.active=player;
      this.state.hasTakenAction=false;
      this.state.pendingCompile=[];
      if(logIt)this.log(`${player==="human"?this.state.humanName:"AI"} starts Turn ${this.state.turn}.`);

      this.resolveStartDrawEffects(player);
      this.checkControl(player);
      this.state.pendingCompile=this.compilableLines(player);
      if(this.state.pendingCompile.length)this.log(`${player==="human"?this.state.humanName:"AI"} must Compile.`);
    }

    legalLinesForCard(player,cardId,face="up"){
      const card=this.state.players[player].hand.find(c=>c.instanceId===cardId);
      if(!card)return[];
      if(face==="down")return[0,1,2];
      const matches=[];
      for(let i=0;i<3;i++){const p=this.protocolAt(player,i);if(p&&p.name===card.protocol)matches.push(i);}
      return matches;
    }

    playCard(player,cardId,lineId,face="up"){
      if(this.state.active!==player||this.state.hasTakenAction||this.state.pendingCompile.length||this.hasPendingChoice(player))return{ok:false,error:"Action not currently legal"};
      const p=this.state.players[player],idx=p.hand.findIndex(c=>c.instanceId===cardId);
      if(idx<0||!this.legalLinesForCard(player,cardId,face).includes(lineId))return{ok:false,error:"Illegal play"};
      const [card]=p.hand.splice(idx,1);card.line=lineId;card.face=face;
      const stack=this.state.lines[lineId][player];
      if(stack.length)stack[stack.length-1].covered=true;
      stack.push(card);this.state.hasTakenAction=true;
      this.log(`${player==="human"?this.state.humanName:"AI"} plays ${card.protocol} ${card.value} ${face==="down"?"face-down":"face-up"} to Line ${lineId+1}.`);
      if(face==="up")this.resolvePrototypeImmediate(player,card,lineId);
      return{ok:true,card};
    }

    cardLocation(cardId){
      for(let lineId=0; lineId<3; lineId++){
        for(const side of ["human","ai"]){
          const stack=this.state.lines[lineId][side];
          const index=stack.findIndex(c=>c.instanceId===cardId);
          if(index>=0) return {lineId,side,index,card:stack[index],stack};
        }
      }
      return null;
    }

    flipCard(cardId){
      const loc=this.cardLocation(cardId);
      if(!loc) return false;
      const card=loc.card;
      card.face=card.face==="up"?"down":"up";
      this.log(`${card.protocol} ${card.value} flips ${card.face==="up"?"face-up":"face-down"}.`);

      // Resolve After Flip draw triggers if/when those are added.
      this.checkControl("human");
      this.checkControl("ai");
      return true;
    }

    legalFlipTargets(player,rule={}){
      const out=[];
      for(let lineId=0; lineId<3; lineId++){
        for(const side of ["human","ai"]){
          const stack=this.state.lines[lineId][side];
          stack.forEach((card,index)=>{
            if(rule.owner==="self" && side!==player) return;
            if(rule.owner==="opponent" && side===player) return;
            if(rule.face==="up" && card.face!=="up") return;
            if(rule.face==="down" && card.face!=="down") return;
            if(rule.covered===true && !card.covered) return;
            if(rule.covered===false && card.covered) return;
            if(rule.otherThan && card.instanceId===rule.otherThan) return;
            if(rule.protocol && card.protocol!==rule.protocol) return;
            if(rule.valueMax!==undefined && Number(card.value)>rule.valueMax) return;
            if(rule.valueMin!==undefined && Number(card.value)<rule.valueMin) return;
            if(rule.sameLine!==undefined && lineId!==rule.sameLine) return;
            out.push(card.instanceId);
          });
        }
      }
      return out;
    }

    parseSimpleFlipEffect(player,card,lineId,text){
      const upper=text.toUpperCase();

      // Don't claim support for complex multi-step/conditional flip clauses here.
      if(/\b(IF|EITHER|FOR EACH|EQUAL TO|LESS THAN|MORE THAN|OTHER THAN THIS CARD|ALL OTHER|THEN|FIRST)\b/i.test(text)){
        return null;
      }

      // Common simple target constraints.
      const rule={};
      if(/YOUR OPPONENT[´'’]S/i.test(text)) rule.owner="opponent";
      else if(/\bYOUR\b/i.test(text)) rule.owner="self";

      if(/FACE-UP/i.test(text)) rule.face="up";
      if(/FACE-DOWN/i.test(text)) rule.face="down";
      if(/COVERED/i.test(text) && !/UNCOVERED/i.test(text)) rule.covered=true;

      // "flip this card"
      if(/\bFLIP THIS CARD\b/i.test(text)){
        return {count:1,targets:[card.instanceId],rule:{},automatic:true};
      }

      // "flip 1 card" / "flip 1 of your ..."
      if(/\bFLIP\s+1\b/i.test(text) || /\bFLIP\s+A\s+CARD\b/i.test(text)){
        const targets=this.legalFlipTargets(player,rule);
        return {count:1,targets,rule,automatic:false};
      }

      return null;
    }

    queueFlipChoice(player,sourceCard,lineId,flipSpec){
      if(!flipSpec || flipSpec.count!==1) return false;

      if(!flipSpec.targets.length){
        this.log(`${player==="human"?this.state.humanName:"AI"} has no legal card to flip, so the Flip effect does nothing.`);
        return true;
      }

      if(flipSpec.automatic && flipSpec.targets.length===1){
        this.flipCard(flipSpec.targets[0]);
        return true;
      }

      if(player==="ai"){
        const target=this.chooseAiFlipTarget(flipSpec.targets);
        if(target) this.flipCard(target);
        return true;
      }

      this.state.pendingEffectChoices.push({
        type:"flip",
        player:"human",
        count:1,
        targets:[...flipSpec.targets],
        sourceCardInstanceId:sourceCard.instanceId,
        sourceProtocol:sourceCard.protocol,
        sourceValue:sourceCard.value,
        lineId
      });
      this.log(`${this.state.humanName} must choose a card to flip.`);
      return true;
    }

    resolveFlipChoice(player,targetId){
      const pendingIndex=this.state.pendingEffectChoices.findIndex(x=>x.type==="flip"&&x.player===player);
      if(pendingIndex<0) return false;
      const pending=this.state.pendingEffectChoices[pendingIndex];
      if(!pending.targets.includes(targetId)) return false;
      if(!this.flipCard(targetId)) return false;
      this.state.pendingEffectChoices.splice(pendingIndex,1);
      return true;
    }

    chooseAiFlipTarget(targetIds){
      if(!targetIds.length) return null;
      const options=targetIds.map(id=>{
        const loc=this.cardLocation(id);
        if(!loc) return {id,score:-999};
        const card=loc.card;
        let score=0;

        // Flipping opponent face-up to down usually reduces their line by printed-2.
        // Flipping own face-down to up usually gains printed-2.
        if(loc.side==="human"){
          score += card.face==="up" ? Math.max(0,(Number(card.value)||0)-2) : -Math.max(0,(Number(card.value)||0)-2);
        }else{
          score += card.face==="down" ? Math.max(0,(Number(card.value)||0)-2) : -Math.max(0,(Number(card.value)||0)-2);
        }

        // Prefer affecting close/important lines.
        const margin=Math.abs(this.lineValue("ai",loc.lineId)-this.lineValue("human",loc.lineId));
        score += Math.max(0,5-margin);
        return {id,score};
      }).sort((a,b)=>b.score-a.score);
      return options[0]?.id||null;
    }

    resolvePrototypeImmediate(player,card,lineId){
      const text=plain(card.middle);
      if(!text) return;

      // Existing mandatory discard support.
      const discardOne=/^(?:YOU\s+)?DISCARD\s+1\s+CARD\.?$/i.test(text);
      if(discardOne){
        const hand=this.state.players[player].hand;
        if(hand.length===0){
          this.log(`${player==="human"?this.state.humanName:"AI"} has no card to discard, so the discard effect does nothing.`);
          return;
        }
        if(player==="ai"){
          const discard=this.chooseAiDiscard();
          if(discard) this.discardFromHand("ai",discard.instanceId);
          return;
        }
        this.state.pendingEffectChoices.push({
          type:"discard",player:"human",count:1,
          sourceCardInstanceId:card.instanceId,
          sourceProtocol:card.protocol,sourceValue:card.value
        });
        this.log(`${this.state.humanName} must discard 1 card.`);
        return;
      }

      // DRAW FROM OPPONENT'S DECK.
      if(/DRAW THE TOP CARD OF YOUR OPPONENT[´'’]S DECK/i.test(text)){
        this.draw(player,1,true,{fromPlayer:player==="human"?"ai":"human"});
      }

      // "Your opponent draws the top card of your deck."
      if(/YOUR OPPONENT DRAWS THE TOP CARD OF YOUR DECK/i.test(text)){
        const opponent=player==="human"?"ai":"human";
        this.draw(opponent,1,true,{fromPlayer:player});
      }

      // Deterministic immediate DRAW N anywhere in the middle command.
      // This intentionally resolves the Draw portion even when another, unrelated
      // command on the same card is not implemented yet.
      const direct=[...text.matchAll(/\bDRAW\s+(\d+)\s+CARDS?\b/gi)];
      for(const match of direct){
        this.draw(player,Number(match[1]));
      }

      // Fear 1: opponent discards entire hand and draws that amount minus 1.
      if(/^DRAW 2 CARDS\. YOUR OPPONENT DISCARDS THEIR HAND AND DRAWS THE AMOUNT OF CARDS DISCARDED MINUS 1\.?$/i.test(text)){
        const opponent=player==="human"?"ai":"human";
        const op=this.state.players[opponent];
        const amount=op.hand.length;
        while(op.hand.length){
          const discarded=op.hand.pop();
          op.trash.push(discarded);
        }
        if(amount) this.log(`${opponent==="human"?this.state.humanName:"AI"} discards their hand (${amount}).`);
        if(amount>1) this.draw(opponent,amount-1);
        return;
      }

      // Luck 2: discard top card of your deck, then draw equal to its value.
      if(/^DISCARD THE TOP CARD OF YOUR DECK\. DRAW CARDS EQUAL TO THE VALUE OF THE DISCARDED CARD\.?$/i.test(text)){
        const p=this.state.players[player];
        if(!p.cache.length && p.trash.length){
          p.cache=shuffle(p.trash); p.trash=[];
          this.resolveAfterShuffle(player);
        }
        if(p.cache.length){
          const discarded=p.cache.pop();
          p.trash.push(discarded);
          this.log(`${player==="human"?this.state.humanName:"AI"} discards ${discarded.protocol} ${discarded.value} from the top of the deck.`);
          this.draw(player,Number(discarded.value)||0);
        }
        return;
      }

      // Diversity 1: draw equal to different Protocols in this line.
      if(/DRAW CARDS EQUAL TO THE NUMBER OF DIFFERENT PROTOCOLS IN THIS LINE/i.test(text)){
        const names=new Set();
        for(const side of ["human","ai"]){
          for(const c of this.state.lines[lineId][side]) names.add(c.protocol);
        }
        this.draw(player,names.size);
      }

      // Unity 2: draw equal to the number of Unity cards in the field.
      if(/DRAW CARDS EQUAL TO THE NUMBER OF UNITY CARDS IN THE FIELD/i.test(text)){
        const n=this.fieldCards().filter(c=>c.protocol==="Unity").length;
        this.draw(player,n);
      }

      // Life 4: conditional immediate draw.
      if(/IF THIS CARD IS COVERING A CARD, DRAW 1 CARD/i.test(text)){
        const stack=this.state.lines[lineId][player];
        const idx=stack.findIndex(c=>c.instanceId===card.instanceId);
        if(idx>0) this.draw(player,1);
      }

      // Spirit 0: Refresh, then Draw 1.
      if(/^REFRESH\. DRAW 1 CARD\.?$/i.test(text)){
        const p=this.state.players[player];
        const need=Math.max(0,5-p.hand.length);
        if(need) this.draw(player,need);
        // direct parser above already applied the final Draw 1.
        return;
      }

      // If every part of this middle command is one of the Draw patterns above, it is resolved.
      const drawOnly =
        /^(?:DRAW \d+ CARDS?\.?\s*)+$/i.test(text) ||
        /^DRAW THE TOP CARD OF YOUR OPPONENT[´'’]S DECK\.?$/i.test(text);

      // These commands have known Draw portions but other effects remain to implement.
      const hasOtherEffect=/\b(FLIP|SHIFT|DELETE|REVEAL|PLAY|REARRANGE|PREVENT|CANNOT COMPILE|STATE A NUMBER)\b/i.test(text);

      if(drawOnly) return;

      if(hasOtherEffect){
        this.state.pendingManualEffects.push({
          cardInstanceId:card.instanceId,player,lineId,
          text:`Remaining non-Draw effect: ${text}`,resolved:false
        });
        this.log(`Draw resolved; remaining effect queued: ${card.protocol} ${card.value}.`);
        return;
      }

      // Draw-dependent effects whose amount requires an unresolved choice/action stay pending.
      if(/\bDRAW\b/i.test(text)){
        const unresolvedDynamic =
          /DRAW THE AMOUNT DISCARDED PLUS 1|DRAW CARDS EQUAL TO THAT CARD[´'’]S VALUE|DRAW CARDS EQUAL TO THE VALUE OF THE DISCARDED CARD|DRAW 1 CARD WITH A VALUE OF|DRAW ALL UNITY CARDS|EITHER FLIP 1 CARD OR DRAW 1 CARD/i.test(text);
        if(unresolvedDynamic){
          this.state.pendingManualEffects.push({cardInstanceId:card.instanceId,player,lineId,text,resolved:false});
          this.log(`Draw effect needs another choice/action first: ${card.protocol} ${card.value}.`);
          return;
        }
      }

      // Simple FLIP effects with directly resolvable target constraints.
      if(/\bFLIP\b/i.test(text)){
        const flipSpec=this.parseSimpleFlipEffect(player,card,lineId,text);
        if(flipSpec){
          this.queueFlipChoice(player,card,lineId,flipSpec);

          // If the text contains only the supported Flip instruction, stop here.
          const stripped=text
            .replace(/YOU MAY /ig,"")
            .replace(/FLIP\s+1\s+(?:OF\s+)?(?:YOUR\s+OPPONENT[´'’]S\s+|YOUR\s+)?(?:FACE-UP\s+|FACE-DOWN\s+)?(?:COVERED\s+)?CARDS?\.?/ig,"")
            .replace(/FLIP THIS CARD\.?/ig,"")
            .trim();
          if(!stripped) return;

          this.state.pendingManualEffects.push({
            cardInstanceId:card.instanceId,player,lineId,
            text:`Remaining non-Flip effect: ${text}`,resolved:false
          });
          this.log(`Flip resolved; remaining effect queued: ${card.protocol} ${card.value}.`);
          return;
        }
      }

      // Preserve existing queue for any remaining unsupported command.
      if(text){
        this.state.pendingManualEffects.push({cardInstanceId:card.instanceId,player,lineId,text,resolved:false});
        this.log(`Complex effect queued for later engine support: ${card.protocol} ${card.value}.`);
      }
    }

    discardFromHand(player,cardId){
      const p=this.state.players[player];
      const idx=p.hand.findIndex(c=>c.instanceId===cardId);
      if(idx<0) return false;
      const [card]=p.hand.splice(idx,1);
      p.trash.push(card);
      this.log(`${player==="human"?this.state.humanName:"AI"} discards ${card.protocol} ${card.value}.`);
      this.resolveAfterDiscard(player,1);

      if(player==="human"){
        const pending=this.state.pendingEffectChoices.findIndex(x=>x.type==="discard"&&x.player==="human");
        if(pending>=0) this.state.pendingEffectChoices.splice(pending,1);
      }
      return true;
    }

    resolveAfterDiscard(player,count){
      const opponent=player==="human"?"ai":"human";

      // Plague 1 — After your opponent discards cards: Draw 1 card.
      if(this.fieldCards(opponent).some(c=>c.cardId==="plague-1" && c.face==="up")){
        this.log(`${opponent==="human"?this.state.humanName:"AI"} triggers Plague 1.`);
        this.draw(opponent,1);
      }

      // Peace 4 — After you discard cards during your opponent's turn: Draw 1 card.
      if(this.state.active!==player &&
         this.fieldCards(player).some(c=>c.cardId==="peace-4" && c.face==="up")){
        this.log(`${player==="human"?this.state.humanName:"AI"} triggers Peace 4.`);
        this.draw(player,1);
      }
    }

    chooseAiDiscard(){
      const hand=this.state.players.ai.hand;
      if(!hand.length) return null;

      const scored=hand.map(card=>{
        let keep=(Number(card.value)||0)*1.4;
        const kw=new Set((card.keywords||[]).map(x=>String(x).toLowerCase()));
        if(kw.has("draw")) keep+=3;
        if(kw.has("delete")) keep+=3;
        if(kw.has("flip")) keep+=2;
        if(kw.has("shift")) keep+=1.5;
        if(kw.has("compile")) keep+=4;
        return {card,keep};
      }).sort((a,b)=>a.keep-b.keep);

      return scored[0]?.card||null;
    }

    hasPendingChoice(player){
      return this.state.pendingEffectChoices.some(x=>x.player===player);
    }

    clearCache(player){
      const p=this.state.players[player];
      let cleared=0;
      while(p.hand.length>5){
        const card=p.hand.pop();
        p.trash.push(card);
        cleared++;
        this.log(`${player==="human"?this.state.humanName:"AI"} clears ${card.protocol} ${card.value} from hand.`);
      }

      // Speed 1 — After you clear cache: Draw 1 card.
      if(cleared>0 && this.fieldCards(player).some(c=>c.cardId==="speed-1" && c.face==="up")){
        this.log(`${player==="human"?this.state.humanName:"AI"} triggers Speed 1 after clearing Cache.`);
        this.draw(player,1);
      }
    }

    compileLine(player,lineId){
      if(this.state.active!==player||!this.state.pendingCompile.includes(lineId))return false;
      const opp=player==="human"?"ai":"human";
      for(const side of [player,opp]){
        const stack=this.state.lines[lineId][side];
        while(stack.length){
          const c=stack.pop();c.line=null;c.covered=false;c.face="up";
          this.state.players[c.owner].trash.push(c);
        }
      }
      const protocol=this.protocolAt(player,lineId);
      if(protocol.compiled){
        // Recompile: draw top card of opponent's deck and change ownership.
        const op=this.state.players[opp];
        if(!op.cache.length&&op.trash.length){op.cache=shuffle(op.trash);op.trash=[];}
        if(op.cache.length){
          const stolen=op.cache.pop();stolen.owner=player;stolen.controller=player;
          this.state.players[player].hand.push(stolen);
          this.log(`${player==="human"?this.state.humanName:"AI"} recompiles ${protocol.name} and takes the top card of the opponent's deck.`);
        }
      }else{
        protocol.compiled=true;
        this.log(`${player==="human"?this.state.humanName:"AI"} Compiles ${protocol.name}.`);
      }
      this.state.pendingCompile=[];
      this.state.hasTakenAction=true; // Compile is the only action this turn.
      this.checkVictory(player);
      return true;
    }

    checkVictory(player){
      if(this.state.protocols[player].every(p=>p.compiled)){
        this.state.status="finished";this.state.winner=player;
        this.log(`${player==="human"?this.state.humanName:"AI"} Compiles all three Protocols and wins.`);
      }
    }

    finishTurn(player){
      if(this.state.active!==player||!this.state.hasTakenAction||this.state.pendingCompile.length||this.hasPendingChoice(player)||this.state.status!=="playing")return false;
      this.resolveEndDrawEffects(player);
      this.clearCache(player);
      const next=player==="human"?"ai":"human";
      if(next==="human")this.state.turn++;
      this.startTurn(next);
      return true;
    }

    aiLegalMoves(){
      if(this.state.active!=="ai"||this.state.hasTakenAction||this.state.pendingCompile.length)return[];
      const moves=[];
      for(const card of this.state.players.ai.hand){
        for(const face of ["up","down"]){
          for(const lineId of this.legalLinesForCard("ai",card.instanceId,face)){
            moves.push({cardId:card.instanceId,lineId,face,score:this.scoreAiMove(card,lineId,face)});
          }
        }
      }
      return moves;
    }

    scoreAiMove(card,lineId,face){
      const human=this.lineValue("human",lineId), before=this.lineValue("ai",lineId);
      const added=face==="down"?2:(Number(card.value)||0), after=before+added;
      let score=0;
      if(before<=human&&after>human)score+=18;
      score+=Math.max(0,9-Math.abs(human-after));
      score+=added*1.25;
      if(face==="down")score-=0.75;
      const kw=new Set((card.keywords||[]).map(x=>String(x).toLowerCase()));
      if(face==="up"){if(kw.has("delete"))score+=5;if(kw.has("draw"))score+=3;if(kw.has("flip"))score+=2.5;if(kw.has("shift"))score+=2;}
      score+=Math.random()*1.2;
      return score;
    }

    doAiTurn(){
      if(this.state.active!=="ai"||this.state.status!=="playing")return;
      if(this.state.pendingCompile.length){
        const best=[...this.state.pendingCompile].sort((a,b)=>{
          const ma=this.lineValue("ai",a)-this.lineValue("human",a);
          const mb=this.lineValue("ai",b)-this.lineValue("human",b);return mb-ma;
        })[0];
        this.compileLine("ai",best);this.finishTurn("ai");return;
      }
      const moves=this.aiLegalMoves().sort((a,b)=>b.score-a.score);
      if(moves.length){
        const m=moves[0];this.playCard("ai",m.cardId,m.lineId,m.face);
      }else{
        this.refresh("ai");
      }
      this.finishTurn("ai");
    }
  }

  window.CompileEngine=CompileEngine;
})();
