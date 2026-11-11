# Website versions

Every change to the site is saved as a numbered version. Each version is a branch named `versions/vN` that never changes, so any version can be restored by its number.

| Version | Date | What changed |
|---|---|---|
| v1 | 2026-10-31 | First version of the AURA website |
| v2 | 2026-10-31 | Real AURA logo in the header, footer and browser tab |
| v3 | 2026-11-05 | Cost estimator section removed |
| v4 | 2026-11-05 | Premium polish: scroll animations, slimmer header, glowing cards, scrolling "works with" bar; fixed the form's WhatsApp box and page edge border |
| v5 | 2026-11-05 | New hero animation: a live smart home run from the AURA phone app, with a day-to-night auto tour (morning, evening, door bell guest, movie, night), signal beams from phone to devices, tappable room hotspots and a brightness slider |
| v6 | 2026-11-05 | Hero re-composed: centred headline on top, then the animation as a big full-width centrepiece with the phone on the right and a new "Live activity" card on the left; trust points moved below it; fixed the door bell alert sometimes staying on screen |
| v7 | 2026-11-05 | New "Meet the founder" section right after the hero animation: founder photo with the background removed, cyan glow and arcs, floating info cards, name and title, and a WhatsApp button |
| v8 | 2026-11-05 | Hero animation becomes a narrated guided tour: Aura, a voice guide, explains 10 steps in simple words (English, Telugu or Hindi) with word-by-word captions, spotlights each device, asks the visitor to tap it themselves ("Your turn"), plays soft background music and sounds (door bell, success chime) with mute buttons, and ends with a free home visit / WhatsApp card. New "Watch how it works" button in the hero |
| v9 | 2026-11-09 | Packages section removed (pricing differs for every client), along with its menu and footer links. Smart switch boards no longer show a fixed "from" price, and the Products intro now says quotes are made after a free consultation |
| v10 | 2026-11-09 | Consultation form rebuilt as a 4-step tap-to-choose wizard (products, home, visit, contact) with a live "Your smart home plan" card, day and time pickers, helpful tips, live number check and a celebration screen with a reference number. Ready to send every enquiry to the "AURA Website Enquiries" Google Sheet (setup in google-sheets/SETUP.md) |
| v11 | 2026-11-09 | Last form step now offers two ways to send: "Call me back" (saves straight to the Google Sheet, no WhatsApp needed) or "Chat on WhatsApp" (opens WhatsApp and also saves to the sheet). Separate thank-you screens for each. Sheet gets a "Contact by" column |
| v12 | 2026-11-09 | contact.smarthomesaura@gmail.com is now the website's only email: shown in the showroom contact card, the footer, the form's thank-you screen and the Google business info. Enquiry alert emails go to it, and the sheet setup guide now uses that account |
| v13 | 2026-11-10 | "What we install" rebuilt as a one-screen interactive product explorer: pick any of the 9 products and try it live (switch lights on, unlock the door by face, ring the door bell, pan the camera, dim and colour the lights, open the curtains, and more). It plays through products on its own until the visitor takes over, counts "explored 0 of 9", and has "Add to my plan", which sends the chosen products straight into the consultation form. About a third of the old length on phones |
| v14 | 2026-11-10 | "Recent work" is now Instagram-style project stories: tap a project bubble, and each project plays in three frames (the home, what we installed with glowing hotspots, the result). Tap to go forward or back, hold to pause, swipe between projects, and "Try it" jumps to that product in the explorer. The Experience centre is now a compact card beside it with Directions / Call / WhatsApp buttons. Ready for real project photos |
| v15 | 2026-11-11 | Enquiry form connected to the Google Sheet (owned by contact.smarthomesaura@gmail.com). "Call me back" and "Chat on WhatsApp" both now add a row to the sheet |
| v16 | 2026-11-11 | Enquiry form now points at the new Google Sheet script link (redeployed with clearer error messages) |
| v17 | 2026-11-11 | Enquiry form now sends to the brand-new AURA Enquiries sheet (Dashboard, Today to-do, colour-coded Enquiries, alert and morning summary emails). Sheet script in google-sheets/Code.gs |

To go back to a version, ask Claude to "restore vN". The live site (main branch) is then reset to that version's files, and the result is saved as a new version.
