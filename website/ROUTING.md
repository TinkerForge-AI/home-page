# TinkerForge AI Website Routing Documentation

## Overview

This document explains the routing system used in the TinkerForge AI website, especially focusing on dynamic routes for content-based pages like blog posts, research articles, and philosophy content.

## **🔧 Recent Changes (Latest Update)**

### **Fixed Issues:**
1. **Simplified Blog Dynamic Routing**: Changed from `[...slug].vue` to `[slug].vue` for consistency
2. **Removed Redundant Files**: Eliminated `blog-new.vue`, `blog-old.vue`, `simple-blog.vue`, and `human-safe-policy-new.vue` to avoid routing conflicts
3. **Standardized URL Generation**: Unified `getBlogPostUrl()` function across all components
4. **Enhanced Route Matching**: Improved content resolution logic with better fallback strategies

### **File Structure Changes:**
- ✅ **BEFORE**: `pages/blog/[...slug].vue` (catch-all routing)
- ✅ **AFTER**: `pages/blog/[slug].vue` (single-segment routing)
- ✅ **REMOVED**: Redundant blog files that caused confusion

## Key Components

### 1. Dynamic Routes

The website uses Nuxt's dynamic routing capabilities with the following **standardized** patterns:

- `/blog/[slug].vue` - Single-segment route for blog posts (simplified from catch-all)
- `/research/[slug].vue` - Dynamic route for research articles
- All routes use consistent single-segment pattern

### 2. Content Structure

Content is organized in the following directories:

- `/content/blog/` - Blog posts (9 markdown files)
- `/content/research/` - Research articles (3 markdown files)
- `/content/philosophy/` - Philosophy content (1 markdown file)

### 3. Components for Content Display

Key components used for displaying content:

- `BlogPost.vue` - Renders a full content article (reusable across sections)
- `BlogList.vue` - Displays a list of article cards
- `BlogCard.vue` - Individual card representation of an article

## How Routing Works

1. **Blog Posts**: 
   - URL pattern: `/blog/post-slug`
   - Route file: `pages/blog/[slug].vue` ← **UPDATED**
   - Content location: `content/blog/post-slug.md`
   - Example: `/blog/hardware-infrastructure` → `content/blog/hardware-infrastructure.md`

2. **Research Articles**:
   - URL pattern: `/research/article-slug`
   - Route file: `pages/research/[slug].vue`
   - Content location: `content/research/article-slug.md`
   - Example: `/research/experiment-1-synopsis` → `content/research/experiment-1-synopsis.md`

3. **Navigation**:
   - Content lists use standardized `getBlogPostUrl()` function
   - Consistent URL generation across `blog.vue` and `index.vue`
   - Primary strategy: Use `_path` property from Nuxt Content
   - Fallback strategies: Use `slug` property or extract from filename

## **URL Generation Logic**

### **getBlogPostUrl() Function:**
```javascript
function getBlogPostUrl(post) {
  // Primary: Use _path if it starts with /blog
  if (post._path && post._path.startsWith('/blog')) {
    return post._path
  }
  
  // Secondary: Use slug property
  if (post.slug) {
    return `/blog/${post.slug}`
  }
  
  // Fallback: Extract filename from _path
  if (post._path) {
    const filename = post._path.split('/').pop()
    return `/blog/${filename}`
  }
  
  // Last resort: Use post ID
  return `/blog/${post._id || 'unknown'}`
}
```

## **Content Resolution Logic**

### **Dynamic Route Matching:**
Both blog and research routes use a robust matching system:

1. **Direct path match**: `post._path === `/blog/${slug}`
2. **Slug property match**: `post.slug === slug`
3. **Filename match**: `post._path.split('/').pop() === slug`

## **Navigation Routes**

### **All Navigation Links Verified:**
- `/` - Homepage ✅
- `/research` - Research listing ✅
- `/blog` - Blog listing ✅
- `/hardware` - Hardware page ✅
- `/philosophy` - Philosophy page ✅
- `/about` - About page ✅
- `/human-safe-policy` - Safety policy ✅
- `/contact` - Contact page ✅
- `/support-us` - Support page ✅

### **Dynamic Content Routes:**
- `/blog/[slug]` - Individual blog posts ✅
- `/research/[slug]` - Individual research articles ✅

## **Content Examples**

### **Blog Posts (9 total):**
- `/blog/hardware-infrastructure` ✅
- `/blog/alignment-tax` ✅
- `/blog/neural-networks-explained` ✅
- `/blog/welcome` ✅
- `/blog/ai-safety-myths` ✅
- `/blog/experiment-1` ✅
- `/blog/experiment-2` ✅
- `/blog/safety-benchmark` ✅
- `/blog/why-alignment-matters` ✅

### **Research Articles (3 total):**
- `/research/experiment-1-synopsis` ✅
- `/research/experiment-2-narrative-neurons` ✅
- `/research/ai-alignment-experiment` ✅

## **Build Verification**

✅ **Build Status**: SUCCESS
- All routes compile correctly
- No TypeScript errors
- All components load properly
- Nuxt Content processes all collections successfully
- Total bundle size: 9.79 MB (2.97 MB gzip)

## **Important Notes**

- **Consistency**: All dynamic routes now use single-segment patterns
- **Reliability**: Robust fallback strategies for content resolution
- **Performance**: Optimized bundle size and loading
- **SEO**: Proper meta tags and structured data
- **Maintainability**: Reduced file redundancy and clearer structure

## **Common Issues and Fixes**

1. **If navigation breaks**: Check that `getBlogPostUrl()` function is generating proper URLs
2. **If content doesn't load**: Verify the query in dynamic route files uses correct path format
3. **If 404 errors occur**: Ensure content files exist and have proper frontmatter
4. **For new content**: Follow the established filename → URL pattern

## **Development Guidelines**

1. **Add new blog posts**: Create `.md` files in `/content/blog/` with proper frontmatter
2. **Add new research**: Create `.md` files in `/content/research/` with proper frontmatter
3. **URL structure**: Use kebab-case filenames that will become the URL slug
4. **Testing**: Always test both the listing page and individual post pages
5. **Consistency**: Use the established `getBlogPostUrl()` function for all link generation
