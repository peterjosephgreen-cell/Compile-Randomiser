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
  "Aux 2": ["Assimilation", "Diversity", "Unity"],
  "Main 3": [
    "Ambush", "Envy", "Fulcrum", "Gluttony", "Greed", "Lust",
    "Momentum", "Nova", "Overwhelm", "Pride", "Sloth", "Wrath"
  ],
  "Aux 3": ["Flexible", "Inert", "Rigid"]
};

const setShortNames = {
  "Main 1": "M1", "Aux 1": "A1", "Main 2": "M2", "Aux 2": "A2", "Main 3": "M3"
};


const protocolIconImages = {
  Ambush: "main3/icons/ambush.webp",
  Envy: "main3/icons/envy.webp",
  Fulcrum: "main3/icons/fulcrum.webp",
  Gluttony: "main3/icons/gluttony.webp",
  Greed: "main3/icons/greed.webp",
  Lust: "main3/icons/lust.webp",
  Momentum: "main3/icons/momentum.webp",
  Nova: "main3/icons/nova.webp",
  Overwhelm: "main3/icons/overwhelm.webp",
  Pride: "main3/icons/pride.webp",
  Sloth: "main3/icons/sloth.webp",
  Wrath: "main3/icons/wrath.webp"
};

const protocolArtImages = {
  Ambush: "main3/art/ambush.webp",
  Envy: "main3/art/envy.webp",
  Fulcrum: "main3/art/fulcrum.webp",
  Gluttony: "main3/art/gluttony.webp",
  Greed: "main3/art/greed.webp",
  Lust: "main3/art/lust.webp",
  Momentum: "main3/art/momentum.webp",
  Nova: "main3/art/nova.webp",
  Overwhelm: "main3/art/overwhelm.webp",
  Pride: "main3/art/pride.webp",
  Sloth: "main3/art/sloth.webp",
  Wrath: "main3/art/wrath.webp",
  "Apathy": "protocol-art/apathy.webp",
  "Chaos": "protocol-art/chaos.webp",
  "Darkness": "protocol-art/darkness.webp",
  "Death": "protocol-art/death.webp",
  "Fire": "protocol-art/fire.webp",
  "Gravity": "protocol-art/gravity.webp",
  "Hate": "protocol-art/hate.webp",
  "Life": "protocol-art/life.webp",
  "Light": "protocol-art/light.webp",
  "Love": "protocol-art/love.webp",
  "Metal": "protocol-art/metal.webp",
  "Plague": "protocol-art/plague.webp",
  "Psychic": "protocol-art/psychic.webp",
  "Spirit": "protocol-art/spirit.webp",
  "Water": "protocol-art/water.webp",
  "Flexible": "protocol-art/flexible.webp",
  "Ice": "protocol-art/ice.webp",
  "Inert": "protocol-art/inert.webp",
  "Luck": "protocol-art/luck.webp",
  "Mirror": "protocol-art/mirror.webp",
  "Peace": "protocol-art/peace.webp",
  "Rigid": "protocol-art/rigid.webp",
  "Smoke": "protocol-art/smoke.webp",
  "Time": "protocol-art/time.webp",
  "War": "protocol-art/war.webp",
  "Clarity": "protocol-art/clarity.webp",
  "Courage": "protocol-art/courage.webp",
  "Fear": "protocol-art/fear.webp"
};


function resolvePublisherBackground(art) {
  return art.startsWith("../protocol-art/")
    ? art.slice(3)
    : `backgrounds/${art}`;
}

function protocolSymbolMarkup(name) {
  if (protocolIconImages[name]) {
    return `<img class="publisher-protocol-icon" src="${protocolIconImages[name]}" alt="">`;
  }
  return symbols[name] || "";
}

