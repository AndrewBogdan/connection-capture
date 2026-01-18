document.getElementById("clickBtn").addEventListener("click", async () => {
    // Get the current active tab
    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });

    // Execute code in that tab
    await browser.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert("It works!");
            document.body.style.backgroundColor = "blue"; // example
        }
    });
});
