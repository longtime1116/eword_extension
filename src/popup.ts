document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["words"], (result) => {
    const words = result.words || [];
    const list = document.getElementById("word-list");
    if (list) {
      words.forEach((entry: { word: string; meaning: string; url: string }) => {
        const item = document.createElement("li");
        // 単語と意味を設定
        item.textContent = `${entry.word}: ${entry.meaning} `;

        // URLをハイパーリンクとして設定
        const link = document.createElement("a");
        link.href = entry.url;
        link.textContent = entry.url;
        link.target = "_blank"; // 新しいタブで開く
        link.style.marginLeft = "5px"; // リンクとテキストの間にスペースを追加
        item.appendChild(link);

        list.appendChild(item);
      });
    }
  });
});