const symbols = {
  Darkness: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="19" fill="none" stroke="currentColor" stroke-width="5"/>
    <path d="M35 13a19 19 0 1 0 0 38c-8-4-12-10-12-19s4-15 12-19Z" fill="currentColor"/>
  </svg>`,

  Death: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M19 17 32 9l13 8 5 14-5 16-13 8-13-8-5-16Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="m22 22 20 20M42 22 22 42" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
  </svg>`,

  Fire: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M34 8c3 12-7 14-3 24 2-6 7-9 11-13 8 12 9 23 1 31-7 8-20 8-27 0-8-10-4-22 7-31-1 8 1 12 5 15-2-12 5-18 6-26Z" fill="currentColor"/>
    <path d="M32 35c7 7 5 15 0 18-6-3-8-11 0-18Z" fill="var(--protocol-deep)"/>
  </svg>`,

  Gravity: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="28" r="15" fill="none" stroke="currentColor" stroke-width="4"/>
    <ellipse cx="32" cy="28" rx="25" ry="9" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M32 8v36m0 0-8-9m8 9 8-9" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  Life: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M15 39c3-18 18-27 35-24-1 18-11 32-29 34" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
    <path d="M20 46c8-8 14-15 26-25M28 38l-1-12M35 31l10 2" fill="none" stroke="currentColor" stroke-width="3"/>
  </svg>`,

  Light: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M8 32c7-11 15-17 24-17s17 6 24 17c-7 11-15 17-24 17S15 43 8 32Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <ellipse cx="32" cy="32" rx="8" ry="15" fill="currentColor"/>
    <path d="M32 6v7M32 51v7M6 32h7M51 32h7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  Metal: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="m32 7 20 12v26L32 57 12 45V19Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="m32 16 11 7v18l-11 7-11-7V23Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
  </svg>`,

  Plague: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="13" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="27" cy="28" r="3" fill="currentColor"/><circle cx="38" cy="34" r="3" fill="currentColor"/>
    <path d="M32 7v9M32 48v9M7 32h9M48 32h9M14 14l7 7M43 43l7 7M50 14l-7 7M21 43l-7 7" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  Psychic: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M10 32c6-9 13-14 22-14s16 5 22 14c-6 9-13 14-22 14S16 41 10 32Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="32" cy="32" r="7" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M32 6c7 5 10 9 10 14M32 58c-7-5-10-9-10-14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  Speed: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M37 6 13 36h17l-4 22 25-32H34Z" fill="currentColor"/>
    <path d="M8 20h17M5 29h14M9 44h13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  Spirit: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 7 38 24 55 32 38 40 32 57 26 40 9 32 26 24Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="32" cy="32" r="6" fill="currentColor"/>
  </svg>`,

  Water: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 7C22 21 15 30 15 40a17 17 0 0 0 34 0c0-10-7-19-17-33Z" fill="none" stroke="currentColor" stroke-width="5"/>
    <path d="M22 41c4 5 9 7 15 4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  Love: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 53C18 42 9 34 9 23c0-8 6-13 13-13 5 0 9 3 10 7 2-4 6-7 11-7 7 0 12 5 12 13 0 11-9 19-23 30Z" fill="none" stroke="currentColor" stroke-width="5"/>
    <path d="M22 32h20" stroke="currentColor" stroke-width="3"/>
  </svg>`,

  Hate: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 53C18 42 9 34 9 23c0-8 6-13 13-13 5 0 9 3 10 7 2-4 6-7 11-7 7 0 12 5 12 13 0 11-9 19-23 30Z" fill="none" stroke="currentColor" stroke-width="5"/>
    <path d="m37 17-10 15h8l-7 15 15-20h-8Z" fill="currentColor"/>
  </svg>`,

  Apathy: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M18 32h28" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
  </svg>`,

  Chaos: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="m31 7 7 15 16-5-8 15 10 12-18-1-6 14-7-15-17 5 9-15L7 20l18 1Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
    <path d="m31 20-7 13 9 3-4 10 13-15-9-3 5-8Z" fill="currentColor"/>
  </svg>`,

  Clarity: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M8 32c7-11 15-17 24-17s17 6 24 17c-7 11-15 17-24 17S15 43 8 32Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="32" cy="32" r="3" fill="currentColor"/>
    <path d="M32 6v7M32 51v7" stroke="currentColor" stroke-width="3"/>
  </svg>`,

  Corruption: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="m15 16 15 5 4-13 6 16 14-4-11 12 11 10-15-3-5 17-5-16-16 4 12-12Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="33" cy="32" r="6" fill="currentColor"/>
  </svg>`,

  Courage: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M12 18c7 0 12 4 15 10l5-9 5 9c3-6 8-10 15-10-1 12-7 21-20 28C19 39 13 30 12 18Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
    <path d="M25 46h14l-7 11Z" fill="currentColor"/>
  </svg>`,

  Fear: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 7 57 53H7Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
    <path d="M32 21v17" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
    <circle cx="32" cy="46" r="3.5" fill="currentColor"/>
  </svg>`,

  Ice: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 7v50M10 20l44 24M54 20 10 44M21 13l11 7 11-7M21 51l11-7 11 7M10 29l11 3-11 3M54 29l-11 3 11 3" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  Luck: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M49 15c-15-9-32 1-32 16 0 12 10 20 21 18 10-2 16-11 12-20-3-7-12-10-18-6-6 4-6 13 0 16 5 3 10 0 11-4" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
    <path d="m44 13 8 1-2 8" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  Mirror: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="m32 7 19 25-19 25L13 32Z" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M32 10v44M18 32h28" stroke="currentColor" stroke-width="3"/>
    <path d="m20 24 12 8-12 8M44 24l-12 8 12 8" fill="none" stroke="currentColor" stroke-width="3"/>
  </svg>`,

  Peace: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M32 10v44M32 33 16 48M32 33l16 15" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  Smoke: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M11 42c8-10 14 8 22-2 8-10 13 7 21-3M12 31c7-10 14 8 21-2 8-10 14 7 20-3M17 20c6-7 11 5 17-2 6-7 10 4 14-1" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  Time: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M18 9h28M18 55h28M21 10c0 10 4 16 11 22-7 6-11 12-11 22M43 10c0 10-4 16-11 22 7 6 11 12 11 22"
      fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 16h16c-2 7-5 11-8 14-3-3-6-7-8-14ZM24 48h16c-2-7-5-11-8-14-3 3-6 7-8 14Z"
      fill="currentColor"/>
  </svg>`,

  War: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 5 37 22 51 12 43 27 60 29 44 35 56 48 39 41 38 59 31 43 20 56 24 39 7 46 20 34 4 27 22 27 13 11 27 22Z"
      fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="32" cy="32" r="7" fill="var(--protocol-deep)" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  Assimilation: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M10 21h14l8 11 8-11h14M10 43h14l8-11 8 11h14" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="32" cy="32" r="5" fill="currentColor"/>
  </svg>`,

  Diversity: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="13" r="6" fill="currentColor"/>
    <circle cx="49" cy="23" r="6" fill="currentColor"/>
    <circle cx="49" cy="43" r="6" fill="currentColor"/>
    <circle cx="32" cy="53" r="6" fill="currentColor"/>
    <circle cx="15" cy="43" r="6" fill="currentColor"/>
    <circle cx="15" cy="23" r="6" fill="currentColor"/>
    <circle cx="32" cy="33" r="5" fill="none" stroke="currentColor" stroke-width="3"/>
  </svg>`,

  Unity: `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M13 32c0-8 6-14 14-14 11 0 15 14 23 14 5 0 9-4 9-9s-4-9-9-9c-8 0-12 12-23 12-8 0-14 6-14 14s6 14 14 14c11 0 15-14 23-14 5 0 9 4 9 9s-4 9-9 9" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`
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
  Diversity: ["#ffcc68", "#4f390f"], Unity: ["#d69cff", "#47225b"],
  Ambush: ["#7ff2ff", "#123a44"], Envy: ["#39ead2", "#0d4a46"],
  Fulcrum: ["#d6f3ff", "#263b4b"], Gluttony: ["#ffd449", "#4f3d0e"],
  Greed: ["#ef62d4", "#4e1747"], Lust: ["#ff6448", "#51150f"],
  Momentum: ["#ffb05a", "#5a2f12"], Nova: ["#ff7a35", "#5a1e0c"],
  Overwhelm: ["#e8d7ff", "#292334"], Pride: ["#ffd04c", "#563b09"],
  Sloth: ["#f18b79", "#4b2422"], Wrath: ["#ff634a", "#56150f"],
  Flexible: ["#d38cff", "#3e1f57"],
  Inert: ["#b7c3c7", "#2d3438"],
  Rigid: ["#d6e2ff", "#30364b"]
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

  "Greed": [
    { value: 1, effect: "At end of turn, Compile a line where you have at least 10 value and a higher total than your opponent.", preview: true }
  ],
  "Wrath": [
    { value: 1, effect: "Draw 1. At end of turn, lose control; if you did, delete 1 face-up card.", preview: true }
  ],
  "Sloth": [
    { value: 0, effect: "Gains +5 total value while covered by a Sloth card; when played, draw based on the number of lines where you are behind.", preview: true }
  ],

};

const allProtocols = Object.entries(protocolSets).flatMap(([set, names]) =>
  names.map(name => ({ name, set, id: `${set}|${name}` }))
);


const APP_VERSION = "19.0";

const protocolPlaystyles = {
  Darkness: "Manipulates face-down cards and hidden information. Strong when you can build value while denying the opponent certainty.",
  Death: "Deletes cards aggressively. Best when timing removal to dismantle high-value stacks before they can Compile.",
  Fire: "Fast, volatile hand cycling built around discarding for powerful tactical effects.",
  Gravity: "Pulls cards between lines and rewards controlling where face-down cards accumulate.",
  Life: "Builds board presence with face-down growth, card draw and steady value generation.",
  Light: "Reveals information, flips cards and turns knowledge into card advantage.",
  Metal: "Defensive disruption that limits the opponent's options and makes lines awkward to contest.",
  Plague: "Hand pressure and denial. Forces discards while making particular lines unpleasant to enter.",
  Psychic: "Information warfare: sees hands, rearranges Protocols and restricts how the opponent can play.",
  Speed: "Mobility and tempo. Shifts cards constantly and chains actions to stay ahead of the board.",
  Spirit: "Flexible positioning and unusual play permissions, with strong shifting and refresh interactions.",
  Water: "Flow and repositioning. Moves, returns and flips cards to continually reshape lines.",
  Love: "Card exchange and shared draw effects that turn the opponent's resources into opportunities.",
  Hate: "Direct destruction with rewards for deleting cards and punishing exposed low-value targets.",
  Apathy: "Turns cards face-down and exploits low-information board states for efficient value.",
  Chaos: "Unpredictable board-wide disruption, rearrangement and unusual play patterns.",
  Clarity: "Deck knowledge and precision tutoring. Finds exact values and rewards careful hand management.",
  Corruption: "Twists normal ownership and return rules, infecting the opponent's side with awkward cards.",
  Courage: "Thrives while behind. Converts pressure and empty-hand states into recovery and counterplay.",
  Fear: "Suppresses opponent card abilities, attacks the hand and forcibly moves their board.",
  Ice: "Locks lines down. Punishes entry, resists flipping and creates persistent positional pressure.",
  Luck: "High-variance prediction and top-deck play. Rewards calculated guesses and opportunistic reveals.",
  Mirror: "Copies and reflects the opponent's strengths while swapping whole stacks for dramatic reversals.",
  Peace: "Hand-size manipulation, face-down play and reactive card flow rather than direct aggression.",
  Smoke: "Builds value through face-down networks and rewards lines already filled with hidden cards.",
  Time: "Uses the trash pile as a resource, recycling and replaying cards for long-term sequencing.",
  War: "Punishes common opponent actions such as drawing, refreshing, discarding and compiling.",
  Assimilation: "Steals and exchanges cards between players, blurring ownership and exploiting both decks.",
  Diversity: "Rewards having many different Protocols represented in play and can Compile through variety.",
  Unity: "Scales as more Unity cards appear, eventually creating explosive synergy and alternative Compile pressure.",
  Ambush: "Main 3 Protocol. Full six-card strategy reference will be added as more publisher-verified Command cards are released.",
  Envy: "Main 3 Protocol. Full six-card strategy reference will be added as more publisher-verified Command cards are released.",
  Fulcrum: "Main 3 Protocol. Full six-card strategy reference will be added as more publisher-verified Command cards are released.",
  Gluttony: "Main 3 Protocol. Full six-card strategy reference will be added as more publisher-verified Command cards are released.",
  Greed: "Main 3 Protocol. Previewed cards suggest a strong focus on converting an established lead into immediate payoff.",
  Lust: "Main 3 Protocol. Full six-card strategy reference will be added as more publisher-verified Command cards are released.",
  Momentum: "Main 3 Protocol. Full six-card strategy reference will be added as more publisher-verified Command cards are released.",
  Nova: "Main 3 Protocol. Full six-card strategy reference will be added as more publisher-verified Command cards are released.",
  Overwhelm: "Main 3 Protocol. Full six-card strategy reference will be added as more publisher-verified Command cards are released.",
  Pride: "Main 3 Protocol. Full six-card strategy reference will be added as more publisher-verified Command cards are released.",
  Sloth: "Main 3 Protocol. Previewed cards reward being behind and then building delayed value under covered Sloth cards.",
  Wrath: "Main 3 Protocol. Previewed cards exchange control for explosive removal and tempo.",
  Flexible: "Aux 3 Protocol. Publisher artwork is loaded; full Command-card strategy reference will be added when verified card data is available.",
  Inert: "Aux 3 Protocol. Publisher artwork is loaded; full Command-card strategy reference will be added when verified card data is available.",
  Rigid: "Aux 3 Protocol. Publisher artwork is loaded; full Command-card strategy reference will be added when verified card data is available."
};

