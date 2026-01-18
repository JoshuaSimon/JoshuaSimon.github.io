# GitHub Pages Deployment Checklist

## Prerequisites
- [x] Astro project built successfully
- [x] GitHub Actions workflow created
- [x] Site and base path configured in `astro.config.mjs`

## Deployment Steps

### Step 1: Initialize Git Repository
```bash
# If not already a git repository
cd JoshuaSimon.github.io
git init
git add .
git commit -m "Initial commit - Phase 1 complete"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `JoshuaSimon.github.io` (or your username)
3. Keep it public (required for free GitHub Pages)
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

### Step 3: Push to GitHub
```bash
# Add remote (replace with your repository URL)
git remote add origin https://github.com/JoshuaSimon/JoshuaSimon.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 5: Trigger Deployment
The site will automatically deploy when you push to `main`. To manually trigger:
1. Go to **Actions** tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select branch: `main`
5. Click "Run workflow"

### Step 6: Verify Deployment
1. Wait for the workflow to complete (usually 1-2 minutes)
2. Go to **Settings** → **Pages**
3. You should see: "Your site is live at https://joshuasimon.github.io/"
4. Click the link to verify

## Troubleshooting

### Workflow Fails
- Check the workflow run logs in the **Actions** tab
- Ensure Node.js version is compatible (20.x is configured)
- Verify `package-lock.json` exists

### 404 Error on Deployed Site
- Verify no `base` path is set in `astro.config.mjs` (user site should have no base)
- Check that assets are using root-relative paths (starting with `/`)
- Ensure repository name is exactly `username.github.io`

### Assets Not Loading
- Verify images are in the `public/` directory
- Check that asset paths include the base path
- Look for 404 errors in browser console

### Permissions Error
The workflow requires these permissions (already configured):
- `contents: read`
- `pages: write`
- `id-token: write`

If you get permission errors:
1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"
4. Click **Save**

## Expected Result

✅ Site live at: `https://joshuasimon.github.io/`

✅ Automatic deployment on every push to `main`

✅ Build status visible in Actions tab

## Future Deployments

After initial setup, deployment is automatic:

1. Make changes to your code
2. Commit and push to `main` branch
3. GitHub Actions automatically builds and deploys
4. Site updates in 1-2 minutes

```bash
git add .
git commit -m "Update recipe content"
git push
```

That's it! Check the Actions tab to monitor the deployment.

## Manual Build & Preview (Optional)

To test the production build locally before pushing:

```bash
# Build for production
npm run build

# Preview the build
npm run preview
```

Visit: `http://localhost:4321/`

## Important Notes

- **First deployment may take 2-3 minutes**
- **Subsequent deployments are usually faster (1-2 minutes)**
- **Check Actions tab for real-time build status**
- **This is a user site, so no base path is needed**
- **All asset URLs should be root-relative (starting with `/`)**

## Next Steps After Deployment

Once your site is live:
1. Verify the test page loads correctly
2. Check browser console for any errors
3. Test on mobile devices
4. Proceed to Phase 2: Content System

---

**Status**: Ready to deploy! 🚀