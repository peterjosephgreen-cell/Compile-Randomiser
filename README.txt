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


VERSION 19.0 — CARDOT + LOGO SPACING
------------------------------------
- Added the user-supplied Cardot font to the PWA.
- Cardot is now the primary font throughout the app, including buttons,
  headings, Protocol names, Draft and Table Mode.
- Regular and Semibold font weights are packaged locally for offline use.
- Shifted the "COMPILE PROTOCOL RANDOMISER" subtitle downward to prevent
  overlap with the main logo artwork.
- Retains the v18 action layout and all v17 Protocol/art functionality.
- Cache bumped to compile-companion-v19.

VERSION 20.0 — TRAIT SELECTION
------------------------------
- Added TRAITS as a manual selection method.
- Match ANY and Match ALL filtering.
- Publisher trait wording transcribed from supplied screenshots.
- Respects enabled sets and individual exclusions.
- Manually assign exactly 3 Protocols to each player.
- No randomisation is used in this mode.

VERSION 20.1 — MISSING PROTOCOL GRAPHICS
----------------------------------------
- Added publisher graphics for Speed.
- Added publisher graphics for Unity.
- Added publisher graphics for Diversity.
- Added publisher graphics for Corruption.
- Added publisher graphics for Assimilation.
- These now appear anywhere publisher Protocol artwork is used, including
  the Protocol Library and Traits selector.
- Cache bumped so installed versions fetch the new assets.


VERSION 20.3 — ARTWORK CONSOLIDATION
------------------------------------
- Canonical Protocol artwork structure:
    protocol-art/compiled/   = 45 compiled sides
    protocol-art/uncompiled/ = 45 uncompiled/trait sides
- Recovered Main 3 compiled artwork from existing package folders where available.
- Library, backgrounds and Traits selector now reference the canonical artwork folders.
- Removed redundant artwork copies where safe.
- Compiled assets found: 45/45
- Uncompiled assets found: 45/45
- Cache bumped to compile-companion-v20-3.


VERSION 21.0 — PLAY VS AI PROTOTYPE
-----------------------------------
This is the first playable-game prototype layered on top of the existing companion.

Included:
- New PLAY VS AI entry point.
- Main 1 / Aux 1 / Main 2 / Aux 2 card dataset: 180 cards / 30 Protocols.
- Select three Protocols for the human and three different Protocols for Standard AI.
- Random legal setup option.
- Local browser-only rules-engine foundation (GitHub Pages compatible).
- Human and AI hands / Cache / Trash foundations.
- Three shared lines with separate human/AI stacks and live line totals.
- Tap a human card, then tap a highlighted legal line to play it.
- Face-up / face-down capable card state model.
- Covered-card state model.
- Automatic Control state stored in GameState and visually highlighted.
- Local save/resume through localStorage.
- Standard AI generates legal card/line moves and scores them tactically.
- AI does not inspect the human's hidden hand to choose moves.
- Action log records plays, draws, refreshes and Control transfers.

PROTOTYPE LIMITATION:
- The full 180-card rules text is loaded into the engine, but complex effects are not
  guessed. The first prototype auto-resolves only safe/unambiguous operations and logs
  target-dependent / triggered / conditional effects as pending/manual.
- This is deliberate: the rules engine foundation is being validated before encoding
  every timing window and special interaction.
- Control transfer is isolated behind one engine function so the official transfer rule
  can be swapped in without changing the rest of the game engine.

Deployment:
- Full package remains GitHub Pages / PWA compatible.
- v21 includes a separate UPDATE_ONLY package containing just the files changed from v20.3.


V21 CORE-RULE CORRECTION
------------------------
Before packaging, the prototype core was checked against the published rulebook:
- Control starts neutral.
- At Check Control, the active player gains Control if they lead in at least 2 lines.
- No automatic start-of-turn draw.
- Turn order foundation is Start > Check Control > Check Compile > Action > Check Cache > End.
- Mandatory Compile detection is implemented.
- Compile condition: at least 10 in a line and greater than the opponent in that line.
- Face-up plays are restricted to the line matching that card's Protocol.
- Face-down cards may be played into any line and contribute 0 printed value.
- Refresh fills hand to 5.
- Starting hand remains 5 cards.
- Complex Start/End/card-command timing remains a prototype limitation and is queued for the next engine pass.
- Optional Control spending to rearrange Protocols before Compile/Refresh is not yet implemented; Control is not silently spent.

VERSION 21.1 — PROTOCOL LINE ART
--------------------------------
- Each playable line now shows its Protocol artwork.
- Uncompiled Protocols use the uncompiled/traits-side image.
- After Compile, the same line automatically switches to the compiled-side image.
- Works for both human and AI Protocols.
- Command-card stacks remain layered over the Protocol art.
- Added clear UNCOMPILED / COMPILED state badges.

VERSION 21.2 — DRAG-TO-PLAY
---------------------------
- Human hand cards can now be dragged directly onto a legal line.
- Works with Pointer Events: mouse on PC and touch/pointer input on iPhone/iPad.
- Legal destination lines illuminate during a drag.
- The line under the dragged card receives a stronger hover highlight.
- Dropping on a legal line plays the card immediately using the currently selected
  FACE-UP / FACE-DOWN mode.
- Dropping outside a legal line cancels the drag without playing anything.
- Existing tap-card then tap-line interaction remains fully available.
- Board cards themselves are not draggable yet; that will be tied to actual Shift
  and card-effect resolution rather than allowing illegal free movement.

VERSION 21.2.1 — ARTWORK / SERVICE-WORKER REPAIR
------------------------------------------------
- Fixed a missing comma in the v21.2 service-worker asset list.
- The invalid service worker could prevent the new cache from installing correctly.
- Service-worker installation is now resilient: individual missing assets no longer
  cause the entire cache installation to fail.
- Repair update includes all 45 compiled + all 45 uncompiled Protocol images.
- Also includes Main 3 icons, app logos/icons and local Cardot fonts so GitHub is
  restored to a known-good visual asset state.
- No gameplay changes from v21.2.

VERSION 21.2.4 — THREE-SECTION COMMAND CARDS
--------------------------------------------
- Command cards now render the source data's three distinct areas:
  TOP / COMMAND / BOTTOM.
- All three areas remain visible, including deliberately blank sections.
- Timing text such as START, END, WHEN COVERED, AFTER REFRESH, etc. retains emphasis.
- Hand cards are larger and more readable.
- Cards already played into a line also retain all three sections.
- Face-down cards hide their rules text as intended.
- Existing tap and drag-to-play interactions are unchanged.

VERSION 21.2.5 — CARD VISIBILITY + FACE-DOWN VALUE
--------------------------------------------------
- Hand cards now have three clearly boxed panels: TOP / COMMAND / BOTTOM.
- All three panels remain visible simultaneously and expand to fit full rules text.
- Played face-up cards retain the same three panels.
- Face-down cards now correctly contribute a value of 2 to their line.
- Standard AI line evaluation also treats a face-down card as value 2.
- Face-down board cards visually show the number 2.