let currentMatch = null;
let matchHistory = loadMatchHistory();
let playerNames = loadPlayerNames();
let playerProfiles = loadPlayerProfiles();
let seatAssignments = loadSeatAssignments();
let nameEditingPlayer = 1;
let isAnimating = false;
let draftState = null;
const DRAFT_STAGES = [
  { player: 1, picks: 1, label: "Player 1 chooses 1 Protocol" },
  { player: 2, picks: 2, label: "Player 2 chooses 2 Protocols" },
  { player: 1, picks: 2, label: "Player 1 chooses 2 Protocols" },
  { player: 2, picks: 1, label: "Player 2 receives the last Protocol" }
];

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
    enabledSets: Object.fromEntries(Object.keys(protocolSets).map(set => [set, set !== "Main 3" && set !== "Aux 3"])),
    excluded: [],
    favourites: [],
    avoidRepeats: false,
    balancedRandom: false,
    sound: true,
    haptics: true
  };
}

function loadSettings() {
  const defaults = defaultSettings();
  const saved = localStorage.getItem("compileSettingsV2");
  if (!saved) return defaults;
  try {
    const parsed = JSON.parse(saved);
    return {
      enabledSets: {
        ...defaults.enabledSets,
        ...(parsed.enabledSets || {}),
        "Main 3": Object.prototype.hasOwnProperty.call(parsed.enabledSets || {}, "Main 3")
          ? Boolean(parsed.enabledSets["Main 3"])
          : false,
        "Aux 3": Object.prototype.hasOwnProperty.call(parsed.enabledSets || {}, "Aux 3")
          ? Boolean(parsed.enabledSets["Aux 3"])
          : false
      },
      excluded: Array.isArray(parsed.excluded) ? parsed.excluded : [],
      favourites: Array.isArray(parsed.favourites) ? parsed.favourites : [],
      avoidRepeats: Boolean(parsed.avoidRepeats),
      balancedRandom: Boolean(parsed.balancedRandom),
      sound: parsed.sound !== false,
      haptics: parsed.haptics !== false
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
    return balancedPick(preferred, count);
  }

  const first = balancedPick(preferred, preferred.length);
  const used = new Set(first.map(p => p.id));
  const fallback = balancedPick(pool.filter(p => !used.has(p.id)), count - first.length);
  return [...first, ...fallback].slice(0, count);
}




function makePlayerId() {
  return `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function loadPlayerProfiles() {
  try {
    const saved = JSON.parse(localStorage.getItem("compilePlayerProfilesV10") || "[]");
    if (Array.isArray(saved) && saved.length) return saved;
  } catch (_) {}

  const legacy = loadPlayerNames();
  const initial = [];
  const names = [legacy.p1, legacy.p2].filter(name => name && !/^Player [12]$/i.test(name));

  [...new Set(names)].forEach(name => initial.push({ id: makePlayerId(), name }));
  localStorage.setItem("compilePlayerProfilesV10", JSON.stringify(initial));
  return initial;
}

function savePlayerProfiles() {
  localStorage.setItem("compilePlayerProfilesV10", JSON.stringify(playerProfiles));
}

function loadSeatAssignments() {
  try {
    const saved = JSON.parse(localStorage.getItem("compileSeatAssignmentsV10") || "{}");
    return { p1: saved.p1 || null, p2: saved.p2 || null };
  } catch (_) {
    return { p1: null, p2: null };
  }
}

function saveSeatAssignments() {
  localStorage.setItem("compileSeatAssignmentsV10", JSON.stringify(seatAssignments));
}

function profileById(id) {
  return playerProfiles.find(p => p.id === id) || null;
}

function syncNamesFromSeatAssignments() {
  const p1 = profileById(seatAssignments.p1);
  const p2 = profileById(seatAssignments.p2);
  playerNames.p1 = p1 ? p1.name : (playerNames.p1 || "Player 1");
  playerNames.p2 = p2 ? p2.name : (playerNames.p2 || "Player 2");
  savePlayerNames();
}

function ensureDistinctSeatAssignments(changedSeat) {
  if (seatAssignments.p1 && seatAssignments.p1 === seatAssignments.p2) {
    if (changedSeat === 1) seatAssignments.p2 = null;
    else seatAssignments.p1 = null;
  }
}

function renderPlayersDialog() {
  const p1Select = document.getElementById("player1Select");
  const p2Select = document.getElementById("player2Select");
  const list = document.getElementById("savedPlayersList");
  if (!p1Select || !p2Select || !list) return;

  const options = [
    `<option value="">Guest / unsaved</option>`,
    ...playerProfiles
      .slice()
      .sort((a,b) => a.name.localeCompare(b.name))
      .map(p => `<option value="${p.id}">${p.name}</option>`)
  ].join("");

  p1Select.innerHTML = options;
  p2Select.innerHTML = options;
  p1Select.value = seatAssignments.p1 || "";
  p2Select.value = seatAssignments.p2 || "";

  list.innerHTML = "";
  if (!playerProfiles.length) {
    list.innerHTML = `<div class="empty-state">No saved players yet.</div>`;
    return;
  }

  playerProfiles
    .slice()
    .sort((a,b) => a.name.localeCompare(b.name))
    .forEach(profile => {
      const row = document.createElement("div");
      row.className = "saved-player-row";
      const assigned = seatAssignments.p1 === profile.id || seatAssignments.p2 === profile.id;
      row.innerHTML = `
        <div>
          <strong>${profile.name}</strong>
          <small>${assigned ? "Currently seated" : "Saved player"}</small>
        </div>
        <button class="secondary-button remove-player-button" ${assigned ? "disabled" : ""}>Remove</button>
      `;
      row.querySelector("button").addEventListener("click", () => {
        if (assigned) return;
        playerProfiles = playerProfiles.filter(p => p.id !== profile.id);
        savePlayerProfiles();
        renderPlayersDialog();
        renderPlayerStats();
      });
      list.appendChild(row);
    });
}

function addPlayerProfile() {
  const input = document.getElementById("newPlayerInput");
  const name = input.value.trim();
  if (!name) return;

  const existing = playerProfiles.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    input.value = "";
    return;
  }

  playerProfiles.push({ id: makePlayerId(), name });
  savePlayerProfiles();
  input.value = "";
  renderPlayersDialog();
}

function getPlayerPerformanceStats() {
  const byKey = new Map();

  const ensure = (key, name) => {
    if (!byKey.has(key)) {
      byKey.set(key, { key, name, games: 0, wins: 0, losses: 0, draws: 0 });
    }
    return byKey.get(key);
  };

  playerProfiles.forEach(p => ensure(`id:${p.id}`, p.name));

  matchHistory.forEach(match => {
    const p1Key = match.player1Id ? `id:${match.player1Id}` : `name:${(match.player1Name || "Player 1").toLowerCase()}`;
    const p2Key = match.player2Id ? `id:${match.player2Id}` : `name:${(match.player2Name || "Player 2").toLowerCase()}`;

    const s1 = ensure(p1Key, match.player1Name || profileById(match.player1Id)?.name || "Player 1");
    const s2 = ensure(p2Key, match.player2Name || profileById(match.player2Id)?.name || "Player 2");

    s1.games++; s2.games++;
    if (match.winner === "p1") { s1.wins++; s2.losses++; }
    else if (match.winner === "p2") { s2.wins++; s1.losses++; }
    else { s1.draws++; s2.draws++; }
  });

  return [...byKey.values()]
    .filter(s => s.games > 0 || playerProfiles.some(p => `id:${p.id}` === s.key))
    .sort((a,b) => b.games - a.games || b.wins - a.wins || a.name.localeCompare(b.name));
}

function renderPlayerStats() {
  const target = document.getElementById("historyPlayersView");
  if (!target) return;
  target.innerHTML = "";

  const stats = getPlayerPerformanceStats();
  if (!stats.length) {
    target.innerHTML = `<div class="empty-state">No saved players or completed matches yet.</div>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "stats-list";

  stats.forEach(s => {
    const pct = s.games ? Math.round((s.wins / s.games) * 100) : 0;
    const row = document.createElement("div");
    row.className = "stat-row stat-row-rich";
    row.innerHTML = `
      <div>
        <div class="stat-name">${s.name}</div>
        <div class="stat-detail">${s.games} games · ${s.wins}W / ${s.losses}L / ${s.draws}D</div>
      </div>
      <div class="stat-count">${pct}%</div>
    `;
    list.appendChild(row);
  });

  target.appendChild(list);
}

function loadPlayerNames() {
  try {
    return { p1: "Player 1", p2: "Player 2", ...JSON.parse(localStorage.getItem("compilePlayerNamesV10") || "{}") };
  } catch (_) {
    return { p1: "Player 1", p2: "Player 2" };
  }
}

function savePlayerNames() {
  localStorage.setItem("compilePlayerNamesV10", JSON.stringify(playerNames));
}

function loadMatchHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem("compileMatchHistoryV10") || "[]");
    return Array.isArray(parsed) ? parsed.slice(0, 200) : [];
  } catch (_) {
    return [];
  }
}

