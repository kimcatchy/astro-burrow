# Astro Burrow Theme

A high-performance, minimalist, and compact blog theme for `Astro 6.x`, built with `Tailwind CSS v4` and `shadcn/ui`, created for personal use.

[Demo](#)

## ✨ Features

- **🚀 Astro 6.x & Content Layer**: Blazing fast builds and optimal performance using the latest Astro features.
- **🎨 Compact Design**: A unique "dense" UI inspired by developer-centric aesthetics. Monochrome dark mode with bright yellow highlights.
- **🔍 Advanced Fuzzy Search**: Instant global search across titles, tags, and full content using `fuse.js`.
- **📑 Sticky Table of Contents**: Automatically generated and pinned TOC for long-form reading.
- **📱 Responsive & Fixed Header**: Persistent sidebar on desktop and a fixed, blur-effect header on mobile.
- **🛠️ Fully Configurable**: Manage site title, description, and social links (GitHub, X, Discord, etc.) from a single `src/consts.ts` file.
- **🧩 shadcn/ui Integrated**: All components (Buttons, Badges, Accordions, etc.) are standardized using `shadcn/ui` for easy customization.
- **📊 SEO Optimized**: Built-in support for Open Graph tags, Sitemaps, and RSS feeds.

## 🚀 Getting Started

### 1. Initialize the Theme

You can use this theme by cloning the repository:

```bash
git clone https://github.com/your-username/astro-burrow-theme.git my-blog
cd my-blog
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

Customize your site identity and social links in `src/consts.ts`:

```typescript
// src/consts.ts

export const SITE_TITLE = 'Burrow';
export const SITE_DESCRIPTION = 'Your professional tagline here';

export const SOCIAL_LINKS = {
  github: 'https://github.com/your-username',
  twitter: 'https://twitter.com/your-handle',
  linkedin: '',
  youtube: '',
  discord: '',
  gitlab: '',
};
```

## 📂 Content Management

This theme uses **Astro Content Collections**. Add your Markdown or MDX files to the following directories:

- `src/content/blog/`: For blog posts.
- `src/content/project/`: For showcase projects.

**Notably, the `About` page (`/about`) is designed to automatically render the content of your project's root `README.md` file, allowing you to maintain your profile and project overview in a single, central location.**

## 📄 License

This theme is licensed under the [MIT License](LICENSE).

---

Built with 💛 by kimcatchy
