# Recipe Web App

A static recipe web application built with **Astro** and **Tailwind CSS**. This is the first prototype (v1) that allows users to browse cooking recipes publicly.

## 🚀 Features

- Public recipe browsing
- Modern, clean UI with Tailwind CSS
- Static site generation with Astro
- Markdown-based content management
- GitHub Pages deployment ready
- Fast and lightweight

## 📋 Tech Stack

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Content**: Markdown files with Astro Content Collections
- **Deployment**: GitHub Pages with GitHub Actions CI/CD
- **Language**: TypeScript (strictest mode)

## 🛠️ Prerequisites

- Node.js 18.x or higher
- npm or pnpm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/JoshuaSimon/JoshuaSimon.github.io.git
cd JoshuaSimon.github.io
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:4321/`

## 🏗️ Build

Build the static site for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

## 👀 Preview

Preview the production build locally:

```bash
npm run preview
```

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the sidebar
3. Under **Source**, select **GitHub Actions**

### Automatic Deployment

The site will automatically deploy when you push to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles:

- Installing dependencies
- Building the Astro site
- Deploying to GitHub Pages

### Manual Deployment

You can also trigger a deployment manually from the **Actions** tab in your GitHub repository.

## 📁 Project Structure

```
JoshuaSimon.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                     # Static assets
│   └── images/
│       └── recipes/            # Recipe images
├── src/
│   ├── components/             # Reusable Astro components
│   ├── content/
│   │   └── recipes/            # Recipe Markdown files
│   ├── layouts/                # Page layouts
│   ├── pages/                  # Route pages
│   │   ├── index.astro         # Homepage
│   │   └── recipes/
│   │       └── [slug].astro    # Dynamic recipe pages
│   └── styles/
│       └── global.css          # Global styles (Tailwind)
├── astro.config.mjs            # Astro configuration
├── package.json
└── tsconfig.json
```

## 📝 Configuration

### Site URL
The site is configured to deploy to: `https://joshuasimon.github.io`

This is a user site deployment (from `username.github.io` repository) which deploys to the root domain without a base path.

If you need to change the site URL, update the `site` value in `astro.config.mjs`:

```js
export default defineConfig({
  site: "https://yourusername.github.io",
  // ...
});
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 📖 Documentation

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Astro GitHub Pages Integration](https://docs.astro.build/en/guides/deploy/github/)

## 🔮 Future Enhancements (Out of Scope for v1)

- Git-based CMS editing UI
- User authentication (OAuth)
- Recipe search and filtering
- Dynamic ratings
- Backend with SQLite
- Comments and social features

## 📄 License

MIT

## 👤 Author

Joshua Simon