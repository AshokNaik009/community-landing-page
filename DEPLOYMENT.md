# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your UAE | MENA Software Dev Group landing page to GitHub Pages.

## 📋 Prerequisites

Before you begin, make sure you have:
- A GitHub account
- Git installed on your computer
- Node.js and npm installed
- Your project ready to deploy

## 🔧 Step 1: Prepare Your Repository

### 1.1 Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: UAE | MENA Software Dev Group landing page"
```

### 1.2 Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `community-landing-page`
5. Make sure it's **Public** (required for free GitHub Pages)
6. Don't initialize with README (since you already have one)
7. Click "Create repository"

### 1.3 Connect Local Repository to GitHub

```bash
# Add the remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/AshokNaik009/community-landing-page.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## ⚙️ Step 2: Configure GitHub Pages

### 2.1 Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2.2 Verify Your Vite Configuration

Make sure your `vite.config.js` has the correct base path:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/community-landing-page/', // Must match your repo name
})
```

## 🔄 Step 3: Automatic Deployment

The project already includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will:

1. **Automatically trigger** when you push to the `main` branch
2. **Install dependencies** and build the project
3. **Deploy to GitHub Pages** automatically

### 3.1 Push Your Code

```bash
git add .
git commit -m "feat: ready for GitHub Pages deployment"
git push origin main
```

### 3.2 Monitor Deployment

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You'll see a workflow running called "Deploy to GitHub Pages"
4. Wait for it to complete (green checkmark)

## 🌐 Step 4: Access Your Live Site

Once deployment completes:

1. Go to **Settings** → **Pages**
2. You'll see: "Your site is published at `https://ashoknaik009.github.io/community-landing-page/`"
3. Click the link to view your live site!

## 🔧 Step 5: Custom Domain (Optional)

### 5.1 Add Custom Domain

If you have a custom domain:

1. In **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `uae-dev-group.com`)
3. Check **Enforce HTTPS**
4. Add a `CNAME` file to your repository root:

```bash
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

### 5.2 Configure DNS

Add these DNS records with your domain provider:

```
Type: CNAME
Name: www
Value: ashoknaik009.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

## 🚀 Step 6: Making Updates

To update your site:

```bash
# Make your changes
git add .
git commit -m "update: description of your changes"
git push origin main
```

The site will automatically rebuild and deploy!

## 🛠 Troubleshooting

### Common Issues:

**Issue: "Page not found" error**
- Check that `base: '/community-landing-page/'` in `vite.config.js` matches your repo name exactly
- Ensure repository is public
- Wait 5-10 minutes after first deployment

**Issue: "Actions workflow failed"**
- Check the Actions tab for error details
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**Issue: "Blank page loads"**
- Check browser console for errors
- Verify asset paths are correct
- Ensure `base` path in vite.config.js is correct

**Issue: "404 on refresh"**
- This is normal for SPAs on GitHub Pages
- Users should navigate from the home page

## 📝 Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Production Checklist

Before deploying:
- [ ] Test the build locally with `npm run build && npm run preview`
- [ ] Check all links work correctly
- [ ] Verify responsive design on mobile
- [ ] Test loading speed
- [ ] Validate HTML and accessibility

## 🔐 Security Notes

- Never commit sensitive data (API keys, passwords)
- Keep dependencies updated
- Use HTTPS (enabled by default on GitHub Pages)
- Consider adding security headers via Cloudflare or similar

## 📞 Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the Actions workflow logs
3. Verify your `vite.config.js` configuration
4. Test your build locally first

---

**🎉 Congratulations!** Your UAE | MENA Software Dev Group website is now live on GitHub Pages!