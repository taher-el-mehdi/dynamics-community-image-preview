# 🌐 GitHub Pages Setup Guide

This guide will help you publish the extension website (`index.html`) to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Repository created for this project
- All files pushed to GitHub

## 🚀 Enable GitHub Pages

### Method 1: Using GitHub Website (Easiest)

1. **Go to your repository** on GitHub
   - Navigate to `https://github.com/yourusername/community-image-viewer`

2. **Open Settings**
   - Click the "Settings" tab at the top

3. **Navigate to Pages**
   - In the left sidebar, scroll down and click "Pages"

4. **Configure Source**
   - Under "Source", select the branch (usually `main` or `master`)
   - Select the folder: `/ (root)`
   - Click "Save"

5. **Wait for deployment**
   - GitHub will build and deploy your site
   - This usually takes 1-2 minutes
   - A green checkmark will appear when ready

6. **Visit your site**
   - Your site will be available at:
   - `https://yourusername.github.io/community-image-viewer/`

### Method 2: Using GitHub Actions (Advanced)

Create `.github/workflows/pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## 📝 Update Links in index.html

Before publishing, update all GitHub links in `index.html`:

1. **Replace `yourusername`** with your actual GitHub username
2. **Update repository URLs** throughout the file
3. **Test all links** to ensure they work

### Quick Find & Replace

Find: `yourusername`
Replace with: `your-actual-username`

## ✅ Verify Deployment

After enabling GitHub Pages:

1. **Check Actions tab**
   - Go to repository → Actions
   - Look for "pages build and deployment"
   - Ensure it completed successfully

2. **Test the website**
   - Visit: `https://yourusername.github.io/community-image-viewer/`
   - Check all features work
   - Test on mobile devices
   - Verify all links

3. **Check browser console**
   - Press F12
   - Look for any errors
   - Fix issues if needed

## 🎨 Add Screenshots

To make your site more attractive:

1. **Take screenshots** of the extension in action
2. **Save them** in the `assets/` folder:
   - `assets/screenshot-1.png` - Extension modal
   - `assets/screenshot-2.png` - Zoom feature
   - `assets/screenshot-3.png` - Forum integration

3. **Update index.html** to use real images:

```html
<!-- Replace placeholder divs with: -->
<img src="assets/screenshot-1.png" alt="Extension preview" style="width: 100%; border-radius: 8px;">
```

## 🔧 Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME file** in repository root:
   ```
   your-domain.com
   ```

2. **Configure DNS** with your domain provider:
   - Add CNAME record pointing to: `yourusername.github.io`

3. **Update GitHub Pages settings**:
   - Settings → Pages → Custom domain
   - Enter your domain
   - Enable "Enforce HTTPS"

## 📊 Add Analytics (Optional)

To track visitors, add Google Analytics:

1. **Get tracking code** from Google Analytics
2. **Add to index.html** before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Site not loading

- **Check deployment status** in Actions tab
- **Verify branch** is correct in Pages settings
- **Wait 5 minutes** after first deployment
- **Clear browser cache** and try again

### 404 errors

- **Check file names** are correct (case-sensitive)
- **Verify paths** in links
- **Ensure index.html** is in root folder

### Styling issues

- **Check browser console** for errors
- **Test in different browsers**
- **Validate HTML** at https://validator.w3.org/

### Links not working

- **Update all `yourusername`** placeholders
- **Use absolute URLs** for external links
- **Test each link** manually

## 📱 Testing Checklist

Before announcing your site:

- [ ] Site loads correctly
- [ ] All internal links work
- [ ] All GitHub links point to correct repo
- [ ] Responsive on mobile devices
- [ ] No console errors
- [ ] Screenshots display properly
- [ ] Download button works
- [ ] Footer links are accurate
- [ ] Meta tags are correct
- [ ] Favicon displays (if added)

## 🎉 Announce Your Site

Once live, share it:

1. **Update README.md** with site link
2. **Share on social media**:
   - LinkedIn
   - Twitter
   - Dynamics Community forums

3. **Add to Chrome Web Store** listing (when applicable)

## 🔄 Updating the Site

To update content:

1. Edit `index.html` locally
2. Commit and push changes:
   ```bash
   git add index.html
   git commit -m "Update website content"
   git push origin main
   ```
3. GitHub Pages will auto-deploy (1-2 minutes)

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [HTML Validator](https://validator.w3.org/)
- [Responsive Design Checker](https://responsivedesignchecker.com/)

## 💡 Tips

- **Keep it simple**: The current design is clean and professional
- **Add real screenshots**: Replace placeholders with actual images
- **Update regularly**: Keep content fresh
- **Monitor traffic**: Use GitHub insights
- **Collect feedback**: Add issue templates

---

**Your site URL**: `https://yourusername.github.io/community-image-viewer/`

Remember to replace `yourusername` with your actual GitHub username!
