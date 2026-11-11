# AURA Enquiries sheet: setup (about 5 minutes)

You paste one script into a new, empty Google Sheet and press Run once. The script then
builds the whole sheet by itself: a Dashboard with live numbers and charts, a Today to-do
list, the Enquiries table with colour-coded Status and Priority dropdowns, a Settings tab,
and a Guide.

## Step 1: Open a new sheet in the AURA account
1. Open an **incognito window** (Ctrl+Shift+N, or Cmd+Shift+N on a Mac).
2. Go to **sheets.new** and sign in **only** as `contact.smarthomesaura@gmail.com`.
   A blank sheet opens.

## Step 2: Paste the script
1. In the sheet's top menu click **Extensions → Apps Script**.
2. Delete everything in the editor, paste **all** of `Code.gs`, and press **Save** (the disk icon).

## Step 3: Build the sheet
1. In the box at the top of the editor (next to "Debug"), choose **setup**, then press **Run**.
2. Google asks for permission: **Review permissions →** choose contact.smarthomesaura@gmail.com →
   **Advanced → Go to (project) (unsafe) → Allow**. This is normal for your own script.
3. Wait about 30 seconds until the log says **"AURA enquiries sheet is ready"**.
   Go back to the sheet tab: the Dashboard, Today, Enquiries, Settings and Guide tabs are there,
   and a "Your enquiries sheet is ready" email arrives in the AURA inbox.

## Step 4: Connect it to the website
1. Back in Apps Script, click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**.
   (It must be "Anyone", not "Anyone with a Google account". This is the most common reason rows don't arrive.)
4. Click **Deploy**, then copy the **Web app URL** (it ends in `/exec`).
5. **Send that link to Claude.** Claude puts it into the website and saves a new website version.

## Check it works
- Open the `/exec` link in a browser: it should say **"Your AURA enquiries link is working."**
- Add `?test=1` to the end of the link and open it: a test row appears in 📋 Enquiries and an alert email arrives.
- Remove test rows any time with the **🏠 AURA** menu → **🧹 Remove test enquiries**.

## Good to know
- If you ever change the script, use **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**
  so the website link stays the same.
- Lost the link? In the sheet, use **🏠 AURA → 🔗 Show my website link**.
- Running **setup** again (or **🏠 AURA → 🛠 Repair sheet design**) fixes the design and never deletes enquiries.
