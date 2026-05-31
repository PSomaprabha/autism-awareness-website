# Autism Awareness Web App

A Node.js + Express application with a static frontend in `public/` and MongoDB-powered backend APIs.

## What is included

- `public/` - frontend HTML, CSS, JS, images
- `server/` - Express server, API routes, Mongoose models
- `package.json` - dependencies and startup script
- `.gitignore` - excludes `node_modules/`, `.env`, and editor/system files
- `.env.example` - example environment variables template

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment example:
   ```bash
   copy .env.example .env
   ```

3. Edit `.env` with your own values.

## Environment variables

Create a `.env` file with values like:

```env
MONGODB_URI=mongodb://localhost:27017/autismawareness
PORT=5000
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-admin-password
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

> Note: The values above are placeholders for example only. Do not publish your real admin credentials or email secrets to GitHub.

## Run the app

```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## Notes before GitHub push

- Do not push `node_modules/`
- Do not push `.env`
- `.gitignore` is already configured to exclude these files

## Cleanup

- Removed `public/success4_files/` because it was not referenced by the site and was likely leftover exported assets.
