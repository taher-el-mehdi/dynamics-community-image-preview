# 🚀 Deployment Checklist

Use this checklist before publishing the extension to Chrome Web Store or GitHub.

---

## 📋 Pre-Release Checklist

### 1. Icons ⚠️ REQUIRED
- [ ] Create icon16.png (16x16 pixels)
- [ ] Create icon48.png (48x48 pixels)
- [ ] Create icon128.png (128x128 pixels)
- [ ] Verify icons look good in extension toolbar
- [ ] Test icons in different themes (light/dark)

### 2. Code Review
- [x] All files have proper comments
- [x] No console.log statements left (except intentional logging)
- [x] Error handling in place
- [x] Code follows style guide
- [x] No hardcoded test URLs

### 3. Testing
- [ ] Test on Chrome (latest version)
- [ ] Test on Edge (latest version)
- [ ] Test on different Windows versions
- [ ] Test on Mac (if available)
- [ ] Test on various forum threads
- [ ] Test with different image formats (JPG, PNG, GIF, WebP)
- [ ] Test zoom functionality
- [ ] Test keyboard shortcuts
- [ ] Test on mobile viewport (responsive)
- [ ] Test with slow internet connection
- [ ] Test with broken image links
- [ ] Test accessibility (screen reader, keyboard only)

### 4. Documentation
- [x] README.md is complete
- [x] INSTALL.md is clear
- [x] CONTRIBUTING.md is helpful
- [x] LICENSE file included
- [x] All links work
- [ ] Update GitHub repository URL in manifest.json
- [ ] Update repository URL in all documentation

### 5. GitHub Repository
- [ ] Create GitHub repository
- [ ] Push all files
- [ ] Update repository URLs in files
- [ ] Create repository description
- [ ] Add topics/tags
- [ ] Create initial release (v1.0.0)
- [ ] Add GitHub Actions (optional)

### 6. Chrome Web Store Preparation
- [ ] Create promotional images (1280x800)
- [ ] Create screenshots (1280x800 or 640x400)
- [ ] Write compelling store description
- [ ] Prepare detailed description
- [ ] List all features clearly
- [ ] Add privacy policy URL
- [ ] Set category (Productivity)
- [ ] Set age rating
- [ ] Price: Free

### 7. Privacy & Security
- [x] No tracking code
- [x] No analytics
- [x] Minimal permissions
- [ ] Create privacy policy page
- [x] Review all network requests (none)
- [x] Review all permissions needed

### 8. Legal
- [x] MIT License included
- [x] Copyright year correct (2026)
- [ ] Trademark check (ensure no conflicts)
- [ ] Review Microsoft trademark usage
- [x] Disclaimer added to README

---

## 📦 Chrome Web Store Submission

### Assets Needed

1. **Extension Icon** (Required)
   - [x] Included in extension bundle
   - Format: PNG
   - Sizes: 16x16, 48x48, 128x128

2. **Store Icon** (Required)
   - [ ] Create 128x128 PNG for store listing
   - Must be colorful and recognizable
   - Represents extension functionality

3. **Promotional Images** (Recommended)
   - [ ] Small tile: 440x280
   - [ ] Marquee: 1400x560
   - [ ] Format: PNG or JPEG

4. **Screenshots** (Required, 1-5 images)
   - [ ] Screenshot 1: Extension in action (showing modal)
   - [ ] Screenshot 2: Image link with preview icon
   - [ ] Screenshot 3: Zoom functionality
   - [ ] Screenshot 4: Settings/features overview
   - Size: 1280x800 or 640x400

### Store Listing Content

**Short Description** (132 characters max):
```
Preview images inline on Dynamics Community forums without downloading. Lightweight, privacy-friendly, no external dependencies.
```

**Detailed Description**:
```
Dynamics Community Image Viewer enables inline image preview on Microsoft Dynamics Community forums (community.dynamics.com).

KEY FEATURES:
✓ Click-to-preview for all images
✓ Zoom & pan support
✓ Full keyboard navigation
✓ No downloads required
✓ Privacy-first (no tracking)
✓ Lightweight & fast

Perfect for Dynamics 365 consultants, developers, and community members who want a better forum browsing experience.

TECHNICAL HIGHLIGHTS:
• Manifest V3 compliant
• No external dependencies
• Content script only
• Minimal permissions
• Open source

How it works:
1. Install extension
2. Visit community.dynamics.com/forums
3. Click any image to preview
4. Use mouse wheel or +/- keys to zoom
5. Press ESC to close

Privacy: No data collection, no tracking, no external network calls.

Open Source: https://github.com/yourusername/community-image-viewer
```

**Category**: Productivity

**Language**: English

---

## 🔍 Pre-Submission Tests

### Functionality
- [ ] Extension loads without errors
- [ ] Images are detected correctly
- [ ] Modal opens on click
- [ ] Modal closes on ESC
- [ ] Modal closes on outside click
- [ ] Zoom works correctly
- [ ] Pan works correctly
- [ ] Keyboard shortcuts work
- [ ] No console errors
- [ ] Handles missing images gracefully

### Compatibility
- [ ] Works on Chrome 88+
- [ ] Works on Edge 88+
- [ ] No conflicts with other popular extensions
- [ ] Forum layout unchanged

### Performance
- [ ] Page load time not affected
- [ ] Modal opens quickly
- [ ] Smooth animations
- [ ] No memory leaks
- [ ] MutationObserver doesn't cause lag

### Accessibility
- [ ] Keyboard navigation works
- [ ] High contrast mode supported
- [ ] Reduced motion respected
- [ ] Focus indicators visible

---

## 📝 Version Information

**Current Version**: 1.0.0
**Release Date**: TBD
**Manifest Version**: 3
**Minimum Chrome Version**: 88

---

## 🐛 Post-Launch Monitoring

After publishing, monitor for:

- [ ] User reviews and ratings
- [ ] Bug reports
- [ ] Feature requests
- [ ] Performance issues
- [ ] Compatibility problems
- [ ] Security concerns

---

## 🔄 Update Process

When releasing updates:

1. Update version in manifest.json
2. Update changelog in README.md
3. Test all functionality
4. Create GitHub release
5. Submit to Chrome Web Store
6. Monitor for issues

---

## ✅ Quick Launch Checklist

**Minimum requirements to launch:**
- [ ] Icons created (16, 48, 128)
- [ ] Tested on Chrome & Edge
- [ ] No console errors
- [ ] GitHub repository created
- [ ] Store listing prepared
- [ ] Screenshots created
- [ ] Privacy policy page live

**Nice to have:**
- [ ] Video demo
- [ ] Website/landing page
- [ ] Social media announcement
- [ ] Blog post

---

## 🎯 Success Metrics

Track these metrics post-launch:
- Weekly active users
- User ratings
- User reviews
- GitHub stars
- Issues reported
- Feature requests

---

## 📞 Support Plan

- **GitHub Issues**: Primary support channel
- **GitHub Discussions**: Community Q&A
- **Email**: (Optional) Set up support email
- **Response Time**: Aim for 48-hour response

---

## 🎉 Launch Day

1. [ ] Submit to Chrome Web Store
2. [ ] Push to GitHub
3. [ ] Create initial release tag
4. [ ] Update README with store link
5. [ ] Announce on Dynamics Community
6. [ ] Share on LinkedIn
7. [ ] Post on Twitter
8. [ ] Update personal website/portfolio