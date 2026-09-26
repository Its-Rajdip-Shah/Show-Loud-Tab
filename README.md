# Show-Loud-Tab

**A lightweight Safari extension that jumps straight to the tab currently playing audio.**

Show-Loud-Tab solves a small but annoying problem: when you have a lot of tabs open, it can be hard to find which one is making sound.

The extension queries open browser tabs, finds the one marked as audible, focuses its window, and activates the tab.

## What it does

- detects the tab currently playing audio
- focuses the correct browser window
- activates the audible tab
- supports keyboard-command activation
- supports extension-icon activation

## Implementation

The core behaviour is intentionally small:

    const tabs = await chrome.tabs.query({});
    const playingTab = tabs.find(t => t.audible);

The extension then focuses that tab's window and makes the tab active.

## Tech

`Swift` · `JavaScript` · `Safari Web Extension`

## Why

This started as a personal utility: i often had many tabs open and wanted a single action that would take me straight to the one making sound.
