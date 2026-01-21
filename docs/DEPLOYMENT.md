# Deployment Guide – Phase 6

This guide covers the deployment setup for the Recipe Web App to GitHub Pages.

## Overview

The application uses **GitHub Actions** for continuous deployment. When code is pushed to the `master` branch, the workflow automatically builds and deploys the site to GitHub Pages.

## Prerequisites

- GitHub repository set up at `JoshuaSimon/JoshuaSimon.github.io`
- Repository contains the Astro application
- GitHub Actions workflow file is committed (`.github/workflows/deploy.yml`)

## Deployment Architecture

```
Push to master → GitHub Actions Triggered → Build Astro Site → Deploy to GitHub Pages → Live Site
```

### Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) performs the following steps:

1. **Checkout**: Clones the repository
2. **Setup Node.js**: Installs Node.js v24 with npm caching
3. **Install Dependencies**: Runs `npm ci` for clean install
4. **Build**: Runs `npm run build` to generate static files in `dist/`
5. **Upload Artifact**: Prepares the `dist/` folder for deployment
6. **Deploy**: Publishes to GitHub Pages

## Step-by-Step Deployment Instructions

### 1. Enable GitHub Pages (One-Time Setup)

You need to configure GitHub Pages in your repository settings:

1. Go to your repository on GitHub: `https://github.com/JoshuaSimon/JoshuaSimon.github.io`
2. Click on **Settings** (top navigation)
3. Scroll down and click on **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the changes

**Note**: Since this is a user/organization site (username.github.io), it will deploy to the root domain: `https://joshuasimon.github.io`

### 2. Verify Workflow Permissions

Ensure the workflow has the necessary permissions:

1. In repository **Settings**
2. Go to **Actions** → **General**
3. Scroll to **Workflow permissions**
4. Ensure **Read and write permissions** is selected
5. Check **Allow GitHub Actions to create and approve pull requests**
6. Save if you made any changes

### 3. Merge to Master Branch

Currently, the work is on the `dev/add_recipes` branch. To deploy:

```bash
# Ensure you're on the dev branch and everything is committed
git checkout dev/add_recipes
git status  # Should show "working tree clean"

# Switch to master and merge
git checkout master
git merge dev/add_recipes

# Push to trigger deployment
git push origin master
```

### 4. Monitor Deployment

After pushing to master:

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run named "Deploy to GitHub Pages"
3. Click on it to view progress
4. The workflow will show two jobs: `build` and `deploy`
5. Wait for both to complete (usually takes 1-2 minutes)

### 5. Verify Deployment

Once the workflow completes successfully:

1. Visit `https://joshuasimon.github.io`
2. Verify the homepage loads with the recipe grid
3. Click on individual recipes to test detail pages
4. Check responsive layout on mobile/tablet views
5. Test all navigation links

## Manual Deployment

You can also trigger a deployment manually without pushing code:

1. Go to **Actions** tab
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select the `master` branch
5. Click **Run workflow**

## Troubleshooting

### Build Fails

If the build job fails:

1. Check the Actions log for error messages
2. Test the build locally: `npm run build`
3. Fix any errors in your code
4. Commit and push the fixes

### Deployment Fails

If build succeeds but deployment fails:

1. Verify GitHub Pages is enabled in Settings → Pages
2. Check workflow permissions (Settings → Actions → General)
3. Ensure the repository is public (or you have GitHub Pro for private sites)

### Site Shows 404

If the site deploys but shows 404:

1. Wait a few minutes (DNS propagation can take time)
2. Verify the `site` URL in `astro.config.mjs` matches your GitHub Pages URL
3. Check that you selected "GitHub Actions" as the source in Pages settings
4. Clear browser cache and try again

### Images Not Loading

If images don't load:

1. Verify images are in the `public/images/` directory
2. Check that image paths in Markdown frontmatter start with `/images/`
3. Ensure images were committed to git (not in `.gitignore`)

## Configuration Files

### astro.config.mjs

```javascript
export default defineConfig({
  site: "https://joshuasimon.github.io",
  // For repo-based deployment (e.g., github.io/repo-name):
  // base: '/repo-name',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

**Important**: Since this is a user site (`username.github.io`), we don't need a `base` path. The site deploys to the root domain.

### package.json Scripts

The workflow uses these npm scripts:

- `npm ci` - Clean install of dependencies (more reliable for CI/CD)
- `npm run build` - Builds the production site to `dist/`

## Workflow File Reference

Location: `.github/workflows/deploy.yml`

**Trigger**:
- Push to `master` branch
- Manual trigger via workflow_dispatch

**Permissions**:
- `contents: read` - Read repository
- `pages: write` - Write to GitHub Pages
- `id-token: write` - Authentication

**Jobs**:
1. **build** - Builds the Astro site
2. **deploy** - Deploys to GitHub Pages (needs build to complete first)

## Best Practices

### Before Deploying

1. ✅ Test build locally: `npm run build`
2. ✅ Preview the build: `npm run preview`
3. ✅ Test all routes and links
4. ✅ Verify images load correctly
5. ✅ Check responsive design
6. ✅ Commit all changes

### After Deploying

1. ✅ Verify live site works
2. ✅ Test on different devices/browsers
3. ✅ Check browser console for errors
4. ✅ Verify all recipe pages load
5. ✅ Test navigation between pages

### Continuous Deployment

Every push to `master` automatically deploys. This means:

- ✅ Always test in development first
- ✅ Use feature branches for development
- ✅ Merge to master only when ready to deploy
- ✅ Consider using pull requests for code review

## Environment Information

- **Build Environment**: Ubuntu Latest (GitHub Actions)
- **Node.js Version**: 24.x
- **Package Manager**: npm
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Deployment Target**: GitHub Pages

## Next Steps After Initial Deployment

Once Phase 6 is complete and the site is live:

1. ✅ Mark Phase 6 as complete in implementation plan
2. ✅ Share the live URL with stakeholders
3. ✅ Monitor site analytics (if configured)
4. ✅ Gather user feedback
5. ✅ Plan future enhancements (Phase 7+)

## Support & Resources

- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Astro GitHub Pages Guide](https://docs.astro.build/en/guides/deploy/github/)

---

**Last Updated**: Phase 6 Implementation
**Status**: Ready for Deployment ✅