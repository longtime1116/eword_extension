"use strict";
const url = window.location.href;
const word = decodeURIComponent(url.split("/").pop() || "");
const meaningElement = document.querySelector(".content-explanation");
const meaning = (meaningElement === null || meaningElement === void 0 ? void 0 : meaningElement.innerText) || "意味が見つかりません";
if (word) {
    chrome.storage.local.get(["words"], (result) => {
        const words = result.words || [];
        words.push({ word, meaning, url });
        chrome.storage.local.set({ words });
    });
}
