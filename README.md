# Modern Blog - Jekyll GitHub Pages Template

A clean, modern, SEO-optimized blog template built for GitHub Pages. Features responsive design, search functionality, and ad placement areas.

## Features

- ✅ **GitHub Pages Compatible** - Works perfectly with GitHub Pages
- ✅ **SEO Optimized** - Meta tags, Open Graph, Schema markup
- ✅ **Responsive Design** - Mobile-first, clean layout
- ✅ **Search Functionality** - Client-side search with JavaScript
- ✅ **Ad Placement Areas** - Ready for Google AdSense, Ezoic, etc.
- ✅ **Social Media Integration** - Open Graph and Twitter Cards
- ✅ **Fast Loading** - Optimized CSS and minimal JavaScript
- ✅ **Easy to Customize** - Clean code structure

## Quick Start

### 1. Fork or Download
- Fork this repository or download as ZIP
- Rename to `yourusername.github.io` for user site or `your-blog-name` for project site

### 2. Configure
Edit `_config.yml`:
```yaml
title: "Your Blog Name"
description: "Your blog description"
url: "https://yourusername.github.io"
baseurl: "/your-repo-name"  # Leave empty for user site
author: "Your Name"
email: "your.email@example.com"
```

### 3. Customize Social Links
Update social media handles in `_config.yml`:
```yaml
social:
  twitter: "yourusername"
  github: "yourusername"
  linkedin: "yourusername"
  instagram: "yourusername"
```

### 4. Add Google Analytics (Optional)
```yaml
google_analytics: "G-XXXXXXXXXX"
```

## Adding New Blog Posts

### Method 1: GitHub Web Interface (Easiest)
1. Go to your repository on GitHub
2. Navigate to `_posts` folder
3. Click "Add file" → "Create new file"
4. Name your file: `YYYY-MM-DD-your-post-title.md`
5. Add front matter and content (see example below)
6. Commit the file

### Method 2: Local Development
1. Create new file in `_posts` folder
2. Follow naming convention: `YYYY-MM-DD-title.md`
3. Add front matter and content
4. Commit and push to GitHub

### Blog Post Template
```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15 10:00:00 +0000
categories: [technology, tutorial]
tags: [javascript, web-development, tutorial]
author: "Your Name"
description: "Brief description for SEO (150-160 characters)"
---

# Your Post Title

Your content goes here...

## Subheading

More content...
```

## File Structure

```
blog/
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
│   ├── default.html     # Base template
│   └── post.html        # Blog post template
├── _includes/           # Reusable components
│   ├── header.html      # Site header
│   └── footer.html      # Site footer
├── _posts/              # Blog posts
│   ├── 2024-01-15-sample-post.md
│   └── ...
├── assets/
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   └── js/
│       └── search.js    # Search functionality
├── blog/
│   └── index.html       # Blog listing page
├── index.html           # Home page
├── about.md             # About page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Customization

### Colors and Styling
Edit `assets/css/style.css` to customize:
- Colors and fonts
- Layout and spacing
- Responsive breakpoints

### Navigation Menu
Edit `_includes/header.html` to modify navigation links.

### Footer Content
Edit `_includes/footer.html` to update footer sections and social links.

### Ad Placements
Replace ad placeholder divs with your actual ad codes:
```html
<div class="ad-banner">
  <!-- Replace with your ad code -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <ins class="adsbygoogle" ...></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

## GitHub Pages Deployment

### Option 1: User/Organization Site
1. Create repository named `yourusername.github.io`
2. Upload files to repository
3. Site will be available at `https://yourusername.github.io`

### Option 2: Project Site
1. Create repository with any name (e.g., `my-blog`)
2. Upload files to repository
3. Go to Settings → Pages
4. Select source: "Deploy from a branch"
5. Choose branch: `main` or `master`
6. Site will be available at `https://yourusername.github.io/repository-name`

### Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Select source branch (usually `main`)
4. Click Save
5. Your site will be live in a few minutes

## Local Development (Optional)

To test locally before deploying:

1. Install Ruby and Bundler
2. Run in terminal:
```bash
bundle install
bundle exec jekyll serve
```
3. Open `http://localhost:4000` in browser

## SEO Optimization

The template includes:
- Meta descriptions and titles
- Open Graph tags for social sharing
- Schema.org markup for blog posts
- XML sitemap generation
- SEO-friendly URLs
- Fast loading times

## Adding Categories and Tags

Create category pages in root directory:
```markdown
---
layout: default
title: "Technology Posts"
---
# Technology Posts
{% for post in site.categories.technology %}
  <!-- Post listing code -->
{% endfor %}
```

## Troubleshooting

### Site Not Loading
- Check repository name matches GitHub Pages requirements
- Verify `_config.yml` syntax
- Check GitHub Pages build status in repository Actions tab

### Posts Not Showing
- Verify file naming: `YYYY-MM-DD-title.md`
- Check front matter syntax
- Ensure date is not in the future

### Styling Issues
- Clear browser cache
- Check CSS file path in `_layouts/default.html`
- Verify CSS syntax

## Support

For issues and questions:
1. Check GitHub Issues in this repository
2. Review GitHub Pages documentation
3. Jekyll documentation: https://jekyllrb.com/docs/

## License

This template is open source and available under the MIT License.

---

**Happy Blogging!** 🚀