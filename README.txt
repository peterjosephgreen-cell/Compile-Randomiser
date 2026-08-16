COMPILE COMPANION — VERSION 10.2

This release combines the planned v9 and v10 upgrades into one app.

NEW
---
- Animated Protocol dealing with digital tick/confirmation sounds.
- Haptic/vibration attempt where the browser supports it.
- Editable Player 1 / Player 2 names, remembered on the device.
- Pure Random or Balanced Random mode.
- Balanced Random prefers Protocols used less often in completed matches.
- Full Protocol Library for all 30 Protocols.
- Search the Library.
- Favourite Protocols directly in the Library.
- Exclude / re-enable Protocols directly in the Library.
- Upgraded Protocol viewer with playstyle summary and swipeable card references.
- Proper Match Mode: Start Match, Finish Match, choose winner or draw.
- Deal changes are disabled while a match is active to prevent accidental rerolls.
- Match history is stored separately from ordinary deal history.
- Protocol performance statistics: games, wins, losses, draws and win %.
- Rematch gives six different Protocols from the most recent completed match when possible.
- Share creates a clean matchup image and uses the device Share Sheet where supported.
- Table Mode shows both players from opposite sides of the phone.
- Sound effects can be disabled.
- Haptics can be disabled.
- Built-in version display and update checker for GitHub Pages deployments.
- Existing locks, rerolls, swap, exclusions, no-repeat mode, history, undo,
  random Protocol backgrounds and all 30 card references remain.

IPHONE NOTES
------------
Some browser features are capability-dependent. The app checks for them at runtime:
- Share image: uses Web Share with files when supported, then falls back to text sharing
  or clipboard.
- Haptics: uses navigator.vibrate only when the browser exposes it. Unsupported devices
  simply do nothing.
- Table Mode works in portrait but is designed to look best after rotating the phone.

UPDATING GITHUB
---------------
Replace the existing repository files with the contents of this ZIP and commit.
The service-worker cache is now "compile-companion-v10".
version.json is included for the app's built-in update checker.


VERSION 10.2 FIX
----------------
- Fixed false "A newer app version is available" banners.
- Version checks now compare versions numerically rather than treating any mismatch as newer.
- A stale, malformed or failed version response will no longer display an update banner.
- version.json is now fetched network-first by the service worker.
- Service-worker cache bumped to compile-companion-v10-1.


VERSION 10.2 FIX
----------------
- Fixed random Protocol backgrounds not changing on app/page refresh.
- The background selector now runs during the actual startup sequence.
- Removed an accidental background refresh from the Protocol-exclusion handler.
- Service-worker cache bumped to compile-companion-v10-2.
