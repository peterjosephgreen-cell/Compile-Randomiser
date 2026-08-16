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

  card.innerHTML = `
    <div class="protocol-symbol">${symbols[protocol.name] || "⌘"}</div>
    <div>
      <div class="protocol-name">${protocol.name.toUpperCase()}</div>
      <div class="protocol-set">${protocol.set}</div>
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
  view.innerHTML = "";

  const cards = protocolCardReference[protocol.name];

  if (!cards) {
    view.innerHTML = `
      <div class="unavailable-reference">
        The tap-to-view screen is ready for ${protocol.name}, but its full verified
        card list has not been loaded yet.<br><br>
        Main 2 and Aux 2 references will appear here once their complete card data
        has been verified.
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
    "Effects are concise reference summaries rather than exact card wording. Use the physical card for precise rules text.";
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