function saveMatchHistory() {
  localStorage.setItem("compileMatchHistoryV10", JSON.stringify(matchHistory.slice(0, 200)));
}

function getMatchUsageMap() {
  const counts = new Map(allProtocols.map(p => [p.id, 0]));
  matchHistory.forEach(match => {
    [...match.player1, ...match.player2].forEach(id => counts.set(id, (counts.get(id) || 0) + 1));
  });
  return counts;
}

function balancedPick(pool, count) {
  if (!settings.balancedRandom) return secureShuffle(pool).slice(0, count);
  const usage = getMatchUsageMap();
  return [...pool]
    .map(p => ({ p, score: (usage.get(p.id) || 0) + Math.random() * 1.2 }))
    .sort((a, b) => a.score - b.score)
    .slice(0, count)
    .map(x => x.p);
}

function playTone(freq = 440, duration = 0.05, gain = 0.035) {
  if (!settings.sound) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    amp.gain.value = gain;
    osc.connect(amp);
    amp.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
    osc.onended = () => ctx.close();
  } catch (_) {}
}

function doHaptic(pattern = 35) {
  if (!settings.haptics) return;
  try {
    if (navigator.vibrate) navigator.vibrate(pattern);
  } catch (_) {}
}

function setDealControlsDisabled(disabled) {
  document.querySelectorAll(".deal-control").forEach(el => {
    el.disabled = disabled;
  });
}

function updatePlayerLabels() {
  document.getElementById("player1Label").textContent = playerNames.p1.toUpperCase();
  document.getElementById("player2Label").textContent = playerNames.p2.toUpperCase();
}

function openNameDialog(playerNumber) {
  nameEditingPlayer = playerNumber;
  const current = playerNumber === 1 ? playerNames.p1 : playerNames.p2;
  document.getElementById("nameDialogTitle").textContent = `Player ${playerNumber} name`;
  const input = document.getElementById("playerNameInput");
  input.value = current;
  document.getElementById("nameDialog").showModal();
  setTimeout(() => input.select(), 50);
}

function saveEditedPlayerName() {
  const input = document.getElementById("playerNameInput");
  const value = input.value.trim() || `Player ${nameEditingPlayer}`;

  const seatId = nameEditingPlayer === 1 ? seatAssignments.p1 : seatAssignments.p2;
  const profile = profileById(seatId);

  if (profile) {
    profile.name = value;
    savePlayerProfiles();
  }

  if (nameEditingPlayer === 1) playerNames.p1 = value;
  else playerNames.p2 = value;

  savePlayerNames();
  updatePlayerLabels();
  renderTableMode();
  renderPlayersDialog();
  document.getElementById("nameDialog").close();
}

function getLastCompletedMatch() {
  return matchHistory[0] || null;
}

function startMatch() {
  if (currentMatch) {
    openMatchResult();
    return;
  }
  if (player1.length !== 3 || player2.length !== 3) return;

  currentMatch = {
    startedAt: Date.now(),
    player1: player1.map(p => p.id),
    player2: player2.map(p => p.id),
    player1Name: playerNames.p1,
    player2Name: playerNames.p2,
    player1Id: seatAssignments.p1 || null,
    player2Id: seatAssignments.p2 || null
  };

  setDealControlsDisabled(true);
  document.getElementById("matchButton").innerHTML = `■ <span><strong>FINISH MATCH</strong><small>Record the result</small></span>`;
  document.getElementById("matchButton").classList.add("active-match");
  render();
  playTone(520, .08, .04);
  doHaptic([30, 30, 30]);
}

function openMatchResult() {
  if (!currentMatch) return;
  document.getElementById("player1WinButton").textContent = `${currentMatch.player1Name} wins`;
  document.getElementById("player2WinButton").textContent = `${currentMatch.player2Name} wins`;
  document.getElementById("matchResultDialog").showModal();
}

function finishMatch(winner) {
  if (!currentMatch) return;
  matchHistory.unshift({
    ...currentMatch,
    finishedAt: Date.now(),
    winner
  });
  matchHistory = matchHistory.slice(0, 200);
  saveMatchHistory();
  currentMatch = null;
  setDealControlsDisabled(false);
  document.getElementById("matchButton").innerHTML = `▶ <span><strong>START MATCH</strong><small>Lock in & begin the game</small></span>`;
  document.getElementById("matchButton").classList.remove("active-match");
  document.getElementById("matchResultDialog").close();
  render();
  playTone(winner === "draw" ? 480 : 660, .12, .05);
  doHaptic([35, 35, 70]);
}

function cancelMatch() {
  currentMatch = null;
  setDealControlsDisabled(false);
  document.getElementById("matchButton").innerHTML = `▶ <span><strong>START MATCH</strong><small>Lock in & begin the game</small></span>`;
  document.getElementById("matchButton").classList.remove("active-match");
  document.getElementById("matchResultDialog").close();
  render();
}

function rematch() {
  if (currentMatch || isAnimating) return;
  const last = getLastCompletedMatch();
  if (!last) {
    animatedRandomiseAll();
    return;
  }

  pushUndoSnapshot();
  locked1.clear();
  locked2.clear();

  const oldIds = new Set([...last.player1, ...last.player2]);
  let pool = getAvailableProtocols();
  let fresh = pool.filter(p => !oldIds.has(p.id));

  if (fresh.length < 6) fresh = pool;

  const chosen = balancedPick(fresh, 6);
  player1 = chosen.slice(0, 3);
  player2 = chosen.slice(3, 6);
  lastDeal = [...player1, ...player2].map(p => p.id);
  recordDeal();
  render();
  playTone(610, .09, .045);
  doHaptic(45);
}

