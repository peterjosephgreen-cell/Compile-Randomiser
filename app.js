const protocolSets = {
  "Main 1": [
    "Darkness", "Death", "Fire", "Gravity", "Life", "Light",
    "Metal", "Plague", "Psychic", "Speed", "Spirit", "Water"
  ],
  "Aux 1": ["Love", "Hate", "Apathy"],
  "Main 2": [
    "Chaos", "Clarity", "Corruption", "Courage", "Fear", "Ice",
    "Luck", "Mirror", "Peace", "Smoke", "Time", "War"
  ],
  "Aux 2": ["Assimilation", "Diversity", "Unity"]
};

const setShortNames = {
  "Main 1": "M1", "Aux 1": "A1", "Main 2": "M2", "Aux 2": "A2"
};

const symbols = {
  Darkness: "◐", Death: "✕", Fire: "♨", Gravity: "↓",
  Life: "❧", Light: "☀", Metal: "⬡", Plague: "✣",
  Psychic: "◎", Speed: "ϟ", Spirit: "✦", Water: "◒",
  Love: "♥", Hate: "⚡", Apathy: "−",
  Chaos: "⌁", Clarity: "◉", Corruption: "✢", Courage: "▲",
  Fear: "!", Ice: "❄", Luck: "⚄", Mirror: "◫",
  Peace: "◇", Smoke: "≋", Time: "◷", War: "⚔",
  Assimilation: "⋈", Diversity: "⠿", Unity: "∞"
};


const protocolVisuals = {
  Darkness: ["#7257ff", "#21144f"], Death: ["#e85d75", "#4b1220"],
  Fire: ["#ff6947", "#5b180d"], Gravity: ["#7f8cff", "#202756"],
  Life: ["#68e39a", "#113e2a"], Light: ["#ffe36e", "#51440d"],
  Metal: ["#a8bed0", "#263744"], Plague: ["#9ee65d", "#243f12"],
  Psychic: ["#d879ff", "#431554"], Speed: ["#55ecff", "#0d4750"],
  Spirit: ["#b7a0ff", "#33265c"], Water: ["#55a9ff", "#10355f"],
  Love: ["#ff75b5", "#591636"], Hate: ["#ff4964", "#5a101b"],
  Apathy: ["#8d98a8", "#29303a"], Chaos: ["#ff8b3d", "#55260e"],
  Clarity: ["#79f3ff", "#12464c"], Corruption: ["#a95cff", "#3d1457"],
  Courage: ["#ffc458", "#51380d"], Fear: ["#ff5e86", "#551426"],
  Ice: ["#a8eaff", "#1a4450"], Luck: ["#80e57f", "#1d481d"],
  Mirror: ["#b8d8ff", "#263d5a"], Peace: ["#9fe6d4", "#1c4b40"],
  Smoke: ["#aab0bb", "#333741"], Time: ["#6fd6ff", "#18455a"],
  War: ["#ff775e", "#552016"], Assimilation: ["#6fe8c6", "#16493e"],
  Diversity: ["#ffcc68", "#4f390f"], Unity: ["#d69cff", "#47225b"]
};

