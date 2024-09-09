const url = window.location.href;
const cleanUrl = url.split("?")[0].split("#")[0];
const word = decodeURIComponent(cleanUrl.split("/").pop() || "");
const meaningElement = document.querySelector(
  ".content-explanation"
) as HTMLElement;
const meaning = meaningElement?.innerText;

if (word) {
  chrome.storage.local.get(["words"], (result) => {
    const words = result.words || [];
    // 同様の word が存在するかチェック
    const wordExists = words.some((entry: any) => entry.word === word);

    if (!wordExists && meaning) {
      // 同じ word が存在しない場合のみ追加
      words.push({ word, meaning, url: cleanUrl });
      chrome.storage.local.set({ words });
    }
  });
}
