// 登録するデータの型を定義
interface WordEntry {
  word: string;
  meaning: string;
  url: string;
}

// ページが読み込まれたときに実行される
document.addEventListener("DOMContentLoaded", function () {
  // localStorageから単語リストを取得する
  const wordList: WordEntry[] = JSON.parse(
    localStorage.getItem("wordList") || "[]"
  );

  const listElement = document.getElementById("wordList") as HTMLUListElement;

  wordList.forEach((item: WordEntry) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${item.url}" target="_blank">${item.word}</a>: ${item.meaning}`;
    listElement.appendChild(listItem);
  });
});
