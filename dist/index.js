"use strict";
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: 'https://bard.google.com/chat' });
});