function renderMatchHistory() {
  const target = document.getElementById("historyMatchesView");
  target.innerHTML = "";

  if (!matchHistory.length) {
    target.innerHTML = `<div class="empty-state">No completed matches yet. Press Start Match before playing to build win/loss statistics.</div>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "history-list";

  matchHistory.forEach((match, index) => {
    const p1 = match.player1.map(getProtocolById).filter(Boolean);
    const p2 = match.player2.map(getProtocolById).filter(Boolean);
    const winnerText = match.winner === "draw"
      ? "Draw"
      : match.winner === "p1" ? `${match.player1Name} won` : `${match.player2Name} won`;

    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <div class="history-meta">${formatHistoryDate(match.finishedAt || match.startedAt)} · <strong>${winnerText}</strong></div>
      <div class="history-players">
        <div class="history-player"><strong class="player-one">${match.player1Name}</strong>${p1.map(p => `<span>${p.name}</span>`).join("")}</div>
        <div class="history-player"><strong class="player-two">${match.player2Name}</strong>${p2.map(p => `<span>${p.name}</span>`).join("")}</div>
      </div>
    `;
    list.appendChild(item);
  });

  target.appendChild(list);
}

function getProtocolPerformanceStats() {
  const stats = new Map(allProtocols.map(p => [p.id, {
    protocol: p, games: 0, wins: 0, losses: 0, draws: 0
  }]));

  matchHistory.forEach(match => {
    match.player1.forEach(id => {
      const s = stats.get(id); if (!s) return;
      s.games++;
      if (match.winner === "p1") s.wins++;
      else if (match.winner === "p2") s.losses++;
      else s.draws++;
    });
    match.player2.forEach(id => {
      const s = stats.get(id); if (!s) return;
      s.games++;
      if (match.winner === "p2") s.wins++;
      else if (match.winner === "p1") s.losses++;
      else s.draws++;
    });
  });

  return [...stats.values()].sort((a, b) =>
    b.games - a.games ||
    (b.games ? b.wins / b.games : 0) - (a.games ? a.wins / a.games : 0) ||
    a.protocol.name.localeCompare(b.protocol.name)
  );
}

