document.getElementById("clickBtn").addEventListener("click", async () => {
  // Get the current active tab
  let [tab] = await browser.tabs.query({ active: true, currentWindow: true });

  // Send a message to the content page to ask for a snapshot
  // TODO: This doesn't check that it's a LinkedIn page or even that it's our code
  //  which is receiving the snapshot message.
  browser.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
    browser.tabs.sendMessage(tab.id, { type: "snapshot" });
  });
});
