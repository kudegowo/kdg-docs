# GitHub Pages Deployment Plan

This document outlines the steps to deploy the KudEgOwo documentation to GitHub Pages.

## Prerequisites

- GitHub repository: `emergined/kdg-docs`
- Node.js 20+ installed locally
- GitHub Pages enabled on the repository

## Current Configuration

The site is configured to deploy to:
- **URL**: `https://emergined.github.io/kdg-docs/`
- **Organization**: `emergined`
- **Project**: `kdg-docs`

## Deployment Steps

### 1. Enable GitHub Pages (One-time Setup)

1. Go to repository **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
3. Save the settings

### 2. Verify Workflow Permissions

1. Go to repository **Settings** → **Actions** → **General**
2. Under **Workflow permissions**:
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
3. Save

### 3. Deploy

The deployment happens automatically when you push to the `main` branch:

```bash
# From the kdg-docs directory
git add .
git commit -m "Fix admonition syntax for proper rendering"
git push origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Install dependencies
2. Build the Docusaurus site
3. Deploy to GitHub Pages

### 4. Manual Deployment (Optional)

To trigger a manual deployment:
1. Go to **Actions** tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

## Local Testing

Before deploying, test the build locally:

```bash
cd kdg-docs

# Install dependencies
npm install

# Build the site
npm run build

# Serve locally to verify
npm run serve
```

The site will be available at `http://localhost:3000/kdg-docs/`

## Troubleshooting

### Admonitions Not Rendering

If admonitions (:::info, :::tip, etc.) display as raw text:
- Ensure there's a blank line after the opening directive
- Use bracket syntax for titles: `:::info[Title]`

**Correct format:**
```markdown
:::info[Important]

Content goes here after a blank line.
:::
```

### 404 Errors

If you get 404 errors after deployment:
- Verify `baseUrl` in `docusaurus.config.ts` matches your repo name
- Ensure GitHub Pages source is set to "GitHub Actions"

### Build Failures

Check the Actions tab for error logs. Common issues:
- Missing dependencies: Run `npm ci`
- TypeScript errors: Run `npm run typecheck`

## Monitoring

After deployment:
1. Visit `https://emergined.github.io/kdg-docs/`
2. Verify all pages load correctly
3. Check that admonitions render properly
4. Test navigation and links

## Files Changed

The following files were updated to fix admonition rendering:

- `docs/intro.md`
- `docs/for-parents.md`
- `docs/for-schools.md`
- `docs/for-tutors.md`
- `docs/how-it-works/payments.md`
- `docs/product-areas/school-payments.md`
- `docs/product-areas/safe-school.md`
- `docs/product-areas/education.md`
- `docs/product-areas/financial-literacy.md`
- `docs/features/available-now.md`
- `docs/features/coming-soon.md`
- `docs/features/future.md`
