"use strict";
document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.sync.get("wordList", function (data) {
        const wordList = data.wordList || [];
        const listElement = document.getElementById("wordList");
        if (wordList.length === 0) {
            listElement.innerHTML = "<li>登録された英単語がありません。</li>";
            return;
        }
        wordList.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${item.url}" target="_blank">${item.word}</a>: ${item.meaning}`;
            listElement.appendChild(listItem);
        });
    });
});
