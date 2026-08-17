COMPILE COMPANION — VERSION 11.0

V11 VISUAL REDESIGN
-------------------
- Home screen rebuilt to closely follow the neon sci-fi mockup direction.
- Publisher-shared artwork supplied by the user is packaged in the app and randomly selected as the hero background on each fresh load.
- Player panels now show three compact vertical Protocol cards.
- Large Randomise, Balanced, Start Match, Share and History controls.
- Utility tiles for Protocol Library, Players, Stats and Settings.
- Last five completed matches appear directly on the home screen.
- Fixed bottom navigation for Home, Library, Randomise, Matches and Stats.
- Table Mode remains available from the hero header.
- All existing v10.4 functionality is retained.

GITHUB UPDATE
-------------
Upload every file and the entire backgrounds folder. Do not flatten the backgrounds folder; app.js expects files at backgrounds/<filename>.png.
Service-worker cache: compile-companion-v11.


VERSION 12.0
------------
- Uses the publisher-shared COMPILE title/logo artwork supplied by the user.
- Reworked every dealt Protocol into a more stylised neon sigil presentation:
  glowing white symbol, concentric energy ring, radial spikes and cracked-card texture.
- Existing Protocol-specific SVG symbols remain crisp on Retina displays.
- Time now uses a clearer hourglass treatment and War uses a sharper burst sigil.
- Balanced button now explains itself directly: "Prioritise less-played".
- Bottom randomise button uses a mark derived from the supplied COMPILE logo artwork.
- Completely removed the "A newer app version is available" banner, reload button,
  automatic version checking and manual update-check button.
- App remains network-first for core GitHub Pages files with offline cache fallback.
- Cache bumped to compile-companion-v12.


VERSION 13.0 — TABLE MODE VISUAL UPGRADE
----------------------------------------
- Completely redesigned Table Mode for much higher visual fidelity.
- Uses the same publisher-approved artwork as the home screen.
- Player 1 remains rotated 180 degrees so opposite players can read from either side.
- Large full Protocol cards now use the v12 neon sigil treatment, energy rings,
  accent colours, cracked-light effects and set labels.
- Proper Player 1 / Player 2 identity headers and names.
- New central COMPILE console with supplied logo mark, table-mode label,
  exit control and MATCH ACTIVE / READY state.
- Landscape mode now behaves like a true shared tabletop with players on opposite sides
  and a vertical central console.
- Portrait mode remains fully usable as a fallback.
- Cache bumped to compile-companion-v13.


VERSION 14.0 — MAIN 3 PREVIEW
-----------------------------
- Added Main 3 as a selectable Protocol set.
- Main 3 is OFF by default for both new and existing users.
- Added all 12 publisher-confirmed Main 3 Protocols:
  Ambush, Envy, Fulcrum, Gluttony, Greed, Lust, Momentum, Nova,
  Overwhelm, Pride, Sloth and Wrath.
- Uses publisher-shared Main 3 Protocol artwork supplied by the user.
- Uses cropped publisher badge/icon artwork for the Main 3 Protocol icons
  rather than invented approximations.
- Main 3 Library detail pages display the publisher artwork.
- Added verified designer-preview card references currently available:
  Greed 1, Wrath 1 and Sloth 0.
- Main 3 Library entries explicitly identify partial preview data and do not
  invent unrevealed Command cards.
- Cache bumped to compile-companion-v14.
