document.getElementById("clickBtn").addEventListener("click", async () => {
  // Send a message to the content page to ask for a snapshot
  // TODO: This doesn't check that it's a LinkedIn page or even that it's our code
  //  which is receiving the snapshot message.
  browser.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
    browser.tabs.sendMessage(tab.id, { type: "snapshot" });
  });
});

browser.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.csvData) {
    document.getElementById("excelData").textContent =
      `${changes.csvData.newValue}`;
  }
});

async function loadCSV() {
  const result = await browser.storage.local.get("csvData");
  // TODO: Note that this is a huge HTML injection risk
  document.getElementById("excelData").textContent = result.csvData;
}

loadCSV(); // load immediately