const protocolCardReference = {
  "Apathy": [
    { value: 0, effect: "Draw 3, then turn two other cards face-down." },
    { value: 1, effect: "You may draw; if you do, delete another card, then this one." },
    { value: 2, effect: "When covered, first draw a card and flip another card." },
    { value: 3, effect: "Flip another card; this card then becomes face-down." },
    { value: 4, effect: "Face-down cards in this line gain extra value." },
    { value: 5, effect: "Discard a card." },
  ],
  "Darkness": [
    { value: 0, effect: "Turn another card face-down; this card also turns face-down." },
    { value: 1, effect: "Draw based on how many face-down cards are in play." },
    { value: 2, effect: "Move a face-down card to this line." },
    { value: 3, effect: "Turn another card face-down." },
    { value: 4, effect: "Opponent reveals a card from hand; you may force a discard." },
    { value: 5, effect: "Discard a card." },
  ],
  "Death": [
    { value: 0, effect: "Delete every value-1 or value-2 card in one line." },
    { value: 1, effect: "Delete a face-down card." },
    { value: 2, effect: "Delete a low-value card." },
    { value: 3, effect: "Delete a card; gain an extra benefit if it was yours." },
    { value: 4, effect: "Return or delete a card depending on its state." },
    { value: 5, effect: "Discard a card." },
  ],
  "Fire": [
    { value: 0, effect: "Flip another card and draw two; has an extra effect if covered." },
    { value: 1, effect: "Discard one to delete a card." },
    { value: 2, effect: "Discard one to return a card." },
    { value: 3, effect: "At end of turn, you may discard one to flip a card." },
    { value: 4, effect: "Discard any number, then draw one more card than you discarded." },
    { value: 5, effect: "Discard a card." },
  ],
  "Gravity": [
    { value: 0, effect: "Builds face-down cards beneath itself based on cards in the line." },
    { value: 1, effect: "Draw two, then shift a card into or out of this line." },
    { value: 2, effect: "Flip a card, then move it to this line." },
    { value: 4, effect: "Move a face-down card to this line." },
    { value: 5, effect: "Discard a card." },
    { value: 6, effect: "Opponent adds the top card of their deck face-down to this line." },
  ],
  "Hate": [
    { value: 0, effect: "Delete a card." },
    { value: 1, effect: "Discard three, then delete two cards." },
    { value: 2, effect: "Both players delete their highest-value card." },
    { value: 3, effect: "After you delete cards, draw one." },
    { value: 4, effect: "When covered, delete the lowest-value covered card in this line first." },
    { value: 5, effect: "Discard a card." },
  ],
  "Life": [
    { value: 0, effect: "Add the top card of your deck face-down to each line where you have a card; deletes itself if covered." },
    { value: 1, effect: "Flip two cards." },
    { value: 2, effect: "Draw one and optionally reveal a face-down card." },
    { value: 3, effect: "When covered, first add a face-down card to another line." },
    { value: 4, effect: "If covering another card, draw one." },
    { value: 5, effect: "Discard a card." },
  ],
  "Light": [
    { value: 0, effect: "Flip a card, then draw cards equal to its value." },
    { value: 1, effect: "Draw one at end of turn." },
    { value: 2, effect: "Draw two; reveal a face-down card and optionally shift or flip it." },
    { value: 3, effect: "Move all face-down cards in this line to another line." },
    { value: 4, effect: "Opponent reveals their hand." },
    { value: 5, effect: "Discard a card." },
  ],
  "Love": [
    { value: 1, effect: "Draw the top card of your opponent's deck; can trade a hand card for extra draws at end of turn." },
    { value: 2, effect: "Opponent draws one, then refresh." },
    { value: 3, effect: "Take a random card from opponent's hand, then give them one from yours." },
    { value: 4, effect: "Reveal a card from your hand, then flip a card." },
    { value: 5, effect: "Discard a card." },
    { value: 6, effect: "Opponent draws two cards." },
  ],
  "Metal": [
    { value: 0, effect: "Reduces the opponent's total in this line and flips a card." },
    { value: 1, effect: "Draw two; opponent cannot Compile on their next turn." },
    { value: 2, effect: "Opponent cannot play face-down cards in this line." },
    { value: 3, effect: "Draw one; can wipe another overcrowded line." },
    { value: 5, effect: "Discard a card." },
    { value: 6, effect: "Deletes itself before it would be covered or flipped." },
  ],
  "Plague": [
    { value: 0, effect: "Opponent discards one and cannot play into this line." },
    { value: 1, effect: "Opponent discards one; you draw after their discards." },
    { value: 2, effect: "Discard cards to make the opponent discard even more." },
    { value: 3, effect: "Flip every other face-up card." },
    { value: 4, effect: "At end of turn, opponent deletes one of their face-down cards; this may flip." },
    { value: 5, effect: "Discard a card." },
  ],
  "Psychic": [
    { value: 0, effect: "Draw two; opponent discards two and reveals their hand." },
    { value: 1, effect: "Opponent is restricted to face-down plays until this flips at your next start." },
    { value: 2, effect: "Opponent discards two; then you rearrange their Protocols." },
    { value: 3, effect: "Opponent discards one; shift one of their cards." },
    { value: 4, effect: "At end of turn, you may return an opponent card, then flip this." },
    { value: 5, effect: "Discard a card." },
  ],
  "Speed": [
    { value: 0, effect: "Immediately play another card." },
    { value: 1, effect: "Draw two; also rewards clearing cache." },
    { value: 2, effect: "If deleted by compiling, it can shift instead." },
    { value: 3, effect: "Shift one of your cards; may shift again at end of turn then flip." },
    { value: 4, effect: "Shift one opponent face-down card." },
    { value: 5, effect: "Discard a card." },
  ],
  "Spirit": [
    { value: 0, effect: "Refresh and draw one, then skip your cache check." },
    { value: 1, effect: "Allows plays into any line and draws two; later requires a discard or flip." },
    { value: 2, effect: "Optionally flip a card." },
    { value: 3, effect: "After drawing, this card may shift even when covered." },
    { value: 4, effect: "Swap the positions of two of your Protocols." },
    { value: 5, effect: "Discard a card." },
  ],
  "Water": [
    { value: 0, effect: "Flip another card, then flip this card." },
    { value: 1, effect: "Put the top card of your deck face-down in each other line." },
    { value: 2, effect: "Shift a card; gains flexibility around face-down cards." },
    { value: 3, effect: "Return a card and interact with face-down cards." },
    { value: 4, effect: "Draw and/or flip based on cards in this line." },
    { value: 5, effect: "Discard a card." },
  ],
  "Chaos": [
    { value: 0, effect: "Flip one covered card in every line. At your next start, each player draws the top card of the other player's deck." },
    { value: 1, effect: "Rearrange both your Protocols and your opponent's Protocols." },
    { value: 2, effect: "Shift one of your covered cards." },
    { value: 3, effect: "May be played without matching the Protocol of the line." },
    { value: 4, effect: "At end of turn, discard your whole hand and draw the same number of cards." },
    { value: 5, effect: "Discard one card." },
  ],
  "Clarity": [
    { value: 0, effect: "This line gains +1 total value for every card in your hand." },
    { value: 1, effect: "At start, inspect the top of your deck and optionally discard it. Opponent reveals their hand; before this is covered, draw three." },
    { value: 2, effect: "Search your revealed deck for a value-1 card, draw it, shuffle, then play a value-1 card." },
    { value: 3, effect: "Search your revealed deck for a value-5 card, draw it, then shuffle." },
    { value: 4, effect: "You may shuffle your trash pile back into your deck." },
    { value: 5, effect: "Discard one card." },
  ],
  "Corruption": [
    { value: 0, effect: "At start, flip another face-up card in this stack. This may be played on either player's side without matching Protocols." },
    { value: 1, effect: "Return a card. Cards returned to your opponent go face-down on top of their deck instead of into hand." },
    { value: 2, effect: "Whenever you discard, opponent also discards one. Draw one, then discard one." },
    { value: 3, effect: "You may flip one face-up covered card." },
    { value: 5, effect: "Discard one card." },
    { value: 6, effect: "At end of turn, discard one card or delete this card." },
  ],
  "Courage": [
    { value: 0, effect: "If your hand is empty at start, draw one; also draw one now. At end, you may discard one to make the opponent discard one." },
    { value: 1, effect: "Delete an opponent card in a line where their total is higher than yours." },
    { value: 2, effect: "Draw one. At end, draw another if the opponent is ahead in this line." },
    { value: 3, effect: "At end, you may shift this card to the line where the opponent has their highest total." },
    { value: 5, effect: "Discard one card." },
    { value: 6, effect: "At end, flip this card if the opponent's value in this line is higher than yours." },
  ],
  "Fear": [
    { value: 0, effect: "During your turn, opponent cards lose their middle commands. Also shift or flip one card." },
    { value: 1, effect: "Draw two. Opponent replaces their hand with one fewer card than they discarded." },
    { value: 2, effect: "Return one opponent card." },
    { value: 3, effect: "Shift one opponent card from this line, whether covered or uncovered." },
    { value: 4, effect: "Opponent discards one random card." },
    { value: 5, effect: "Discard one card." },
  ],
  "Ice": [
    { value: 1, effect: "You may shift this card. Whenever the opponent plays into this line, they discard one." },
    { value: 2, effect: "Shift one other card." },
    { value: 3, effect: "At end, if this card is covered, you may shift it." },
    { value: 4, effect: "This card cannot be flipped." },
    { value: 5, effect: "Discard one card." },
    { value: 6, effect: "While you have cards in hand, you cannot draw cards." },
  ],
  "Luck": [
    { value: 0, effect: "Name a value, then draw three. If one of those cards has that value, reveal one and you may play it." },
    { value: 1, effect: "Play the top card of your deck face-down, then flip it without resolving its middle command." },
    { value: 2, effect: "Discard the top card of your deck, then draw cards equal to its value." },
    { value: 3, effect: "Name a Protocol, discard the top card of the opponent's deck, and delete a card if your guess matched." },
    { value: 4, effect: "Discard the top of your deck, then delete a card whose value matches it." },
    { value: 5, effect: "Discard one card." },
  ],
  "Mirror": [
    { value: 0, effect: "This line gains +1 total value for every opponent card in the line." },
    { value: 1, effect: "At end, you may use the middle command of one opponent card as though it were on this card." },
    { value: 2, effect: "Swap all your cards in one stack with all your cards in another stack." },
    { value: 3, effect: "Flip one of your cards and one opponent card in the same line." },
    { value: 4, effect: "Whenever your opponent draws cards, draw one." },
    { value: 5, effect: "Discard one card." },
  ],
  "Peace": [
    { value: 1, effect: "Both players discard their hands. At end, if your hand is empty, draw one." },
    { value: 2, effect: "Draw one, then play one card face-down." },
    { value: 3, effect: "You may discard one, then flip a card whose value is higher than your current hand size." },
    { value: 4, effect: "If you discard during the opponent's turn, draw one afterwards." },
    { value: 5, effect: "Discard one card." },
    { value: 6, effect: "If you have more than one card in hand, flip this card." },
  ],
  "Smoke": [
    { value: 0, effect: "For every line already containing a face-down card, add the top card of your deck there face-down." },
    { value: 1, effect: "Flip one of your cards; you may then shift that card." },
    { value: 2, effect: "This line gains +1 total value for each face-down card in it." },
    { value: 3, effect: "Play one card face-down into a line that already has a face-down card." },
    { value: 4, effect: "Shift one covered face-down card." },
    { value: 5, effect: "Discard one card." },
  ],
  "Time": [
    { value: 0, effect: "Play one card from your trash, then shuffle the remaining trash into your deck." },
    { value: 1, effect: "Flip one covered card, then discard your entire deck." },
    { value: 2, effect: "After you shuffle, draw one and optionally shift this card. You may also shuffle your trash into your deck if trash is non-empty." },
    { value: 3, effect: "Reveal a card from your trash and play it face-down into another line." },
    { value: 4, effect: "Draw two, then discard two." },
    { value: 5, effect: "Discard one card." },
  ],
  "War": [
    { value: 0, effect: "After you refresh, you may flip this. Whenever the opponent draws, you may delete one card." },
    { value: 1, effect: "After the opponent refreshes, you may discard any number of cards and then refresh." },
    { value: 2, effect: "Flip one card. After the opponent compiles, they discard their whole hand." },
    { value: 3, effect: "Draw one. Whenever the opponent discards, you may play one card face-down." },
    { value: 4, effect: "Opponent discards one card." },
    { value: 5, effect: "Discard one card." },
  ],
  "Assimilation": [
    { value: 0, effect: "Take one of the opponent's face-down cards from play into your hand." },
    { value: 1, effect: "Discard one and refresh. After either player refreshes, draw the opponent's top card and discard one card into their trash." },
    { value: 2, effect: "At end, play the top card of the opponent's deck face-down into this stack." },
    { value: 4, effect: "Draw the opponent's top card while they draw the top card of your deck." },
    { value: 5, effect: "Discard one card." },
    { value: 6, effect: "At end, play the top card of your deck face-down on the opponent's side." },
  ],
  "Diversity": [
    { value: 0, effect: "If six different Protocols are represented on cards in play, compile Diversity. At end, you may play a non-Diversity card into this line." },
    { value: 1, effect: "Shift one card, then draw according to the number of different Protocols represented in this line." },
    { value: 3, effect: "This line gains +2 total value if this stack contains any face-up non-Diversity card." },
    { value: 4, effect: "Flip a card whose value is below the number of different Protocols represented in play." },
    { value: 5, effect: "Discard one card." },
    { value: 6, effect: "At end, delete this unless at least four different Protocols are represented in play." },
  ],
  "Unity": [
    { value: 0, effect: "If another Unity card is in play, flip a card or draw one. The same choice triggers before this is covered by another Unity card." },
    { value: 1, effect: "If covered at start, you may shift this. With five or more Unity cards in play, compile Unity and clear that line. Unity cards may be played face-up here." },
    { value: 2, effect: "Draw cards equal to the number of Unity cards currently in play." },
    { value: 3, effect: "If another Unity card is in play, you may flip one face-up card." },
    { value: 4, effect: "At end, if your hand is empty, search your deck for all Unity cards, draw them, then shuffle." },
    { value: 5, effect: "Discard one card." },
  ],
};

