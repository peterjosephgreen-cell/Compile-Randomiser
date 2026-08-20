
(() => {
  let engine=null;
  let cardData=null;
  let setup={human:[],ai:[]};
  let selectedHumanCard=null;
  let selectedFace="up";

  const $=id=>document.getElementById(id);

  function safeProtocolArt(name){
    if(window.protocolArtImages && protocolArtImages[name]) return protocolArtImages[name];
    return "";
  }
  function visual(name){
    return (window.protocolVisuals && protocolVisuals[name]) || ["#63ddff","#123b4b"];
  }

  async function initGameMode(){
    if(engine) return;
    const response=await fetch("./game-data/cards-main1-aux1-main2-aux2.json",{cache:"no-store"});
    cardData=await response.json();
    engine=new CompileEngine(cardData);
  }

  async function openGame(){
    await initGameMode();
    $("gameHumanName").textContent=window.playerNames?.p1 || "Player 1";
    const saved=engine.load();
    if(saved){
      showBoard();
      renderBoard();
      $("gameDialog").showModal();
      return;
    }
    setup={human:[],ai:[]};
    renderSetup();
    $("gameSetupPanel").hidden=false;
    $("gameBoardPanel").hidden=true;
    $("gameDialog").showModal();
  }

  function closeGame(){
    if(engine?.state) engine.save();
    if($("gameDialog").open) $("gameDialog").close();
  }

  function newGameSetup(){
    if(engine) engine.clearSave();
    setup={human:[],ai:[]};
    selectedHumanCard=null;
    $("gameSetupPanel").hidden=false;
    $("gameBoardPanel").hidden=true;
    renderSetup();
  }

  function renderSetup(){
    const protocols=engine.supportedProtocols();
    renderProtocolChoiceGrid("gameHumanProtocolChoices",protocols,"human");
    renderProtocolChoiceGrid("gameAiProtocolChoices",protocols,"ai");
    $("gameStartButton").disabled=setup.human.length!==3||setup.ai.length!==3;
  }

  function renderProtocolChoiceGrid(targetId, protocols, side){
    const target=$(targetId); target.innerHTML="";
    for(const name of protocols){
      const b=document.createElement("button");
      const art=safeProtocolArt(name);
      const picked=setup[side].includes(name);
      const usedOther=setup[side==="human"?"ai":"human"].includes(name);
      b.className=`game-protocol-choice${picked?" selected":""}`;
      b.disabled=usedOther;
      b.innerHTML=`<div class="game-protocol-thumb" ${art?`style="background-image:url('${art}')"`:""}></div><strong>${name}</strong>`;
      b.onclick=()=>{
        if(picked) setup[side]=setup[side].filter(x=>x!==name);
        else if(setup[side].length<3 && !usedOther) setup[side].push(name);
        renderSetup();
      };
      target.appendChild(b);
    }
  }

  function randomSetup(){
    const p=engine.supportedProtocols();
    const shuffled=[...p].sort(()=>Math.random()-.5).slice(0,6);
    setup.human=shuffled.slice(0,3);
    setup.ai=shuffled.slice(3,6);
    renderSetup();
  }

  function startGame(){
    if(setup.human.length!==3||setup.ai.length!==3) return;
    engine.newGame({
      humanName:window.playerNames?.p1 || "Player 1",
      humanProtocols:setup.human,
      aiProtocols:setup.ai
    });
    engine.save();
    showBoard();
    renderBoard();
  }

  function showBoard(){
    $("gameSetupPanel").hidden=true;
    $("gameBoardPanel").hidden=false;
  }

  function cardEffectText(card){
    const raw=[card.top,card.middle,card.bottom].filter(Boolean).join(" ");
    return raw.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();
  }

  function renderStack(cards, player, lineId){
    const wrap=document.createElement("div");
    wrap.className="game-stack";
    if(!cards.length){
      wrap.innerHTML=`<div class="game-empty-stack">EMPTY</div>`;
      return wrap;
    }
    cards.forEach((card,idx)=>{
      const el=document.createElement("div");
      el.className=`game-board-card ${card.face==="down"?"face-down":""}${idx===cards.length-1?" top-card":""}`;
      const [accent,deep]=visual(card.protocol);
      el.style.setProperty("--card-accent",accent);
      el.style.setProperty("--card-deep",deep);
      el.innerHTML=`<div class="game-board-card-top"><span>${card.protocol}</span><b>${card.value}</b></div>
        <div class="game-board-card-effect">${card.face==="down"?"FACE-DOWN":cardEffectText(card)}</div>`;
      wrap.appendChild(el);
    });
    return wrap;
  }

  function renderLines(targetId, player){
    const target=$(targetId); target.innerHTML="";
    engine.state.lines.forEach(line=>{
      const lineEl=document.createElement("div");
      lineEl.className="game-line";
      lineEl.dataset.line=String(line.id);
      lineEl.appendChild(renderStack(line[player],player,line.id));

      if(player==="human" && selectedHumanCard!==null && engine.state.active==="human" && !engine.state.hasTakenAction && !engine.state.pendingCompile.length){
        const legal=engine.legalLinesForCard("human",selectedHumanCard,selectedFace);
        if(legal.includes(line.id)){
          lineEl.classList.add("legal-target");
          lineEl.onclick=()=>playSelectedHumanCard(line.id);
        }
      }
      target.appendChild(lineEl);
    });
  }

  function renderScores(){
    const target=$("gameLineScores"); target.innerHTML="";
    for(let i=0;i<3;i++){
      const h=engine.lineValue("human",i), a=engine.lineValue("ai",i);
      const el=document.createElement("div");
      el.className="game-line-score";
      el.innerHTML=`<span>${a}</span><strong>LINE ${i+1}</strong><span>${h}</span>`;
      target.appendChild(el);
    }
  }

  function renderHumanHand(){
    const target=$("gameHumanHand"); target.innerHTML="";
    for(const card of engine.state.players.human.hand){
      const el=document.createElement("button");
      const [accent,deep]=visual(card.protocol);
      el.className=`game-hand-card${selectedHumanCard===card.instanceId?" selected":""}`;
      el.style.setProperty("--card-accent",accent);
      el.style.setProperty("--card-deep",deep);
      el.disabled=engine.state.active!=="human"||engine.state.hasTakenAction||engine.state.pendingCompile.length;
      el.innerHTML=`<div class="game-hand-card-head"><span>${card.protocol}</span><b>${card.value}</b></div>
        <div class="game-hand-card-text">${cardEffectText(card)}</div>`;
      el.onclick=()=>{
        selectedHumanCard=(selectedHumanCard===card.instanceId?null:card.instanceId);
        renderBoard();
      };
      target.appendChild(el);
    }
  }

  function playSelectedHumanCard(lineId){
    if(!selectedHumanCard) return;
    const result=engine.playCard("human",selectedHumanCard,lineId,selectedFace);
    if(result.ok){
      selectedHumanCard=null;
      engine.save();
      renderBoard();
    }
  }

  function endHumanTurn(){
    if(!engine.finishTurn("human")) return;
    engine.save();
    renderBoard();
    setTimeout(()=>{
      if(engine.state.active==="ai"){
        engine.doAiTurn();
        engine.save();
        renderBoard();
      }
    },650);
  }

  function renderLog(){
    $("gameActionLog").innerHTML=engine.state.log.map(x=>`<div>${x.message}</div>`).join("");
  }

  function renderBoard(){
    const s=engine.state;
    if(!s) return;

    $("gameBoardHumanName").textContent=s.humanName;
    $("gameControlHumanName").textContent=s.humanName;
    $("gameControlHuman").classList.toggle("active",s.control==="human");
    $("gameControlAi").classList.toggle("active",s.control==="ai");

    $("gameTurnLabel").textContent=s.active==="human"?"YOUR TURN":"AI TURN";
    $("gameTurnNumber").textContent=`Turn ${s.turn}`;
    $("gameStatusText").textContent=s.pendingManualEffects.some(x=>!x.resolved)
      ?"Playable prototype · some complex effects logged for manual confirmation"
      :"Playable prototype";

    $("gameHumanHandCount").textContent=`Hand ${s.players.human.hand.length}`;
    $("gameHumanCacheCount").textContent=`Cache ${s.players.human.cache.length}`;
    $("gameAiHandCount").textContent=`Hand ${s.players.ai.hand.length}`;
    $("gameAiCacheCount").textContent=`Cache ${s.players.ai.cache.length}`;

    renderLines("gameHumanLines","human");
    renderLines("gameAiLines","ai");
    renderScores();
    renderHumanHand();
    renderLog();

    const selected=s.players.human.hand.find(c=>c.instanceId===selectedHumanCard);
    $("gameSelectedCardText").textContent=selected?`${selected.protocol} ${selected.value} selected`:"";
    $("gameCancelSelectionButton").disabled=!selectedHumanCard;
    $("gameEndTurnButton").disabled=!(s.active==="human"&&s.hasTakenAction&&!s.pendingCompile.length);
    $("gameRefreshButton").disabled=!(s.active==="human"&&!s.hasTakenAction&&!s.pendingCompile.length);
    $("gameFaceUpButton").classList.toggle("active",selectedFace==="up");
    $("gameFaceDownButton").classList.toggle("active",selectedFace==="down");

    const compilePrompt=$("gameCompilePrompt");
    const compileChoices=$("gameCompileChoices");
    if(s.active==="human" && s.pendingCompile.length){
      compilePrompt.hidden=false;
      $("gameCompilePromptText").textContent="You meet the Compile condition. Compile one eligible line before taking any other action.";
      compileChoices.innerHTML="";
      s.pendingCompile.forEach(lineId=>{
        const b=document.createElement("button");
        const p=engine.protocolAt("human",lineId);
        b.className="primary-button";
        b.textContent=`Compile Line ${lineId+1} · ${p?p.name:"Protocol"}`;
        b.onclick=()=>{engine.compileLine("human",lineId);engine.save();renderBoard();};
        compileChoices.appendChild(b);
      });
    }else{
      compilePrompt.hidden=true;compileChoices.innerHTML="";
    }

    if(s.status==="finished"){
      $("gameStatusText").textContent=s.winner==="human"?"You win!":"Standard AI wins.";
      $("gameEndTurnButton").disabled=true;$("gameRefreshButton").disabled=true;
    }
  }

  document.addEventListener("DOMContentLoaded",()=>{
    $("playAiButton")?.addEventListener("click",openGame);
    $("closeGameButton")?.addEventListener("click",closeGame);
    $("gameNewButton")?.addEventListener("click",newGameSetup);
    $("gameSaveButton")?.addEventListener("click",()=>{engine?.save(); $("gameStatusText").textContent="Game saved locally";});
    $("gameRandomSetupButton")?.addEventListener("click",randomSetup);
    $("gameStartButton")?.addEventListener("click",startGame);
    $("gameCancelSelectionButton")?.addEventListener("click",()=>{selectedHumanCard=null;renderBoard();});
    $("gameEndTurnButton")?.addEventListener("click",endHumanTurn);
    $("gameRefreshButton")?.addEventListener("click",()=>{if(engine.refresh("human")){selectedHumanCard=null;engine.save();renderBoard();}});
    $("gameFaceUpButton")?.addEventListener("click",()=>{selectedFace="up";renderBoard();});
    $("gameFaceDownButton")?.addEventListener("click",()=>{selectedFace="down";renderBoard();});
  });

  window.openPlayableCompileGame=openGame;
})();
