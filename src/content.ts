const url = window.location.href;
const word = decodeURIComponent(url.split("/").pop() || "");
const meaningElement = document.querySelector(
  ".content-explanation"
) as HTMLElement;
const meaning = meaningElement?.innerText || "意味が見つかりません";

if (word) {
  chrome.storage.local.get(["words"], (result) => {
    const words = result.words || [];
    words.push({ word, meaning, url });
    chrome.storage.local.set({ words });
  });
}
