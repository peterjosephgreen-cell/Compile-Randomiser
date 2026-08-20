
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
        pendingManualEffects:[],
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

    draw(player,n=1,logIt=true){
      const p=this.state.players[player];
      for(let i=0;i<n;i++){
        if(!p.cache.length&&p.trash.length){
          p.cache=shuffle(p.trash);p.trash=[];
          this.log(`${player==="human"?this.state.humanName:"AI"} reshuffles Trash to reform the deck.`);
        }
        if(p.cache.length)p.hand.push(p.cache.pop());
      }
      if(logIt&&n)this.log(`${player==="human"?this.state.humanName:"AI"} draws ${n}.`);
    }

    refresh(player){
      if(this.state.active!==player||this.state.hasTakenAction||this.state.pendingCompile.length)return false;
      const p=this.state.players[player];
      const need=Math.max(0,5-p.hand.length);
      if(need)this.draw(player,need,false);
      this.state.hasTakenAction=true;
      this.log(`${player==="human"?this.state.humanName:"AI"} Refreshes to ${p.hand.length} cards.`);
      // Control rearrangement is deliberately not auto-spent in prototype:
      // official rule says it is optional before Refresh/Compile.
      return true;
    }

    lineValue(player,lineId){
      return this.state.lines[lineId][player].reduce((sum,c)=>sum+(c.face==="up"?Number(c.value)||0:0),0);
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

    startTurn(player,logIt=true){
      this.state.active=player;this.state.hasTakenAction=false;this.state.pendingCompile=[];
      if(logIt)this.log(`${player==="human"?this.state.humanName:"AI"} starts Turn ${this.state.turn}.`);
      // START effects are represented in the card model, but full trigger resolution is a later v21.x step.
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
      if(this.state.active!==player||this.state.hasTakenAction||this.state.pendingCompile.length)return{ok:false,error:"Action not currently legal"};
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

    resolvePrototypeImmediate(player,card,lineId){
      const text=plain(card.middle);
      if(!text)return;
      const ambiguous=/\b(if|may|choose|opponent|shift|flip|delete|discard|return|swap|reveal|refresh|compile|covered|face-down|face down|instead|after |when )\b/i.test(text);
      const exact=text.match(/^DRAW\s+(\d+)\.?$/i);
      if(exact&&!ambiguous){this.draw(player,Number(exact[1]));return;}
      this.state.pendingManualEffects.push({cardInstanceId:card.instanceId,player,lineId,text,resolved:false});
      this.log(`Complex effect queued for later engine support: ${card.protocol} ${card.value}.`);
    }

    clearCache(player){
      const p=this.state.players[player];
      while(p.hand.length>5){
        // Prototype deterministic clear-cache for AI; human choice UI comes with effect-choice layer.
        const card=p.hand.pop();p.trash.push(card);
        this.log(`${player==="human"?this.state.humanName:"AI"} clears ${card.protocol} ${card.value} from hand.`);
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
      if(this.state.active!==player||!this.state.hasTakenAction||this.state.pendingCompile.length||this.state.status!=="playing")return false;
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
      const added=face==="up"?(Number(card.value)||0):0, after=before+added;
      let score=0;
      if(before<=human&&after>human)score+=18;
      score+=Math.max(0,9-Math.abs(human-after));
      score+=added*1.25;
      if(face==="down")score-=2.5;
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
