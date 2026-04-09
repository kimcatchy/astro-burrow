# Astro Burrow Theme

**Astro Burrow Theme** is a high-performance, minimalist, and compact blog theme designed for [Astro 6.x](https://astro.build/). Built with [Tailwind CSS v4](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/), this theme provides a dense, developer-centric aesthetic optimized for personal archives and project showcases.

[Live Preview](https://kimcatchy.github.io/)

## ✨ Features

- **🚀 Astro 6.x & Content Layer**: Blazing fast builds and optimal performance using the latest Astro features.
- **🎨 Compact Design**: A unique "dense" UI inspired by developer-centric aesthetics. Monochrome dark mode with bright yellow highlights.
- **🔍 Advanced Fuzzy Search**: Instant global search across titles, tags, and full content using `fuse.js`.
- **📑 Sticky Table of Contents**: Automatically generated and pinned TOC for long-form reading.
- **📱 Responsive & Fixed Header**: Persistent sidebar on desktop and a fixed, blur-effect header on mobile.
- **🛠️ Fully Configurable**: Manage site identity and social links (GitHub, X, Discord, etc.) from a single `src/consts.ts` file.
- **🧩 shadcn/ui Integrated**: All components are standardized using `shadcn/ui` for easy customization.
- **📊 SEO Optimized**: Built-in support for Open Graph tags, Sitemaps, and RSS feeds.
- **🌿 Unique About Page**: Automatically renders the content of your project's root `README.md` file, allowing you to maintain your profile in one place.

## 🔄 Notion Ecosystem (Optional)

This theme is designed to work seamlessly with the [notion-to-blog](https://github.com/kimcatchy/notion-to-blog) synchronization service. This combination allows you to write and manage your content in **Notion** while serving it via this high-performance Astro theme.

## 🚀 Getting Started

### 1. Initialize the Theme

You can use this theme by cloning the repository:

```bash
git clone https://github.com/kimcatchy/astro-burrow.git astro
cd astro
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development

```bash
npm run dev
```

Your site should now be running at [http://localhost:4321](http://localhost:4321).

## 📝 Configuration

### 1. Project Identity (src/consts.ts)
Customize your site title, description, and social links:

```typescript
// src/consts.ts
export const SITE_TITLE = 'Burrow';
export const SITE_DESCRIPTION = 'Your professional tagline here';

export const SOCIAL_LINKS = {
  github: 'https://github.com/your-username',
  // ... other links
};
```

### 2. Deployment Settings (astro.config.mjs)
**Crucial for SEO and navigation:** Update your site's URL and base path.

```javascript
// astro.config.mjs
export default defineConfig({
  // REPLACE THIS with your own domain
  site: 'https://yourname.github.io',
  
  // Set this if you're deploying to a subpath (e.g., '/my-blog')
  // base: '/my-blog',
});
```

## 📂 Content Management

This theme uses **Astro Content Collections**. Add your Markdown or MDX files to the following directories:

- `src/content/blog/`: For blog posts.
- `src/content/project/`: For showcase projects.

## 📄 License

This theme is licensed under the [MIT License](LICENSE).

---

Built with 💛 by [kimcatchy](https://github.com/kimcatchy)
