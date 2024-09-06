chrome.action.onClicked.addListener((tab) => {
  // Example: Fetch and register word data from the active tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    files: ["content.js"],
  });
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");
});
