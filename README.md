# Rimon games (self-hosted, ad-free)
Static HTML5 builds served from GitHub Pages: `https://idoatelunch.github.io/rimon-games/<game>/`.
Each build was captured from a public mirror, Poki/ad/tracker SDKs replaced by a local no-op stub (`poki-stub.js`),
ad/tracker script tags removed, and a strict CSP meta tag added (`default-src 'self'` ... no network access to third parties).
See SOURCES.json for the origin of each build, SECURITY.md for the scan results.
Pac-Man: daleharvey/pacman (WTFPL). Bloxorz: jgordon510/quick_bloxorz (CC BY). Geometry Dash: Scratch port by Griffpatch. Other games belong to their authors; private non-commercial use.
