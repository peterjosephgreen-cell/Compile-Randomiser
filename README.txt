COMPILE PROTOCOL RANDOMISER — VERSION 6

NEW IN V2
---------
- Lock any dealt Protocol so RANDOMISE keeps it.
- Reroll either player while respecting that player's locks.
- Exclude individual Protocols from the pool.
- Enable/disable complete sets.
- Swap Player 1 and Player 2, including their locks.
- Optional "No repeats from last game" mode.
- Clear all locks from Settings.
- Existing settings are remembered on the device.
- Offline PWA support remains included.

LOCKS
-----
Tap the open padlock next to a Protocol to lock it.
Locked cards are kept when you press RANDOMISE or reroll that player.
Tap the closed padlock to unlock it.

NO REPEATS
----------
Turn this on in Settings. On a fresh RANDOMISE, the app tries not to use
any of the six Protocols from the previous deal. If the enabled pool is too
small, it automatically falls back to using repeats rather than failing.

INDIVIDUAL EXCLUSIONS
---------------------
Open Settings, expand a set, then untick individual Protocols you do not
want included. They remain excluded until you turn them back on.

TEST ON WINDOWS
---------------
1. Extract the ZIP.
2. Open Command Prompt / Windows Terminal in the folder.
3. Run:
       py -m http.server 8000
4. Browse to:
       http://localhost:8000

IPHONE
------
Host the folder on any HTTPS web host, open it in Safari, then:
Share -> Add to Home Screen.

CACHE NOTE
----------
This is version 2 and uses a new service-worker cache name. If an older
installed version ever appears stuck, close it fully and reload once while online.


NEW IN V3
---------
- Stores the last 20 randomised/rerolled deals on the device.
- History screen with Player 1 and Player 2 assignments.
- Stats screen showing how many times each Protocol has appeared.
- Undo button for recent randomise/reroll/swap actions.
- Keeps up to 10 undo snapshots during the current app session.
- Clear History button.
- History persists between app launches via localStorage.

NOTES
-----
- Swap Players is undoable, but is not counted as a new historical deal because the same six Protocols are still in play.
- Randomise and player rerolls are recorded as new deals.
- Undo restores the previous allocation and locks, but does not erase the historical record.


NEW IN V4
---------
- Tap any dealt Protocol card to open its card-reference screen.
- Main 1 and Aux 1 include verified card-value lists with concise effect summaries.
- Main 2 and Aux 2 already have the same viewer wired in, but display a notice until
  complete verified card data is loaded.
- Tapping the padlock still locks/unlocks without opening the card viewer.
- Reference text is intentionally summarised rather than presented as exact card wording.


NEW IN V5
---------
- Full tap-to-view card references are now loaded for all 30 Protocols.
- Main 2: Chaos, Clarity, Corruption, Courage, Fear, Ice, Luck, Mirror, Peace, Smoke, Time and War.
- Aux 2: Assimilation, Diversity and Unity.
- Main 2 / Aux 2 data was verified against the open card-database update that includes the official September 2025 Compile Codex errata.
- Card effects remain concise reference summaries rather than copied card text.


NEW IN V6 — VISUAL REFRESH
--------------------------
- New sci-fi circuit/grid background.
- Individual accent colour for every Protocol.
- Holographic-style Protocol tiles with illuminated side rails.
- Hexagonal Protocol emblems.
- Stronger Player / UI visual hierarchy.
- Improved card-reference dialogue styling.
- New original Home Screen app icon.
- Small 'Tap for Cards' affordance on each dealt Protocol.
- No copyrighted game artwork is included.