function renderPerformanceStats() {
  const target = document.getElementById("historyStatsView");
  target.innerHTML = "";

  if (!matchHistory.length) {
    target.innerHTML = `<div class="empty-state">No played-match statistics yet.</div>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "stats-list";

  getProtocolPerformanceStats().forEach(s => {
    const pct = s.games ? Math.round((s.wins / s.games) * 100) : 0;
    const row = document.createElement("div");
    row.className = "stat-row stat-row-rich";
    row.innerHTML = `
      <div>
        <div class="stat-name">${s.protocol.name} <small>${s.protocol.set}</small></div>
        <div class="stat-detail">${s.games} games · ${s.wins}W / ${s.losses}L / ${s.draws}D</div>
      </div>
      <div class="stat-count">${pct}%</div>
    `;
    list.appendChild(row);
  });

  target.appendChild(list);
}


function startDraft() {
  if (currentMatch || isAnimating) return;

  const pool = getAvailableProtocols();
  if (pool.length < 6) {
    alert("Enable at least 6 Protocols before starting a draft.");
    return;
  }

  pushUndoSnapshot();

  const chosen = secureShuffle(pool).slice(0, 6);
  draftState = {
    pool: chosen.map(p => p.id),
    remaining: chosen.map(p => p.id),
    p1: [],
    p2: [],
    stageIndex: 0,
    stageSelected: []
  };

  renderDraft();
  document.getElementById("draftDialog").showModal();
  playTone(430, .06, .03);
  doHaptic(25);
}

function restartDraft() {
  const pool = getAvailableProtocols();
  if (pool.length < 6) return;

  const chosen = secureShuffle(pool).slice(0, 6);
  draftState = {
    pool: chosen.map(p => p.id),
    remaining: chosen.map(p => p.id),
    p1: [],
    p2: [],
    stageIndex: 0,
    stageSelected: []
  };
  renderDraft();
}

function cancelDraft() {
  draftState = null;
  const dialog = document.getElementById("draftDialog");
  if (dialog && dialog.open) dialog.close();
}

function currentDraftStage() {
  if (!draftState) return null;
  return DRAFT_STAGES[draftState.stageIndex] || null;
}

function draftSelectProtocol(id) {
  if (!draftState || !draftState.remaining.includes(id)) return;

  const stage = currentDraftStage();
  if (!stage) return;

  // Final stage is automatic: Player 2 receives the last Protocol.
  if (draftState.stageIndex === 3) return;

  const selected = draftState.stageSelected;
  const existingIndex = selected.indexOf(id);

  if (existingIndex >= 0) {
    selected.splice(existingIndex, 1);
  } else {
    if (selected.length >= stage.picks) return;
    selected.push(id);
  }

  renderDraft();

  if (selected.length === stage.picks) {
    // Small delay so the chosen cards visibly light up before committing.
    setTimeout(commitDraftStage, 180);
  }
}

function commitDraftStage() {
  if (!draftState) return;
  const stage = currentDraftStage();
  if (!stage) return;

  const chosen = [...draftState.stageSelected];
  const target = stage.player === 1 ? draftState.p1 : draftState.p2;

  chosen.forEach(id => {
    if (draftState.remaining.includes(id)) {
      target.push(id);
      draftState.remaining = draftState.remaining.filter(x => x !== id);
    }
  });

  draftState.stageSelected = [];
  draftState.stageIndex++;

  // Official final pick: Player 2 gets the last remaining Protocol automatically.
  if (draftState.stageIndex === 3) {
    if (draftState.remaining.length === 1) {
      draftState.p2.push(draftState.remaining[0]);
      draftState.remaining = [];
      draftState.stageIndex = 4;
      renderDraft();
      setTimeout(finaliseDraft, 450);
      return;
    }
  }

  renderDraft();
  playTone(520 + draftState.stageIndex * 55, .05, .03);
  doHaptic(20);
}

function finaliseDraft() {
  if (!draftState) return;
  if (draftState.p1.length !== 3 || draftState.p2.length !== 3) return;

  player1 = draftState.p1.map(getProtocolById).filter(Boolean);
  player2 = draftState.p2.map(getProtocolById).filter(Boolean);

  locked1.clear();
  locked2.clear();

  lastDeal = [...player1, ...player2].map(p => p.id);
  recordDeal();
  render();

  const dialog = document.getElementById("draftDialog");
  if (dialog && dialog.open) dialog.close();

  draftState = null;
  playTone(720, .10, .05);
  doHaptic([25, 25, 55]);
}

function renderDraftPickChips(targetId, ids) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = ids.map(id => {
    const p = getProtocolById(id);
    return p ? `<span>${p.name}</span>` : "";
  }).join("");
}

function renderDraft() {
  if (!draftState) return;

  const stage = currentDraftStage();
  const title = document.getElementById("draftTitle");
  const instruction = document.getElementById("draftInstruction");

  document.getElementById("draftP1Name").textContent = playerNames.p1;
  document.getElementById("draftP2Name").textContent = playerNames.p2;

  if (draftState.stageIndex >= 4) {
    title.textContent = "Draft Complete";
    instruction.textContent = "Applying the drafted Protocols…";
  } else {
    title.textContent = stage.player === 1
      ? `${playerNames.p1}: choose ${stage.picks}`
      : `${playerNames.p2}: choose ${stage.picks}`;
    instruction.textContent = stage.label
      .replace("Player 1", playerNames.p1)
      .replace("Player 2", playerNames.p2);
  }

  // Highlight current/completed sequence steps.
  for (let i = 0; i < 4; i++) {
    const el = document.getElementById(`draftStep${i+1}`);
    if (!el) continue;
    el.classList.toggle("active", i === draftState.stageIndex);
    el.classList.toggle("done", i < draftState.stageIndex);
  }

  renderDraftPickChips("draftP1Picks", draftState.p1);
  renderDraftPickChips("draftP2Picks", draftState.p2);

  const pool = document.getElementById("draftPool");
  pool.innerHTML = "";

  draftState.pool.forEach(id => {
    const protocol = getProtocolById(id);
    if (!protocol) return;

    const isRemaining = draftState.remaining.includes(id);
    const isSelected = draftState.stageSelected.includes(id);
    const owner = draftState.p1.includes(id) ? "p1" : draftState.p2.includes(id) ? "p2" : null;
    const visual = protocolVisuals[protocol.name] || ["#4ee9ff", "#123a45"];

    const card = document.createElement("button");
    card.className = `draft-protocol-card${isSelected ? " selected" : ""}${owner ? ` owned ${owner}` : ""}`;
    card.style.setProperty("--protocol-accent", visual[0]);
    card.style.setProperty("--protocol-deep", visual[1]);
    card.disabled = !isRemaining || draftState.stageIndex >= 3;

    card.innerHTML = `
      <div class="draft-card-owner">${owner === "p1" ? playerNames.p1 : owner === "p2" ? playerNames.p2 : ""}</div>
      <div class="draft-card-sigil">
        <div class="draft-sigil-ring"></div>
        <div class="draft-symbol">${protocolSymbolMarkup(protocol.name)}</div>
      </div>
      <strong>${protocol.name}</strong>
      <small>${protocol.set}</small>
      ${isSelected ? `<div class="draft-picked-mark">SELECTED</div>` : ""}
    `;

    if (isRemaining && draftState.stageIndex < 3) {
      card.addEventListener("click", () => draftSelectProtocol(id));
    }

    pool.appendChild(card);
  });
}

function animatedRandomiseAll() {
  if (isAnimating || currentMatch || getAvailableProtocols().length < 6) return;
  isAnimating = true;
  setDealControlsDisabled(true);
  const pool = getAvailableProtocols();

  let ticks = 0;
  const totalTicks = 10;
  const timer = setInterval(() => {
    const temp = secureShuffle(pool).slice(0, 6);
    player1 = temp.slice(0, 3);
    player2 = temp.slice(3, 6);
    render();
    playTone(250 + ticks * 34, .025, .018);
    ticks++;

    if (ticks >= totalTicks) {
      clearInterval(timer);
      setTimeout(() => {
        randomiseAll();
        isAnimating = false;
        setDealControlsDisabled(false);
        render();
        playTone(720, .09, .05);
        doHaptic([25, 25, 55]);
      }, 90);
    }
  }, 72);
}

function favouriteSet() {
  return new Set(settings.favourites || []);
}

function toggleFavourite(id) {
  const fav = favouriteSet();
  if (fav.has(id)) fav.delete(id); else fav.add(id);
  settings.favourites = [...fav];
  saveSettings();
  renderLibrary(document.getElementById("librarySearch").value);
}

function renderLibrary(filter = "") {
  const target = document.getElementById("libraryGrid");
  const term = filter.trim().toLowerCase();
  const fav = favouriteSet();
  const excluded = new Set(settings.excluded || []);

  const sorted = [...allProtocols]
    .filter(p => !term || p.name.toLowerCase().includes(term) || p.set.toLowerCase().includes(term))
    .sort((a, b) => Number(fav.has(b.id)) - Number(fav.has(a.id)) || a.name.localeCompare(b.name));

  target.innerHTML = "";
  sorted.forEach(protocol => {
    const visual = protocolVisuals[protocol.name] || ["#4ee9ff", "#123a45"];
    const card = document.createElement("div");
    card.className = `library-card${excluded.has(protocol.id) ? " excluded" : ""}`;
    card.style.setProperty("--protocol-accent", visual[0]);
    card.style.setProperty("--protocol-deep", visual[1]);
    card.innerHTML = `
      <button class="library-main">
        <span class="library-symbol">${protocolSymbolMarkup(protocol.name)}</span>
        <span><strong>${protocol.name}</strong><small>${protocol.set}</small></span>
      </button>
      <div class="library-card-actions">
        <button class="fav-button ${fav.has(protocol.id) ? "active" : ""}" title="Favourite">${fav.has(protocol.id) ? "★" : "☆"}</button>
        <button class="exclude-button ${excluded.has(protocol.id) ? "active" : ""}" title="Exclude">${excluded.has(protocol.id) ? "⊘" : "○"}</button>
      </div>
    `;
    card.querySelector(".library-main").addEventListener("click", () => showProtocolReference(protocol));
    card.querySelector(".fav-button").addEventListener("click", () => toggleFavourite(protocol.id));
    card.querySelector(".exclude-button").addEventListener("click", () => {
      setProtocolExcluded(protocol.id, !excluded.has(protocol.id));
      renderLibrary(document.getElementById("librarySearch").value);
    });
    target.appendChild(card);
  });
}

function renderTableMode() {
  const p1 = document.getElementById("tableP1Protocols");
  const p2 = document.getElementById("tableP2Protocols");
  if (!p1 || !p2) return;

  document.getElementById("tableP1Name").textContent = playerNames.p1;
  document.getElementById("tableP2Name").textContent = playerNames.p2;

  const makeTableCard = (protocol, playerClass) => {
    const visual = protocolVisuals[protocol.name] || ["#4ee9ff", "#123a45"];
    return `
      <div class="table-protocol-card ${playerClass}"
           style="--protocol-accent:${visual[0]};--protocol-deep:${visual[1]}">
        <div class="table-card-energy"></div>
        <div class="table-card-sigil">
          <div class="table-sigil-spokes"></div>
          <div class="table-sigil-ring"></div>
          <div class="table-card-symbol">${protocolSymbolMarkup(protocol.name)}</div>
        </div>
        <div class="table-card-name">${protocol.name}</div>
        <div class="table-card-set">${protocol.set}</div>
      </div>
    `;
  };

  p1.innerHTML = player1.map(p => makeTableCard(p, "table-p1-card")).join("");
  p2.innerHTML = player2.map(p => makeTableCard(p, "table-p2-card")).join("");

  const art = sessionStorage.getItem("compileBackgroundArtwork")
    || publisherBackgrounds[Math.floor(Math.random() * publisherBackgrounds.length)];

  const artLayer = document.getElementById("tableArtBackground");
  if (artLayer) artLayer.style.backgroundImage = `url("${resolvePublisherBackground(art)}")`;

  const status = document.getElementById("tableMatchStatus");
  if (status) {
    status.textContent = currentMatch ? "MATCH ACTIVE" : "READY";
    status.classList.toggle("active", Boolean(currentMatch));
  }
}

function buildShareCanvas() {
  const canvas = document.getElementById("shareCanvas");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#071827");
  grad.addColorStop(1, "#04070d");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.textAlign = "center";
  ctx.fillStyle = "#eafcff";
  ctx.font = "900 78px Arial";
  ctx.fillText("COMPILE", W/2, 105);
  ctx.fillStyle = "#8ba7ba";
  ctx.font = "32px Arial";
  ctx.fillText("PROTOCOL MATCHUP", W/2, 150);

  const drawSide = (x, y, name, protocols, accent) => {
    ctx.fillStyle = accent;
    ctx.font = "700 38px Arial";
    ctx.fillText(name, x, y);
    protocols.forEach((p, i) => {
      const yy = y + 75 + i * 135;
      ctx.fillStyle = "#0d1a27";
      ctx.strokeStyle = accent;
      ctx.lineWidth = 3;
      roundRect(ctx, x - 225, yy - 52, 450, 100, 24);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#f5fbff";
      ctx.font = "700 36px Arial";
      ctx.fillText(p.name, x, yy + 8);
      ctx.fillStyle = "#8497a5";
      ctx.font = "22px Arial";
      ctx.fillText(p.set, x, yy + 38);
    });
  };

  drawSide(320, 270, playerNames.p1, player1, "#4ee9ff");
  drawSide(880, 270, playerNames.p2, player2, "#ffad4d");

  ctx.fillStyle = "#667988";
  ctx.font = "24px Arial";
  ctx.fillText(`Compile Companion · v${APP_VERSION}`, W/2, 1140);

  return canvas;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.arcTo(x+w, y, x+w, y+h, r);
  ctx.arcTo(x+w, y+h, x, y+h, r);
  ctx.arcTo(x, y+h, x, y, r);
  ctx.arcTo(x, y, x+w, y, r);
  ctx.closePath();
}

async function shareCurrentResult() {
  if (player1.length !== 3 || player2.length !== 3) return;

  const text = `${playerNames.p1}: ${player1.map(p => p.name).join(" / ")}\n${playerNames.p2}: ${player2.map(p => p.name).join(" / ")}`;
  const canvas = buildShareCanvas();

  try {
    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
    const file = new File([blob], "compile-matchup.webp", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      await navigator.share({ title: "Compile matchup", text, files: [file] });
      return;
    }
    if (navigator.share) {
      await navigator.share({ title: "Compile matchup", text });
      return;
    }
    await navigator.clipboard.writeText(text);
    alert("Matchup copied to clipboard.");
  } catch (err) {
    if (err && err.name === "AbortError") return;
    try {
      await navigator.clipboard.writeText(text);
      alert("Matchup copied to clipboard.");
    } catch (_) {}
  }
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
    <div class="protocol-sigil" aria-hidden="true">
      <div class="sigil-spokes"></div>
      <div class="sigil-ring"></div>
      <div class="protocol-symbol">${protocolSymbolMarkup(protocol.name) || `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" stroke-width="4"/></svg>`}</div>
    </div>
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
  const previewCards = protocolCardReference[protocol.name];
  subtitle.textContent = protocol.set === "Main 3"
    ? `${protocol.set} · ${previewCards ? `${previewCards.length} verified preview card${previewCards.length === 1 ? "" : "s"}` : "Command cards not yet loaded"}`
    : protocol.set === "Aux 3"
      ? `${protocol.set} · Command cards not yet loaded`
      : `${protocol.set} · 6-card Protocol`;
  const visual = protocolVisuals[protocol.name] || ["#4ee9ff", "#123a45"];
  dialog.style.setProperty("--protocol-accent", visual[0]);
  dialog.style.setProperty("--protocol-deep", visual[1]);
  const hero = document.getElementById("protocolHero");
  if (protocolArtImages[protocol.name]) {
    hero.innerHTML = `
      <div class="protocol-publisher-art" style="background-image:url('${protocolArtImages[protocol.name]}')">
        <div class="protocol-publisher-art-icon">${protocolSymbolMarkup(protocol.name)}</div>
      </div>`;
  } else {
    hero.innerHTML = `<div class="protocol-hero-symbol">${protocolSymbolMarkup(protocol.name)}</div>`;
  }

  document.getElementById("protocolPlaystyle").innerHTML = `<strong>How it plays</strong><p>${protocolPlaystyles[protocol.name] || ""}</p>`;
  view.innerHTML = "";

  const cards = protocolCardReference[protocol.name];

  if (!cards) {
    view.innerHTML = `
      <div class="unavailable-reference">
        ${(protocol.set === "Main 3" || protocol.set === "Aux 3")
          ? `The Protocol and publisher artwork are loaded, but no Command cards for ${protocol.name} have been independently verified yet.`
          : `A verified card reference has not yet been loaded for ${protocol.name}.`}
      </div>
    `;
    dialog.showModal();
    return;
  }

  const list = document.createElement("div");
  list.className = "card-reference-list card-carousel";

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
  note.textContent = protocol.set === "Main 3"
    ? "Main 3 is preview material. Only publisher/designer-shared Command cards are shown; unrevealed cards are intentionally omitted. Effects are concise summaries."
    : protocol.set === "Aux 3"
      ? "Aux 3 artwork is publisher-shared. Command-card references will be added only when verified."
      : "Effects are concise reference summaries based on verified card data and published errata. Use the physical card or official Codex for precise rules text.";
  view.appendChild(note);

  dialog.showModal();
}


const publisherBackgrounds = [
  "ambush.webp", "apathy.webp", "assimilation.webp", "diversity.webp", "envy.webp",
  "fire.webp", "fulcrum.webp", "gluttony.webp", "greed.webp", "kvDDXIIw.webp",
  "lust.webp", "momentum.webp", "nova.webp", "overwhelm.webp", "sloth.webp",
  "speed.webp", "unity.webp", "wrath.webp",
  "../protocol-art/apathy.webp",
  "../protocol-art/chaos.webp",
  "../protocol-art/darkness.webp",
  "../protocol-art/death.webp",
  "../protocol-art/fire.webp",
  "../protocol-art/gravity.webp",
  "../protocol-art/hate.webp",
  "../protocol-art/life.webp",
  "../protocol-art/light.webp",
  "../protocol-art/love.webp",
  "../protocol-art/metal.webp",
  "../protocol-art/plague.webp",
  "../protocol-art/psychic.webp",
  "../protocol-art/spirit.webp",
  "../protocol-art/water.webp",
  "../protocol-art/flexible.webp",
  "../protocol-art/ice.webp",
  "../protocol-art/inert.webp",
  "../protocol-art/luck.webp",
  "../protocol-art/mirror.webp",
  "../protocol-art/peace.webp",
  "../protocol-art/rigid.webp",
  "../protocol-art/smoke.webp",
  "../protocol-art/time.webp",
  "../protocol-art/war.webp",
  "../protocol-art/clarity.webp",
  "../protocol-art/courage.webp",
  "../protocol-art/fear.webp"
];

function applyRandomProtocolBackground() {
  const protocol = allProtocols[Math.floor(Math.random() * allProtocols.length)];
  const visual = protocolVisuals[protocol.name] || ["#4ee9ff", "#123a45"];
  const symbol = protocolSymbolMarkup(protocol.name);
  const art = publisherBackgrounds[Math.floor(Math.random() * publisherBackgrounds.length)];

  document.documentElement.style.setProperty("--bg-accent", visual[0]);
  document.documentElement.style.setProperty("--bg-deep", visual[1]);

  const artLayer = document.getElementById("publisherArtBackground");
  if (artLayer) {
    artLayer.style.backgroundImage = `url("${resolvePublisherBackground(art)}")`;
  }

  const bgMark = document.getElementById("backgroundProtocolMark");
  if (bgMark) bgMark.innerHTML = symbol;

  sessionStorage.setItem("compileBackgroundProtocol", protocol.name);
  sessionStorage.setItem("compileBackgroundArtwork", art);
}


function renderRecentHomeMatches() {
  const target = document.getElementById("recentMatchesHome");
  if (!target) return;
  target.innerHTML = "";

  const recent = matchHistory.slice(0, 5);
  if (!recent.length) {
    target.innerHTML = `<div class="home-match-empty">Completed matches will appear here.</div>`;
    return;
  }

  recent.forEach(match => {
    const p1 = (match.player1Name || "Player 1");
    const p2 = (match.player2Name || "Player 2");
    const p1Initial = p1.trim().charAt(0).toUpperCase() || "1";
    const p2Initial = p2.trim().charAt(0).toUpperCase() || "2";
    let score = "—";
    let resultClass = "draw";
    if (match.winner === "p1") { score = "1 - 0"; resultClass = ""; }
    else if (match.winner === "p2") { score = "0 - 1"; resultClass = "loss"; }
    else if (match.winner === "draw") { score = "½ - ½"; resultClass = "draw"; }

    const item = document.createElement("div");
    item.className = "home-match-card";
    item.innerHTML = `
      <div class="home-match-versus"><span class="home-match-avatar">${p1Initial}</span><small>vs</small><span class="home-match-avatar alt">${p2Initial}</span></div>
      <div class="home-match-names">${p1} · ${p2}</div>
      <div class="home-match-result ${resultClass}">${score}</div>
      <div class="home-match-date">${formatHistoryDate(match.finishedAt || match.startedAt)}</div>
    `;
    target.appendChild(item);
  });
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

  if (currentMatch) {
    const chip = document.createElement("span");
    chip.className = "status-chip match-chip";
    chip.textContent = "● MATCH ACTIVE";
    chips.appendChild(chip);
  }

  updatePlayerLabels();
  renderTableMode();
  renderRecentHomeMatches();
  const balancedButton = document.getElementById("mainBalancedButton");
  if (balancedButton) balancedButton.classList.toggle("active", Boolean(settings.balancedRandom));
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
  document.getElementById("balancedRandomToggle").checked = settings.balancedRandom;
  document.getElementById("soundToggle").checked = settings.sound;
  document.getElementById("hapticsToggle").checked = settings.haptics;
  document.getElementById("versionLabel").textContent = `Version ${APP_VERSION}`;

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

document.getElementById("randomiseButton").addEventListener("click", animatedRandomiseAll);
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
  renderPerformanceStats();
  document.getElementById("historyDealsView").hidden = false;
  document.getElementById("historyStatsView").hidden = true;
  document.getElementById("historyTabDeals").classList.add("active");
  document.getElementById("historyTabMatches").classList.remove("active");
  document.getElementById("historyTabStats").classList.remove("active");
  document.getElementById("historyTabPlayers").classList.remove("active");
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
  document.getElementById("historyPlayersView").hidden = true;
  document.getElementById("historyTabDeals").classList.remove("active");
  document.getElementById("historyTabMatches").classList.remove("active");
  document.getElementById("historyTabStats").classList.add("active");
  document.getElementById("historyTabPlayers").classList.remove("active");
});

