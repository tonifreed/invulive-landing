---
description: Development workflow for making and pushing changes
---

# Development Workflow

Follow these steps when making changes to the project:

## 1. Pull latest changes
```bash
git pull
```
Always start by getting the latest version from the remote repository.

## 2. Make your changes
Edit the files you need to change (e.g., `index.html`, `index.css`, `index.js`).

## 3. Stage your changes
```bash
git add .
```
This stages all modified files for commit.

## 4. Commit your changes
```bash
git commit -m "Your descriptive message here"
```
Write a clear message describing what you changed.

## 5. Push to remote
```bash
git push
```
This sends your committed changes to GitHub/remote repository.

---

## Quick Reference
```
git pull → edit files → git add . → git commit -m "message" → git push
```

## Optional: Docker (if using local server)
- Start server: `docker compose up`
- Restart after changes: `docker compose restart`
- Stop server: `docker compose down`
