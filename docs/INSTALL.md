# Installation Guide

## Quick Start (5 minutes)

### Step 1: Download the Extension

Download or clone this repository to your computer.

### Step 2: Prepare Icons (Optional)

The extension requires icon files. You have two options:

**Option A - Skip for Testing:**
Remove the `icons` and `action` sections from `manifest.json` temporarily.

**Option B - Create Icons:**
Follow instructions in `ICONS_README.txt` to create:
- icon16.png
- icon48.png
- icon128.png

### Step 3: Load in Browser

#### Chrome:
1. Open Chrome
2. Go to `chrome://extensions/`
3. Enable "Developer mode" (top right toggle)
4. Click "Load unpacked"
5. Select the `community-image-viewer` folder
6. Done! ✅

#### Edge:
1. Open Edge
2. Go to `edge://extensions/`
3. Enable "Developer mode" (left sidebar toggle)
4. Click "Load unpacked"
5. Select the `community-image-viewer` folder
6. Done! ✅

### Step 4: Test It

1. Navigate to https://community.dynamics.com/forums/
2. Find any thread with images
3. Click on an image link
4. Image should open in a beautiful modal! 🎉

## Troubleshooting

**"Manifest file is missing or unreadable"**
- Ensure manifest.json is in the root folder
- Check for JSON syntax errors

**"Could not load icon 'icon16.png'"**
- Either create the icon files (see ICONS_README.txt)
- Or temporarily remove the icons section from manifest.json

**Extension loads but doesn't work**
- Hard refresh the forum page (Ctrl+Shift+R)
- Check browser console (F12) for errors
- Ensure you're on https://community.dynamics.com/forums/

## Features Overview

✅ **Click to Preview** - Click any image link  
✅ **Zoom & Pan** - Mouse wheel or +/- keys  
✅ **Keyboard Shortcuts** - ESC to close, arrows to pan  
✅ **Drag Support** - Click and drag zoomed images  
✅ **Responsive** - Works on all screen sizes  
✅ **Accessible** - Full keyboard navigation  

## Need Help?

- Check the main [README.md](README.md) for full documentation
- Open an issue on GitHub
- Read troubleshooting section in README.md

---

Happy previewing! 🖼️
