# Connect the website form to Google Sheets

Every consultation request from the website is added as a new row in the
**AURA Website Enquiries** Google Sheet (tab "Enquiries"), with the date and time,
all details, a WhatsApp link and a Status dropdown. The "Summary" tab counts them.

## One-time setup (about 5 minutes)

1. Open the **AURA Website Enquiries** sheet in Google Drive.
2. Menu **Extensions → Apps Script**. Delete the sample code and paste all of `Code.gs`. Click **Save**.
3. Click **Deploy → New deployment**. Click the gear icon next to "Select type" and choose **Web app**.
   - Description: `AURA website form`
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, then **Authorize access**, pick your Google account.
   If you see "Google hasn't verified this app", click **Advanced → Go to (project name) (unsafe)** → **Allow**.
   (It's your own script, so this is expected.)
5. Copy the **Web app URL** (it ends in `/exec`).
6. In `index.html`, set `const SHEET_URL = "…/exec";` and push. (Or send the URL to Claude.)

To test: open the URL in a browser, it should say "AURA enquiry form is connected to this sheet."

If you change `Code.gs` later, use **Deploy → Manage deployments → Edit → Version: New version**
so the same URL keeps working.
