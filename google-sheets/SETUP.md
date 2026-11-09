# Connect the website form to Google Sheets

Every consultation request from the website is added as a new row in the
**AURA Website Enquiries** Google Sheet (tab "Enquiries"), with the date and time,
all details, a WhatsApp link and a Status dropdown. The "Summary" tab counts them.

The website's only email is **contact.smarthomesaura@gmail.com**. The sheet, the script
and the enquiry alerts all belong to that account.

## One-time setup (about 5 minutes)

1. Open an **incognito window** (Ctrl+Shift+N, or Cmd+Shift+N on a Mac) and sign in
   **only** as `contact.smarthomesaura@gmail.com`. Being signed into several Google
   accounts at once is what causes the "Sorry, unable to open the file" error.
2. Open the sheet that was shared with this account:
   https://docs.google.com/spreadsheets/d/13T-HnxoNsVYnePYvM6HzykkvErzTiuOVZhFr5CUa_i4/edit
   (or open the "shared with you" email in that inbox).
3. Click **File → Make a copy**. Name it `AURA Website Enquiries` and click **Make a copy**.
   The copy opens in a new tab and is owned by contact.smarthomesaura@gmail.com.
   **Do all the next steps in that copy.**
4. Click **Extensions → Apps Script** (the `{ }` icon; *not* AppSheet).
   Delete the sample code, paste all of `Code.gs`, and click **Save**.
5. Click **Deploy → New deployment**. Click the gear icon next to "Select type" and choose **Web app**.
   - Description: `AURA website form`
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**, then **Authorize access**, and choose contact.smarthomesaura@gmail.com.
   If you see "Google hasn't verified this app", click **Advanced → Go to (project name) (unsafe)** → **Allow**.
   (It's your own script, so this is expected.)
7. Copy the **Web app URL** (it ends in `/exec`).
8. In `index.html`, set `const SHEET_URL = "…/exec";` and push. (Or send the URL to Claude.)

To test: open the URL in a browser. It should say "AURA enquiry form is connected to this sheet."
New-enquiry emails go to contact.smarthomesaura@gmail.com (set by `NOTIFY_EMAIL` in `Code.gs`).

If you change `Code.gs` later, use **Deploy → Manage deployments → Edit → Version: New version**
so the same URL keeps working.

The original sheet in the old account can be deleted once the copy works.

## Moving the website accounts to the same email

Do these while signed in to each service. All are free and reversible.

- **GitHub** (repo dot-hpg/aura): Settings → Emails → add contact.smarthomesaura@gmail.com,
  click the link in the verification email, set it as **Primary email**, then remove the old one.
- **Vercel** (aura-pnq6.vercel.app): Account Settings → Email → add
  contact.smarthomesaura@gmail.com, verify it, make it primary, then remove the old one.
- **Netlify** (sparkly-buttercream-f70f4e.netlify.app): User settings → change the email
  to contact.smarthomesaura@gmail.com and confirm from that inbox.
- **Google Business Profile / Instagram** (if they use another email): change the contact
  email in their settings to contact.smarthomesaura@gmail.com.
