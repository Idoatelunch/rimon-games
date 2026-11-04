# Security review
- ClamAV scan (fresh signature DB, verified with EICAR) of all 26 game folders: 0 infected files.
- Static scan for window.open, top/parent redirects, miners (coinhive/cryptonight/...), ad/tracker hosts, eval: no miners found anywhere.
  window.open/redirect/ad-host strings found only inside stock engine code (Construct 2 / Phaser / p5 / Haxe / Ruffle / Cocos) as dormant, unused code paths; every build carries a CSP that blocks all third-party scripts, frames and connections.
- Runtime test (headless Chromium, desktop + Pixel 7 landscape, iframe from a foreign origin): no popups, no external requests, no ad-network requests, forced ad calls resolve instantly.
- eggy-car vendors the GameDistribution SDK (needed for the game's flow); it cannot load ads because of the CSP (verified: no ad request, no ad shown).
