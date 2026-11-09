/**
 * AURA website enquiries -> Google Sheet
 *
 * Paste this whole file into Extensions > Apps Script of the
 * "AURA Website Enquiries" Google Sheet, then deploy it as a Web app
 * (see SETUP.md). Every booking from the website becomes a new row.
 */

const SHEET_NAME = 'Enquiries';
// Email alert for every new enquiry. 'owner' = the Google account that owns this sheet.
// Put another address here to send alerts elsewhere, or '' to switch alerts off.
const NOTIFY_EMAIL = 'owner';

const HEADERS = ['Received', 'Reference', 'Name', 'Mobile', 'Call / WhatsApp', 'Area', 'Property',
  'Home stage', 'Interested in', 'Visit type', 'Preferred date', 'Preferred time', 'Customer notes',
  'Status', 'Team notes', 'Device', 'Page'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const phone = String(d.phone || '').replace(/\D/g, '').slice(-10);
    if (!d.name || phone.length !== 10) return json_({ ok: false, error: 'Name and a 10-digit mobile are required' });

    const sh = sheet_();
    const visit = /^\d{4}-\d{2}-\d{2}$/.test(d.visitDate || '') ? new Date(d.visitDate + 'T00:00:00') : '';
    sh.appendRow([
      new Date(), clean_(d.id), clean_(d.name), phone, '', clean_(d.area), clean_(d.property),
      clean_(d.stage), clean_(d.interests), clean_(d.visitType), visit, clean_(d.visitTime),
      clean_(d.note), 'New', '', clean_(d.device), clean_(d.page)
    ]);
    const r = sh.getLastRow();
    sh.getRange(r, 4).setNumberFormat('@').setValue(phone);
    sh.getRange(r, 5).setFormula('=HYPERLINK("https://wa.me/91' + phone + '","WhatsApp ↗")');

    notify_(d, phone);
    return json_({ ok: true, row: r });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Open the web-app URL in a browser to check it is running.
function doGet() {
  return ContentService.createTextOutput('AURA enquiry form is connected to this sheet.');
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS])
      .setFontWeight('bold').setBackground('#0D1A2B').setFontColor('#FFFFFF');
    sh.setFrozenRows(1);
    sh.getRange('A:A').setNumberFormat('dd mmm yyyy, h:mm am/pm');
    sh.getRange('K:K').setNumberFormat('ddd, dd mmm yyyy');
  }
  return sh;
}

function clean_(v) {
  let s = String(v == null ? '' : v).trim().slice(0, 1000);
  if (/^[=+\-@]/.test(s)) s = "'" + s; // never let form text run as a formula
  return s;
}

function notify_(d, phone) {
  if (!NOTIFY_EMAIL) return;
  const to = NOTIFY_EMAIL === 'owner' ? Session.getEffectiveUser().getEmail() : NOTIFY_EMAIL;
  if (!to) return;
  const lines = [
    'Name: ' + d.name, 'Mobile: +91 ' + phone, 'Area: ' + (d.area || '-'),
    'Property: ' + (d.property || '-') + ' (' + (d.stage || '-') + ')',
    'Interested in: ' + (d.interests || '-'),
    'Visit: ' + [d.visitType, d.visitDate, d.visitTime].filter(String).join(', '),
    'Notes: ' + (d.note || '-'), '', 'WhatsApp: https://wa.me/91' + phone,
    'Sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
  ];
  try { MailApp.sendEmail(to, 'New AURA enquiry: ' + d.name + ' (' + (d.id || '') + ')', lines.join('\n')); } catch (e) {}
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

// Optional: run this once from the editor to see a sample row arrive.
function testEnquiry() {
  doPost({ postData: { contents: JSON.stringify({
    id: 'AURA-TEST', name: 'Test Customer', phone: '9876543210', area: 'Kondapur',
    property: '3 BHK apartment', stage: 'Ready / living in', interests: 'Smart switch boards, Smart door lock',
    visitType: 'Site visit at my home', visitDate: '', visitTime: 'Evening (4 pm to 7 pm)',
    note: 'Test row, safe to delete', device: 'Test', page: 'Apps Script editor' }) } });
}
