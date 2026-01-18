# Recipe Images

This directory contains images for all recipes in the app.

## Image Requirements

- **Format**: JPG or PNG
- **Recommended size**: 1200x800px (3:2 aspect ratio)
- **File naming**: Use kebab-case matching the recipe slug (e.g., `spaghetti-carbonara.jpg`)
- **File size**: Keep under 500KB for optimal performance

## Current Recipe Images Needed

The following recipe images are referenced but need to be added:

1. `carbonara.jpg` - Spaghetti Carbonara
2. `margherita-pizza.jpg` - Margherita Pizza
3. `chicken-tikka-masala.jpg` - Chicken Tikka Masala
4. `caesar-salad.jpg` - Classic Caesar Salad
5. `chocolate-chip-cookies.jpg` - Chocolate Chip Cookies
6. `thai-green-curry.jpg` - Thai Green Curry

## Placeholder Images

For development and testing, you can use placeholder images from services like:
- [Unsplash](https://unsplash.com/s/photos/food)
- [Pexels](https://pexels.com/search/food/)
- [Placeholder.com](https://placeholder.com/) - e.g., `https://via.placeholder.com/1200x800/e0e0e0/666?text=Recipe+Image`

## Adding Images

1. Add your image files to this directory
2. Ensure the filename matches the `image` field in the recipe's frontmatter
3. Optimize images before adding them (use tools like TinyPNG or ImageOptim)
4. Commit and push the images with your recipe updates

## Image Sources

When using images, ensure you have the proper rights or use royalty-free images from:
- Your own photography
- Stock photo sites with appropriate licenses
- Creative Commons licensed images with attribution

## Future Enhancements

- Consider using Astro's Image component for automatic optimization
- Implement responsive images with multiple sizes
- Add WebP format support for better compression