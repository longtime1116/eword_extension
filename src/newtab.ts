document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["words"], (result) => {
    const words: { word: string; meaning: string; url: string }[] =
      result.words || [];
    const list = document.getElementById("word-list");

    if (list) {
      list.innerHTML = ""; // リストを初期化

      words.forEach(
        (
          entry: { word: string; meaning: string; url: string },
          index: number
        ) => {
          const item = document.createElement("li");
          // 単語と意味を設定
          item.textContent = `${entry.word}: ${entry.meaning} `;

          // URLをハイパーリンクとして設定
          const link = document.createElement("a");
          link.href = entry.url;
          link.textContent = entry.url;
          link.target = "_blank"; // 新しいタブで開く

          item.appendChild(link);

          // 削除ボタンを作成
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.addEventListener("click", () => {
            // 単語を削除
            words.splice(index, 1);
            chrome.storage.local.set({ words }, () => {
              updateWordList(); // リストを更新
            });
          });

          item.appendChild(deleteButton);
          list.appendChild(item);
        }
      );
    }
  });

  function updateWordList() {
    chrome.storage.local.get(["words"], (result) => {
      const words: { word: string; meaning: string; url: string }[] =
        result.words || [];
      const list = document.getElementById("word-list");

      if (list) {
        list.innerHTML = ""; // リストを初期化

        words.forEach(
          (
            entry: { word: string; meaning: string; url: string },
            index: number
          ) => {
            const item = document.createElement("li");
            item.textContent = `${entry.word}: ${entry.meaning} (URL: ${entry.url})`;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
              words.splice(index, 1);
              chrome.storage.local.set({ words }, () => {
                updateWordList(); // リストを更新
              });
            });

            item.appendChild(deleteButton);
            list.appendChild(item);
          }
        );
      }
    });
  }
});
