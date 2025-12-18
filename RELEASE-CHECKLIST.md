# Likha v0.0.1 Release Checklist

## Pre-Release Steps (Do in order)

### 1. Code Quality & Build
- [ ] Run all tests: `pnpm test`
- [ ] Build all packages: `pnpm build`
- [ ] Verify no TypeScript errors: `pnpm type-check`
- [ ] Check bundle sizes (core should be < 100KB gzipped)

### 2. Package Preparation
- [ ] Verify all package.json files have correct metadata:
  - name, version (0.0.1)
  - description, keywords
  - author, license (MIT)
  - repository, homepage URLs
  - main, module, types exports
- [ ] Add .npmignore files to each package (or use package.json "files" field)
- [ ] Test local package installation: `pnpm pack` in each package

### 3. npm Publishing Setup
- [ ] Create npm account (https://www.npmjs.com/signup)
- [ ] Login to npm: `npm login`
- [ ] Decision: Use scoped packages (@likha/*) or unscoped?
  - **Recommended:** @likha/core, @likha/html, etc. (requires organization)
  - Alternative: likha-core, likha-html, etc. (no organization needed)
- [ ] If using @likha scope: Create npm organization
- [ ] Set package access to public in package.json: `"publishConfig": {"access": "public"}`

### 4. Publish to npm (in order)
```bash
# Publish dependencies first, dependents last
cd packages/core && npm publish
cd packages/ui && npm publish
cd packages/plugins && npm publish
cd packages/html && npm publish
# Skip React, Laravel, Livewire for now (not built yet)
```

### 5. Verify npm Publishing
- [ ] Check packages on npmjs.com: https://www.npmjs.com/package/@likha/core
- [ ] Wait 5-10 minutes for CDN propagation
- [ ] Test CDN links work:
  - https://cdn.jsdelivr.net/npm/@likha/html/dist/likha-editor.umd.js
  - https://cdn.jsdelivr.net/npm/@likha/html/dist/likha-editor.css
- [ ] Test npm install: `npm install @likha/html` in a test project

### 6. Update Documentation
- [ ] Replace placeholder CDN links with real ones in docs
- [ ] Update installation instructions with correct package names
- [ ] Add "Getting Started" with working examples
- [ ] Build docs: `pnpm docs:build`
- [ ] Preview locally: `pnpm docs:preview`

### 7. Deploy to Netlify
- [ ] Push code to GitHub main branch
- [ ] Connect repository to Netlify
- [ ] Configure build settings (auto-detected from netlify.toml)
- [ ] Deploy and verify live site
- [ ] Test all documentation links work
- [ ] Test CDN examples work on live site

### 8. Post-Release
- [ ] Create GitHub release tag: v0.0.1
- [ ] Write release notes highlighting:
  - First public release
  - Core features available
  - Known limitations (list Enter key bug)
  - React/Laravel/Livewire coming soon
- [ ] Share on social media / relevant communities
- [ ] Update README with live demo link

## Current Blockers / Decisions Needed

### Option A: Scoped Packages (Recommended)
**Pros:**
- Professional appearance (@likha/core)
- Groups packages together
- Easier to find all related packages

**Cons:**
- Requires npm organization ($7/month for private, FREE for public)
- Must set "publishConfig": {"access": "public"}

**Setup:**
1. Create npm organization: https://www.npmjs.com/org/create
2. Add to package.json: `"name": "@likha/core"`
3. Add: `"publishConfig": {"access": "public"}`

### Option B: Unscoped Packages (Simpler)
**Pros:**
- No organization needed
- Can publish immediately
- Completely free

**Cons:**
- Names like "likha-core" less professional
- Harder to group conceptually
- May conflict with existing package names (check first!)

**Setup:**
1. Check availability: https://www.npmjs.com/package/likha-core
2. Update package.json names if needed

## Recommended First Release Scope

**Publish Only:**
- @likha/core (or likha-core)
- @likha/ui (or likha-ui)  
- @likha/plugins (or likha-plugins)
- @likha/html (or likha-html)

**Skip for Now (not ready):**
- React package (not started)
- Laravel package (not started)
- Livewire package (not started)

**Documentation Notes:**
- Mention React/Laravel/Livewire as "Coming Soon"
- Focus examples on vanilla HTML/JavaScript
- Link to GitHub issues for upcoming features

## Quick Start Command Sequence

```bash
# 1. Build everything
pnpm build

# 2. Test local packages
cd packages/html
pnpm pack
# Creates likha-html-0.0.1.tgz

# 3. Login to npm
npm login

# 4. Publish (from root)
pnpm --filter @likha/core publish --access public
pnpm --filter @likha/ui publish --access public
pnpm --filter @likha/plugins publish --access public
pnpm --filter @likha/html publish --access public

# 5. Build and deploy docs
pnpm docs:build
# Push to GitHub, Netlify auto-deploys
```

## Estimated Timeline
- Package prep & testing: 1-2 hours
- npm publishing: 30 minutes
- CDN propagation wait: 5-10 minutes
- Documentation updates: 1 hour
- Netlify deployment: 15 minutes
- **Total: ~3-4 hours**