document.getElementById("clearHistoryButton").addEventListener("click", () => {
  history = [];
  saveHistory();
  renderHistoryDeals();
  renderHistoryStats();
});


document.querySelectorAll("[data-player-name]").forEach(button => {
  button.addEventListener("click", () => openNameDialog(Number(button.dataset.playerName)));
});

document.getElementById("closeNameButton").addEventListener("click", () => document.getElementById("nameDialog").close());
document.getElementById("savePlayerNameButton").addEventListener("click", saveEditedPlayerName);
document.getElementById("playerNameInput").addEventListener("keydown", event => {
  if (event.key === "Enter") saveEditedPlayerName();
});

document.getElementById("matchButton").addEventListener("click", startMatch);
document.getElementById("closeResultButton").addEventListener("click", () => document.getElementById("matchResultDialog").close());
document.getElementById("player1WinButton").addEventListener("click", () => finishMatch("p1"));
document.getElementById("player2WinButton").addEventListener("click", () => finishMatch("p2"));
document.getElementById("drawButton").addEventListener("click", () => finishMatch("draw"));
document.getElementById("cancelMatchButton").addEventListener("click", cancelMatch);

document.getElementById("rematchButton").addEventListener("click", rematch);
document.getElementById("draftButton").addEventListener("click", startDraft);
document.getElementById("closeDraftButton").addEventListener("click", cancelDraft);
document.getElementById("cancelDraftButton").addEventListener("click", cancelDraft);
document.getElementById("restartDraftButton").addEventListener("click", restartDraft);
document.getElementById("shareButton").addEventListener("click", shareCurrentResult);


