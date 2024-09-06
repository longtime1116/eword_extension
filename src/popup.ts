document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["words"], (result) => {
    const words = result.words || [];
    const list = document.getElementById("word-list");
    if (list) {
      words.forEach((entry: { word: string; meaning: string; url: string }) => {
        const item = document.createElement("li");
        item.textContent = `${entry.word}: ${entry.meaning} (URL: ${entry.url})`;
        list.appendChild(item);
      });
    }
  });
});
