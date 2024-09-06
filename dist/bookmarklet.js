"use strict";
function addWordToStorage() {
    const url = window.location.href;
    let word = "";
    let meaning = "";
    if (url.includes("ejje.weblio.jp/content/")) {
        word = decodeURIComponent(url.split("/").pop() || "");
        const meaningElement = document.querySelector(".content-explanation");
        meaning = (meaningElement === null || meaningElement === void 0 ? void 0 : meaningElement.innerText) || "意味が見つかりません";
    }
    else {
        alert("このサイトでは英単語を取得できません。");
        return;
    }
    chrome.storage.sync.get("wordList", function (data) {
        const wordList = data.wordList || [];
        if (!wordList.some((item) => item.word === word)) {
            wordList.push({ word, meaning, url });
            chrome.storage.sync.set({ wordList }, function () {
                alert("英単語を登録しました");
            });
        }
        else {
            alert("この英単語は既に登録されています。");
        }
    });
}
// ブックマークレットのコードを出力
console.log(`javascript:(${addWordToStorage.toString()})()`);