const allProtocols = Object.entries(protocolSets).flatMap(([set, names]) =>
  names.map(name => ({ name, set, id: `${set}|${name}` }))
);

let player1 = [];
let player2 = [];
let locked1 = new Set();
let locked2 = new Set();
let lastDeal = [];
let history = loadHistory();
let undoStack = [];

const settings = loadSettings();

function defaultSettings() {
  return {
    enabledSets: Object.fromEntries(Object.keys(protocolSets).map(set => [set, true])),
    excluded: [],
    avoidRepeats: false
  };
}

function loadSettings() {
  const defaults = defaultSettings();
  const saved = localStorage.getItem("compileSettingsV2");
  if (!saved) return defaults;
  try {
    const parsed = JSON.parse(saved);
    return {
      enabledSets: { ...defaults.enabledSets, ...(parsed.enabledSets || {}) },
      excluded: Array.isArray(parsed.excluded) ? parsed.excluded : [],
      avoidRepeats: Boolean(parsed.avoidRepeats)
    };
  } catch (_) {
    return defaults;
  }
}

function saveSettings() {
  localStorage.setItem("compileSettingsV2", JSON.stringify(settings));
}

function getProtocolById(id) {
  return allProtocols.find(p => p.id === id);
}

function getAvailableProtocols() {
  const excluded = new Set(settings.excluded);
  return allProtocols.filter(p => settings.enabledSets[p.set] && !excluded.has(p.id));
}

