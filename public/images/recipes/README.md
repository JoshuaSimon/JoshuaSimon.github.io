# Recipe Images

This directory contains images for all recipes in the app.

## Image Requirements

- **Format**: JPG or PNG
- **Recommended size**: 1200x800px (3:2 aspect ratio)
- **File naming**: Use kebab-case matching the recipe slug (e.g., `spaghetti-carbonara.jpg`)
- **File size**: Keep under 500KB for optimal performance

## Adding Images

1. Add your image files to this directory
2. Ensure the filename matches the `image` field in the recipe's frontmatter
3. Optimize images before adding them (use tools like TinyPNG or ImageOptim)
4. Commit and push the images with your recipe updates

## Future Enhancements

- Consider using Astro's Image component for automatic optimization
- Implement responsive images with multiple sizes
- Add WebP format support for better compression