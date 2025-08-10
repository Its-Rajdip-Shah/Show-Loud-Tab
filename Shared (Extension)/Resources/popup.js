document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({}, (tabs) => {
    const playingTab = tabs.find(tab => tab.audible);
    if (playingTab) {
      // Show tab info
      document.getElementById("status").textContent = `Switching to: ${playingTab.title}`;
      
      // Focus the tab and its window
      chrome.tabs.update(playingTab.id, { active: true });
      chrome.windows.update(playingTab.windowId, { focused: true });
    } else {
      document.getElementById("status").textContent = "No tab is playing audio.";
    }
  });
});