function secureShuffle(array) {
  const result = [...array];
  if (result.length <= 1) return result;
  const randomValues = new Uint32Array(result.length);
  crypto.getRandomValues(randomValues);
  for (let i = result.length - 1; i > 0; i--) {
    const j = randomValues[i] % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function sanitiseLocks() {
  const availableIds = new Set(getAvailableProtocols().map(p => p.id));
  locked1 = new Set([...locked1].filter(id => availableIds.has(id)));
  locked2 = new Set([...locked2].filter(id => availableIds.has(id) && !locked1.has(id)));

  while (locked1.size > 3) locked1.delete([...locked1][locked1.size - 1]);
  while (locked2.size > 3) locked2.delete([...locked2][locked2.size - 1]);
}

function pickFill(count, excludedIds, preferAvoidIds = new Set()) {
  const pool = getAvailableProtocols().filter(p => !excludedIds.has(p.id));
  let preferred = pool.filter(p => !preferAvoidIds.has(p.id));

  if (preferred.length >= count) {
    return secureShuffle(preferred).slice(0, count);
  }

  const first = secureShuffle(preferred);
  const used = new Set(first.map(p => p.id));
  const fallback = secureShuffle(pool.filter(p => !used.has(p.id)));
  return [...first, ...fallback].slice(0, count);
}


function loadHistory() {
  const saved = localStorage.getItem("compileHistoryV3");
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.slice(0, 20) : [];
  } catch (_) {
    return [];
  }
}

function saveHistory() {
  localStorage.setItem("compileHistoryV3", JSON.stringify(history.slice(0, 20)));
}

function snapshotCurrent() {
  return {
    player1: player1.map(p => p.id),
    player2: player2.map(p => p.id),
    locked1: [...locked1],
    locked2: [...locked2],
    timestamp: Date.now()
  };
}

function restoreSnapshot(snapshot) {
  player1 = snapshot.player1.map(getProtocolById).filter(Boolean);
  player2 = snapshot.player2.map(getProtocolById).filter(Boolean);
  locked1 = new Set(snapshot.locked1 || []);
  locked2 = new Set(snapshot.locked2 || []);
  render();
}

function pushUndoSnapshot() {
  if (player1.length === 3 && player2.length === 3) {
    undoStack.push(snapshotCurrent());
    if (undoStack.length > 10) undoStack.shift();
  }
}

function recordDeal() {
  if (player1.length !== 3 || player2.length !== 3) return;

  history.unshift({
    timestamp: Date.now(),
    player1: player1.map(p => p.id),
    player2: player2.map(p => p.id)
  });

  history = history.slice(0, 20);
  saveHistory();
}

function undoLast() {
  const snapshot = undoStack.pop();
  if (!snapshot) return;
  restoreSnapshot(snapshot);
}

function getUsageStats() {
  const counts = new Map(allProtocols.map(p => [p.id, 0]));

  history.forEach(deal => {
    [...deal.player1, ...deal.player2].forEach(id => {
      counts.set(id, (counts.get(id) || 0) + 1);
    });
  });

  return allProtocols
    .map(p => ({ protocol: p, count: counts.get(p.id) || 0 }))
    .sort((a, b) => b.count - a.count || a.protocol.name.localeCompare(b.protocol.name));
}

function formatHistoryDate(ts) {
  const d = new Date(ts);
  return d.toLocaleString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderHistoryDeals() {
  const target = document.getElementById("historyDealsView");
  target.innerHTML = "";

  if (history.length === 0) {
    target.innerHTML = `<div class="empty-state">No deals recorded yet.</div>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "history-list";

  history.forEach((deal, index) => {
    const item = document.createElement("div");
    item.className = "history-item";

    const p1 = deal.player1.map(getProtocolById).filter(Boolean);
    const p2 = deal.player2.map(getProtocolById).filter(Boolean);

    item.innerHTML = `
      <div class="history-meta">#${history.length - index} · ${formatHistoryDate(deal.timestamp)}</div>
      <div class="history-players">
        <div class="history-player">
          <strong class="player-one">PLAYER 1</strong>
          ${p1.map(p => `<span>${p.name}</span>`).join("")}
        </div>
        <div class="history-player">
          <strong class="player-two">PLAYER 2</strong>
          ${p2.map(p => `<span>${p.name}</span>`).join("")}
        </div>
      </div>
    `;

    list.appendChild(item);
  });

  target.appendChild(list);
}

function renderHistoryStats() {
  const target = document.getElementById("historyStatsView");
  target.innerHTML = "";

  if (history.length === 0) {
    target.innerHTML = `<div class="empty-state">No usage data yet.</div>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "stats-list";

  getUsageStats().forEach(({ protocol, count }) => {
    const row = document.createElement("div");
    row.className = "stat-row";
    row.innerHTML = `
      <div class="stat-name">${protocol.name} <small>${protocol.set}</small></div>
      <div class="stat-count">${count}</div>
    `;
    list.appendChild(row);
  });

  target.appendChild(list);
}

function updateUndoButton() {
  const button = document.getElementById("undoButton");
  if (button) button.disabled = undoStack.length === 0;
}

function randomiseAll() {
  const pool = getAvailableProtocols();

  if (player1.length === 3 && player2.length === 3) {
    pushUndoSnapshot();
  }

  if (pool.length < 6) {
    player1 = [];
    player2 = [];
    render();
    return;
  }

  if (player1.length === 3 && player2.length === 3) {
    lastDeal = [...player1, ...player2].map(p => p.id);
  }

  sanitiseLocks();

  const p1Locked = [...locked1].map(getProtocolById).filter(Boolean);
  const p2Locked = [...locked2].map(getProtocolById).filter(Boolean);
  const taken = new Set([...locked1, ...locked2]);

  const avoid = settings.avoidRepeats ? new Set(lastDeal) : new Set();

  const p1Fill = pickFill(3 - p1Locked.length, taken, avoid);
  p1Fill.forEach(p => taken.add(p.id));

  const p2Fill = pickFill(3 - p2Locked.length, taken, avoid);
  p2Fill.forEach(p => taken.add(p.id));

  player1 = [...p1Locked, ...p1Fill];
  player2 = [...p2Locked, ...p2Fill];
  recordDeal();
  render();
}

function rerollPlayer(playerNumber) {
  const pool = getAvailableProtocols();
  if (player1.length === 3 && player2.length === 3) {
    pushUndoSnapshot();
  }
  if (pool.length < 6) return;

  sanitiseLocks();

  const mineLocks = playerNumber === 1 ? locked1 : locked2;
  const otherPlayer = playerNumber === 1 ? player2 : player1;
  const lockedProtocols = [...mineLocks].map(getProtocolById).filter(Boolean);

  const blocked = new Set(otherPlayer.map(p => p.id));
  mineLocks.forEach(id => blocked.add(id));

  const avoid = settings.avoidRepeats ? new Set(lastDeal) : new Set();
  const fill = pickFill(3 - lockedProtocols.length, blocked, avoid);
  const next = [...lockedProtocols, ...fill];

  if (playerNumber === 1) player1 = next;
  else player2 = next;

  recordDeal();
  render();
}

function toggleLock(playerNumber, id) {
  const locks = playerNumber === 1 ? locked1 : locked2;

  if (locks.has(id)) {
    locks.delete(id);
  } else {
    if (locks.size >= 3) return;
    locks.add(id);
  }
  render();
}

function swapPlayers() {
  if (player1.length === 3 && player2.length === 3) {
    pushUndoSnapshot();
  }
  [player1, player2] = [player2, player1];
  [locked1, locked2] = [locked2, locked1];
  render();
}

function protocolCard(protocol, playerClass, playerNumber) {
  const isLocked = (playerNumber === 1 ? locked1 : locked2).has(protocol.id);
  const card = document.createElement("div");
  card.className = `protocol-card ${playerClass}${isLocked ? " locked" : ""}`;
  const visual = protocolVisuals[protocol.name] || ["#4ee9ff", "#123a45"];
  card.style.setProperty("--protocol-accent", visual[0]);
  card.style.setProperty("--protocol-deep", visual[1]);

  card.innerHTML = `
    <div class="protocol-symbol">${symbols[protocol.name] || "⌘"}</div>
    <div>
      <div class="protocol-name">${protocol.name.toUpperCase()}</div>
      <div class="protocol-set">${protocol.set}</div>
      <div class="tap-hint">TAP FOR CARDS</div>
    </div>
    <div class="set-pill">${setShortNames[protocol.set]}</div>
    <button class="lock-button ${isLocked ? "active" : ""}"
            aria-label="${isLocked ? "Unlock" : "Lock"} ${protocol.name}"
            title="${isLocked ? "Unlock" : "Lock"} ${protocol.name}">
      ${isLocked ? "🔒" : "🔓"}
    </button>
  `;

  card.querySelector(".lock-button").addEventListener("click", (event) => {
    event.stopPropagation();
    toggleLock(playerNumber, protocol.id);
  });

  card.addEventListener("click", () => {
    showProtocolReference(protocol);
  });

  return card;
}


function showProtocolReference(protocol) {
  const dialog = document.getElementById("protocolDialog");
  const title = document.getElementById("protocolDialogTitle");
  const subtitle = document.getElementById("protocolDialogSubtitle");
  const view = document.getElementById("protocolCardsView");

  title.textContent = protocol.name;
  subtitle.textContent = `${protocol.set} · Card reference`;
  const visual = protocolVisuals[protocol.name] || ["#4ee9ff", "#123a45"];
  dialog.style.setProperty("--protocol-accent", visual[0]);
  dialog.style.setProperty("--protocol-deep", visual[1]);
  view.innerHTML = "";

  const cards = protocolCardReference[protocol.name];

  if (!cards) {
    view.innerHTML = `
      <div class="unavailable-reference">
        A verified card reference has not yet been loaded for ${protocol.name}.
      </div>
    `;
    dialog.showModal();
    return;
  }

  const list = document.createElement("div");
  list.className = "card-reference-list";

  cards.forEach(card => {
    const item = document.createElement("div");
    item.className = "reference-card";
    item.innerHTML = `
      <div class="reference-value">${card.value}</div>
      <div class="reference-effect">${card.effect}</div>
    `;
    list.appendChild(item);
  });

  view.appendChild(list);

  const note = document.createElement("div");
  note.className = "reference-note";
  note.textContent =
    "Effects are concise reference summaries based on verified card data and published errata. Use the physical card or official Codex for precise rules text.";
  view.appendChild(note);

  dialog.showModal();
}

function renderPlayer(targetId, protocols, playerClass, playerNumber) {
  const container = document.getElementById(targetId);
  container.innerHTML = "";
  protocols.forEach(protocol =>
    container.appendChild(protocolCard(protocol, playerClass, playerNumber))
  );
}

function render() {
  renderPlayer("player1", player1, "p1", 1);
  renderPlayer("player2", player2, "p2", 2);

  const poolCount = getAvailableProtocols().length;
  document.getElementById("poolCount").textContent =
    `${poolCount} of ${allProtocols.length} Protocols available`;

  document.getElementById("warning").hidden = poolCount >= 6;
  document.getElementById("randomiseButton").disabled = poolCount < 6;

  const chips = document.getElementById("statusChips");
  chips.innerHTML = "";
  const lockCount = locked1.size + locked2.size;

  if (lockCount > 0) {
    const chip = document.createElement("span");
    chip.className = "status-chip";
    chip.textContent = `🔒 ${lockCount} locked`;
    chips.appendChild(chip);
  }

  if (settings.avoidRepeats) {
    const chip = document.createElement("span");
    chip.className = "status-chip";
    chip.textContent = "↺ No repeats";
    chips.appendChild(chip);
  }

  updateUndoButton();
}

function setProtocolExcluded(id, excluded) {
  const current = new Set(settings.excluded);
  if (excluded) current.add(id);
  else current.delete(id);
  settings.excluded = [...current];

  if (excluded) {
    locked1.delete(id);
    locked2.delete(id);
  }

  saveSettings();
  randomiseAll();
}

function buildSettingsUI() {
  const target = document.getElementById("setToggles");
  target.innerHTML = "";

  document.getElementById("avoidRepeatsToggle").checked = settings.avoidRepeats;

  Object.entries(protocolSets).forEach(([set, names]) => {
    const details = document.createElement("details");
    details.className = "set-block";

    const availableInSet = names.filter(name =>
      !settings.excluded.includes(`${set}|${name}`)
    ).length;

    const summary = document.createElement("summary");
    summary.className = "set-summary";
    summary.innerHTML = `
      <span class="set-title">
        <strong>${set}</strong><br>
        <small>${availableInSet} of ${names.length} Protocols available</small>
      </span>
      <span class="chevron">⌄</span>
    `;
    details.appendChild(summary);

    const controls = document.createElement("div");
    controls.className = "set-controls";

    const master = document.createElement("label");
    master.className = "set-master-row";
    master.innerHTML = `
      <span>Use this set</span>
      <input class="switch" type="checkbox" ${settings.enabledSets[set] ? "checked" : ""}>
    `;

    master.querySelector("input").addEventListener("change", event => {
      settings.enabledSets[set] = event.target.checked;
      saveSettings();
      randomiseAll();
      buildSettingsUI();
    });

    controls.appendChild(master);

    names.forEach(name => {
      const id = `${set}|${name}`;
      const isAvailable = !settings.excluded.includes(id);

      const row = document.createElement("label");
      row.className = "protocol-toggle-row";
      row.innerHTML = `
        <span>${name}</span>
        <input class="protocol-check" type="checkbox" ${isAvailable ? "checked" : ""}>
      `;

      row.querySelector("input").addEventListener("change", event => {
        setProtocolExcluded(id, !event.target.checked);
        buildSettingsUI();
      });

      controls.appendChild(row);
    });

    details.appendChild(controls);
    target.appendChild(details);
  });
}

document.getElementById("randomiseButton").addEventListener("click", randomiseAll);
document.getElementById("swapButton").addEventListener("click", swapPlayers);

document.querySelectorAll("[data-reroll]").forEach(button => {
  button.addEventListener("click", () =>
    rerollPlayer(Number(button.dataset.reroll))
  );
});

const settingsDialog = document.getElementById("settingsDialog");

document.getElementById("settingsButton").addEventListener("click", () => {
  buildSettingsUI();
  settingsDialog.showModal();
});

document.getElementById("closeSettingsButton").addEventListener("click", () => {
  settingsDialog.close();
});

document.getElementById("doneSettingsButton").addEventListener("click", () => {
  settingsDialog.close();
});

document.getElementById("avoidRepeatsToggle").addEventListener("change", event => {
  settings.avoidRepeats = event.target.checked;
  saveSettings();
  render();
});

document.getElementById("enableAllButton").addEventListener("click", () => {
  Object.keys(settings.enabledSets).forEach(set => settings.enabledSets[set] = true);
  settings.excluded = [];
  saveSettings();
  buildSettingsUI();
  randomiseAll();
});

document.getElementById("clearLocksButton").addEventListener("click", () => {
  locked1.clear();
  locked2.clear();
  render();
});


document.getElementById("closeProtocolButton").addEventListener("click", () => {
  document.getElementById("protocolDialog").close();
});

document.getElementById("undoButton").addEventListener("click", undoLast);

const historyDialog = document.getElementById("historyDialog");

document.getElementById("historyButton").addEventListener("click", () => {
  renderHistoryDeals();
  renderHistoryStats();
  document.getElementById("historyDealsView").hidden = false;
  document.getElementById("historyStatsView").hidden = true;
  document.getElementById("historyTabDeals").classList.add("active");
  document.getElementById("historyTabStats").classList.remove("active");
  historyDialog.showModal();
});

document.getElementById("closeHistoryButton").addEventListener("click", () => {
  historyDialog.close();
});

document.getElementById("historyTabDeals").addEventListener("click", () => {
  document.getElementById("historyDealsView").hidden = false;
  document.getElementById("historyStatsView").hidden = true;
  document.getElementById("historyTabDeals").classList.add("active");
  document.getElementById("historyTabStats").classList.remove("active");
});

document.getElementById("historyTabStats").addEventListener("click", () => {
  document.getElementById("historyDealsView").hidden = true;
  document.getElementById("historyStatsView").hidden = false;
  document.getElementById("historyTabDeals").classList.remove("active");
  document.getElementById("historyTabStats").classList.add("active");
});

document.getElementById("clearHistoryButton").addEventListener("click", () => {
  history = [];
  saveHistory();
  renderHistoryDeals();
  renderHistoryStats();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

randomiseAll();
