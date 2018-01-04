chrome.browserAction.onClicked.addListener(function (tabs) {
  chrome.tabs.executeScript({file: 'index.js'});
});
