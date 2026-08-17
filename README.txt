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


VERSION 15.0 — OFFICIAL DRAFT MODE
----------------------------------
- Added DRAFT as a third selection method alongside Randomise and Balanced.
- Draft begins by selecting six unique Protocols from the currently enabled pool.
- Official pick order implemented:
    1. Player 1 chooses 1
    2. Player 2 chooses 2
    3. Player 1 chooses 2
    4. Player 2 automatically receives the final Protocol
- The draft screen shows all six Protocol cards simultaneously.
- Selected/claimed cards are visually marked and removed from later picks.
- Player names from saved player profiles are used throughout the draft.
- Draft respects enabled sets, Main 3 on/off status and individual exclusions.
- Completing a draft applies the final three Protocols to each player and records
  the result in deal history.
- Added "New 6" to restart a draft with a fresh set of six Protocols.
- Cache bumped to compile-companion-v15.


VERSION 16.0 — MAIN 1 / AUX 1 ART
---------------------------------
- Added the publisher artwork supplied by the user for:
  Apathy, Chaos, Darkness, Death, Fire, Gravity, Hate, Life, Light,
  Love, Metal, Plague, Psychic, Spirit and Water.
- These images now appear as the large hero artwork on their Protocol
  pages in the Library, matching the Main 3 presentation.
- All 15 supplied images were added to the random app-background pool.
- Artwork is packaged locally and precached for offline/PWA use.
- Existing Main 3 artwork and Draft mode are retained.
- Cache bumped to compile-companion-v16.


VERSION 17.0 — MAIN 2 / AUX 2 ART + AUX 3
-----------------------------------------
- Added supplied publisher artwork for:
  Flexible, Ice, Inert, Luck, Mirror, Peace, Rigid, Smoke,
  Time, War, Clarity, Courage and Fear.
- All supplied artwork is available in the Protocol Library.
- All supplied artwork is included in the random background rotation.
- Added AUX 3 as a selectable set containing:
  Flexible, Inert and Rigid.
- AUX 3 is OFF by default for both new and existing users.
- Draft mode and all randomisation modes respect the AUX 3 enable/disable setting.
- Aux 3 Protocol Library pages display publisher artwork and intentionally
  omit Command-card text until verified data is available.
- Cache bumped to compile-companion-v17.


VERSION 18.0 — UI POLISH
------------------------
- Updated the main interface typography to a more condensed, technical sci-fi style
  using device/system fonts so the app stays fully offline and self-contained.
- Draft now sits directly underneath Randomise.
- Draft and Randomise now have exactly the same width, scale and primary-button treatment.
- Rematch remains to the left and Balanced remains to the right of the stacked central actions.
- Swapped the visual positions of Share and Start Match.
- Share is now the large left-hand hero action.
- Start Match now occupies the former Share position with a new compact purple treatment,
  specifically redesigned for that smaller slot rather than simply being squeezed into it.
- History remains at the right of the match row.
- Responsive phone/iPhone layouts have been tuned for the new action geometry.
- Cache bumped to compile-companion-v18.
