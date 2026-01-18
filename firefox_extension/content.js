/*
Technical Challenges:
- Upload to the extension a list of text (preferably in a csv)
- Open links
- Click buttons on a website
- Copy text from a website
- Save data as files in local extension storage (storage.local)
- Zip data in local extension storage and download it
 */

browser.runtime.onMessage.addListener((msg) => {
  if (msg.type === "snapshot") snapshot();
});

function snapshot() {
  const buttons = document.querySelectorAll('button[aria-label="More actions"]');
  buttons.forEach(btn => btn.click());

  const pdfButtons = document.querySelectorAll('div[aria-label="Save to PDF"]');
  pdfButtons.forEach(btn => btn.click());
}
