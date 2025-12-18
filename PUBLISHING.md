# Publishing Guide

Step-by-step guide to publish Likha packages to npm.

## Prerequisites

- [ ] npm account created at https://www.npmjs.com/signup
- [ ] npm organization created (optional but recommended): https://www.npmjs.com/org/create
- [ ] Git repository clean (all changes committed)

## Step 1: Build and Validate

```bash
# Build all packages
pnpm build

# Run validation
pnpm pre-publish
```

This will check:
- All builds exist
- package.json files are valid
- Required files present (README, dist/, etc.)
- All tests pass
- No TypeScript errors

## Step 2: Login to npm

```bash
npm login
```

Enter your npm credentials.

## Step 3: Publish Packages

### Option A: Automated (Recommended)

```bash
pnpm publish:all
```

This will:
1. Run pre-publish validation
2. Publish all 4 packages in correct order

### Option B: Manual

```bash
# Publish in dependency order
pnpm --filter @likha/core publish --access public
pnpm --filter @likha/ui publish --access public
pnpm --filter @likha/plugins publish --access public
pnpm --filter @likha/html publish --access public
```

## Step 4: Verify Publishing

Wait 5-10 minutes, then check:

1. **npm Registry:**
   - https://www.npmjs.com/package/@likha/core
   - https://www.npmjs.com/package/@likha/ui
   - https://www.npmjs.com/package/@likha/plugins
   - https://www.npmjs.com/package/@likha/html

2. **CDN (jsdelivr):**
   ```
   https://cdn.jsdelivr.net/npm/@likha/html/dist/likha-editor.umd.js
   https://cdn.jsdelivr.net/npm/@likha/html/dist/likha-editor.css
   ```

3. **Test Installation:**
   ```bash
   mkdir test-install
   cd test-install
   npm init -y
   npm install @likha/html
   ```

## Step 5: Create GitHub Release

```bash
# Tag the release
git tag -a v0.0.1 -m "Release v0.0.1"
git push origin v0.0.1
```

Then create release on GitHub with notes:
- First public release
- Core features available
- Known issues (list Enter key bug)
- What's coming next

## Step 6: Deploy Documentation

```bash
# Build docs
pnpm docs:build

# Push to GitHub (Netlify will auto-deploy)
git add .
git commit -m "docs: update for v0.0.1 release"
git push origin main
```

## Troubleshooting

### "You do not have permission to publish"
- Check you're logged in: `npm whoami`
- Verify package name isn't taken: `npm view @likha/core`
- Ensure publishConfig.access is "public"

### "Package name already exists"
- Choose different name or
- Request access if you own similar package

### "workspace:* dependency found"
- pnpm should auto-replace these during publish
- If not, manually update to "0.0.1"

### CDN not working immediately
- CDNs need 5-10 minutes to sync
- Try unpkg as alternative: `https://unpkg.com/@likha/html`

## Post-Publishing Checklist

- [ ] Verify all packages on npmjs.com
- [ ] Test CDN links work
- [ ] Test npm install works
- [ ] GitHub release created
- [ ] Documentation deployed to Netlify
- [ ] README badges updated (if any)
- [ ] Announce on social media / communities

## Future Releases

For subsequent releases:

1. Update version in all package.json files
2. Update CHANGELOG.md
3. Run `pnpm build`
4. Run `pnpm pre-publish`
5. Run `pnpm publish:all`
6. Tag and release on GitHub
7. Deploy updated docs
