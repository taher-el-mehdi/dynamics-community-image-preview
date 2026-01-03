# Contributing to Dynamics Community Image Viewer

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## 🎯 Project Goals

- Keep it lightweight and fast
- No external dependencies
- Privacy-first (no tracking)
- Maintain Manifest V3 compliance
- Support all Chromium browsers

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of JavaScript, HTML, CSS
- Chrome or Edge browser
- Text editor (VS Code recommended)

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/taher-el-mehdi/dynamics-community-image-preview.git
   cd community-image-viewer
   ```

3. Load the extension in your browser:
   - Go to `chrome://extensions/` or `edge://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the project folder

4. Make your changes to the code

5. Test thoroughly:
   - Visit https://community.dynamics.com/forums/
   - Test all features (click, zoom, keyboard shortcuts)
   - Check browser console for errors

6. Reload the extension to see changes:
   - Go to `chrome://extensions/`
   - Click the reload icon on the extension card
   - Refresh the forum page

## 📝 Code Guidelines

### JavaScript

- Use modern ES6+ syntax
- Add JSDoc comments for functions
- Keep functions small and focused
- Use descriptive variable names
- Handle errors gracefully

```javascript
/**
 * Description of what the function does
 * @param {string} imageUrl - The URL of the image to display
 * @returns {void}
 */
function showImageModal(imageUrl) {
  // Implementation
}
```

### CSS

- Use clear, semantic class names
- Prefix all classes with `dciv-`
- Add comments for complex styles
- Support responsive design
- Consider accessibility (contrast, reduced motion)

```css
/* Modal Container */
.dciv-modal {
  /* Styles */
}
```

### File Structure

```
community-image-viewer/
├── manifest.json      # Extension config
├── content.js        # Main logic
├── styles.css        # Styles
├── README.md         # Main docs
├── LICENSE           # MIT License
└── CONTRIBUTING.md   # This file
```

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Browser and version** (e.g., Chrome 120.0.6099.109)
2. **Steps to reproduce** the issue
3. **Expected behavior** vs **actual behavior**
4. **Screenshots** if applicable
5. **Console errors** (F12 → Console)

## 💡 Suggesting Features

We welcome feature suggestions! Please:

1. Check existing issues first
2. Explain the use case
3. Describe the expected behavior
4. Consider if it fits the project goals (lightweight, privacy-first)

## 🔧 Pull Request Process

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Follow code guidelines
   - Add inline comments
   - Test thoroughly

3. **Commit your changes**:
   ```bash
   git commit -m "Add: brief description of changes"
   ```
   
   Commit message prefixes:
   - `Add:` New feature
   - `Fix:` Bug fix
   - `Update:` Improvements to existing code
   - `Docs:` Documentation changes
   - `Style:` Code formatting (no functional changes)

4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**:
   - Provide a clear description
   - Reference related issues
   - Include screenshots if UI changes

6. **Review process**:
   - Maintainers will review your PR
   - Address any feedback
   - Once approved, it will be merged

## 🧪 Testing Checklist

Before submitting a PR, test:

- [ ] Extension loads without errors
- [ ] Click-to-preview works on image links
- [ ] Click-to-preview works on image elements
- [ ] Modal closes with ESC key
- [ ] Modal closes when clicking outside
- [ ] Zoom in/out works (mouse wheel, +/- keys)
- [ ] Pan works (arrow keys, click & drag)
- [ ] Responsive on different screen sizes
- [ ] No console errors
- [ ] Forum layout not broken
- [ ] Works with dynamically loaded content

## 🎨 Feature Ideas

Some ideas for future contributions:

- [ ] Options page for settings
- [ ] Toggle hover preview mode
- [ ] Image carousel for multiple images
- [ ] Download button in modal
- [ ] Fullscreen mode
- [ ] Image rotation
- [ ] Support for GIFs/videos
- [ ] Firefox compatibility
- [ ] Internationalization (i18n)
- [ ] Dark/light theme toggle

## 📚 Resources

- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/mv3/)
- [Manifest V3 Migration](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Web Accessible Resources](https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/)
- [Content Scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

## 💬 Community

- **GitHub Discussions**: For questions and ideas
- **Issues**: For bugs and feature requests
- **Pull Requests**: For code contributions

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Every contribution, no matter how small, is valuable. Thank you for helping make this extension better!

---

**Questions?** Open an issue or start a discussion on GitHub.
