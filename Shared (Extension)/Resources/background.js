async function jumpToAudibleTab() {
  const tabs = await chrome.tabs.query({});
  const playingTab = tabs.find(t => t.audible);
  if (playingTab) {
    await chrome.windows.update(playingTab.windowId, { focused: true });
    await chrome.tabs.update(playingTab.id, { active: true });
  } else {
    console.log("No tab is currently playing audio.");
  }
}

chrome.commands.onCommand.addListener((cmd) => {
  if (cmd === "jump-audible") {
    jumpToAudibleTab();
  }
});

// (Optional) still support clicking the icon, but this is the one that may snap back:
chrome.action.onClicked.addListener(jumpToAudibleTab);