const playersDialog = document.getElementById("playersDialog");

document.getElementById("playersButton").addEventListener("click", () => {
  renderPlayersDialog();
  playersDialog.showModal();
});

document.getElementById("closePlayersButton").addEventListener("click", () => playersDialog.close());

document.getElementById("addPlayerButton").addEventListener("click", addPlayerProfile);
document.getElementById("newPlayerInput").addEventListener("keydown", event => {
  if (event.key === "Enter") addPlayerProfile();
});

document.getElementById("player1Select").addEventListener("change", event => {
  seatAssignments.p1 = event.target.value || null;
  ensureDistinctSeatAssignments(1);
  saveSeatAssignments();
  syncNamesFromSeatAssignments();
  updatePlayerLabels();
  renderPlayersDialog();
  renderTableMode();
});

document.getElementById("player2Select").addEventListener("change", event => {
  seatAssignments.p2 = event.target.value || null;
  ensureDistinctSeatAssignments(2);
  saveSeatAssignments();
  syncNamesFromSeatAssignments();
  updatePlayerLabels();
  renderPlayersDialog();
  renderTableMode();
});

const libraryDialog = document.getElementById("libraryDialog");
document.getElementById("libraryButton").addEventListener("click", () => {
  document.getElementById("librarySearch").value = "";
  renderLibrary("");
  libraryDialog.showModal();
});
document.getElementById("closeLibraryButton").addEventListener("click", () => libraryDialog.close());
document.getElementById("librarySearch").addEventListener("input", event => renderLibrary(event.target.value));

const tableDialog = document.getElementById("tableDialog");
document.getElementById("tableButton").addEventListener("click", () => {
  renderTableMode();
  tableDialog.showModal();
});
document.getElementById("closeTableButton").addEventListener("click", () => tableDialog.close());

document.getElementById("balancedRandomToggle").addEventListener("change", event => {
  settings.balancedRandom = event.target.checked;
  saveSettings();
  render();
});
document.getElementById("soundToggle").addEventListener("change", event => {
  settings.sound = event.target.checked;
  saveSettings();
});
document.getElementById("hapticsToggle").addEventListener("change", event => {
  settings.haptics = event.target.checked;
  saveSettings();
});

document.getElementById("historyTabMatches").addEventListener("click", () => {
  document.getElementById("historyDealsView").hidden = true;
  document.getElementById("historyMatchesView").hidden = false;
  document.getElementById("historyStatsView").hidden = true;
  document.getElementById("historyPlayersView").hidden = true;
  document.getElementById("historyTabDeals").classList.remove("active");
  document.getElementById("historyTabMatches").classList.add("active");
  document.getElementById("historyTabStats").classList.remove("active");
  document.getElementById("historyTabPlayers").classList.remove("active");
  renderMatchHistory();
});

document.getElementById("historyTabDeals").addEventListener("click", () => {
  document.getElementById("historyMatchesView").hidden = true;
});

document.getElementById("historyTabStats").addEventListener("click", () => {
  document.getElementById("historyMatchesView").hidden = true;
  renderPerformanceStats();
});


document.getElementById("historyTabPlayers").addEventListener("click", () => {
  document.getElementById("historyDealsView").hidden = true;
  document.getElementById("historyMatchesView").hidden = true;
  document.getElementById("historyStatsView").hidden = true;
  document.getElementById("historyPlayersView").hidden = false;
  document.getElementById("historyTabDeals").classList.remove("active");
  document.getElementById("historyTabMatches").classList.remove("active");
  document.getElementById("historyTabStats").classList.remove("active");
  document.getElementById("historyTabPlayers").classList.add("active");
  renderPlayerStats();
});

document.getElementById("clearMatchHistoryButton").addEventListener("click", () => {
  if (!confirm("Clear all completed-match statistics?")) return;
  matchHistory = [];
  saveMatchHistory();
  renderMatchHistory();
  renderPerformanceStats();
});


updatePlayerLabels();


// V11 mockup-inspired home controls
const menuSettingsButton = document.getElementById("menuSettingsButton");
if (menuSettingsButton) menuSettingsButton.addEventListener("click", () => document.getElementById("settingsButton").click());

const heroTableButton = document.getElementById("heroTableButton");
if (heroTableButton) heroTableButton.addEventListener("click", () => document.getElementById("tableButton").click());

const mainBalancedButton = document.getElementById("mainBalancedButton");
if (mainBalancedButton) mainBalancedButton.addEventListener("click", () => {
  settings.balancedRandom = !settings.balancedRandom;
  saveSettings();
  render();
});

const homeStatsButton = document.getElementById("homeStatsButton");
if (homeStatsButton) homeStatsButton.addEventListener("click", () => {
  document.getElementById("historyButton").click();
  setTimeout(() => document.getElementById("historyTabStats").click(), 0);
});

const recentViewAllButton = document.getElementById("recentViewAllButton");
if (recentViewAllButton) recentViewAllButton.addEventListener("click", () => {
  document.getElementById("historyButton").click();
  setTimeout(() => document.getElementById("historyTabMatches").click(), 0);
});

const navHome = document.getElementById("navHome");
if (navHome) navHome.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
const navLibrary = document.getElementById("navLibrary");
if (navLibrary) navLibrary.addEventListener("click", () => document.getElementById("libraryButton").click());
const navRandom = document.getElementById("navRandom");
if (navRandom) navRandom.addEventListener("click", animatedRandomiseAll);
const navMatches = document.getElementById("navMatches");
if (navMatches) navMatches.addEventListener("click", () => {
  document.getElementById("historyButton").click();
  setTimeout(() => document.getElementById("historyTabMatches").click(), 0);
});
const navStats = document.getElementById("navStats");
if (navStats) navStats.addEventListener("click", () => {
  document.getElementById("historyButton").click();
  setTimeout(() => document.getElementById("historyTabStats").click(), 0);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

// Pick a fresh Protocol-themed background every time the app/page starts.
applyRandomProtocolBackground();
randomiseAll();
