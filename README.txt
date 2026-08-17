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
