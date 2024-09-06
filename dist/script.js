"use strict";
// ページが読み込まれたときに実行される
document.addEventListener("DOMContentLoaded", function () {
    // localStorageから単語リストを取得する
    const wordList = JSON.parse(localStorage.getItem("wordList") || "[]");
    const listElement = document.getElementById("wordList");
    wordList.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${item.url}" target="_blank">${item.word}</a>: ${item.meaning}`;
        listElement.appendChild(listItem);
    });
});
