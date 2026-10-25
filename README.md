# Mobile Mall - B2B Wholesale Distribution Platform

A modern B2B wholesale platform for mobile phones, tablets, and accessories built with React, Vite, Tailwind CSS, and Motion.

## 🚀 Deployment on Hostinger

### Recommended: Static Website Deployment (Web / Cloud Hosting)
1. In Hostinger hPanel, connect this repository.
2. Select **Static Website** (or click **Continue as a static website**).
3. Set the following build settings:
   - **Build Command:** `npm run build`
   - **Output Directory / Publish Directory:** `dist`
   - **Node.js Version:** 18.x or 20.x

### Node.js Add-on Deployment
If deploying via Hostinger Node.js Add-on:
- **Build Command:** `npm run build`
- **Start Command:** `npm start`
- **Application Root:** `/` (the root directory where `package.json` is located)

---

## 📁 Repository Structure

```
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── public/
│   ├── mobile-mall-logo.jpg
│   ├── favicon.svg
│   ├── icons.svg
│   ├── assets/
│   └── phones/
└── src/
    ├── main.tsx
    ├── index.css
    ├── App.tsx
    ├── App.css
    ├── components/
    ├── context/
    └── data/
```

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```
