"use strict";
// ブックマークレットの関数を定義
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
    const newEntry = { word, meaning, url };
    const existingData = JSON.parse(localStorage.getItem("wordList") || "[]");
    if (!existingData.some((item) => item.word === word)) {
        existingData.push(newEntry);
        localStorage.setItem("wordList", JSON.stringify(existingData));
        alert("英単語を登録しました");
    }
    else {
        alert("この英単語は既に登録されています。");
    }
}
// ブックマークレットのコードを出力
console.log(`javascript:(${addWordToStorage.toString()})()`);
