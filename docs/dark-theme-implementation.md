# Dark Theme Implementation

## Overview
Successfully added a configurable dark/light theme mode to the Recipe Collection app with persistent user preference.

## What Was Implemented

### 1. Tailwind Configuration (`tailwind.config.mjs`)
- Enabled class-based dark mode
- Added custom dark theme colors:
  - `dark-bg`: #0f172a (main background)
  - `dark-surface`: #1e293b (card/surface background)
  - `dark-border`: #334155 (borders)
  - `dark-text`: #e2e8f0 (primary text)
  - `dark-text-muted`: #94a3b8 (secondary text)

### 2. Theme Toggle Component (`src/components/ThemeToggle.astro`)
- Sun icon (shown in dark mode to switch to light)
- Moon icon (shown in light mode to switch to dark)
- Accessible button with aria-label
- Client-side script for theme switching
- LocalStorage persistence for user preference

### 3. Theme Initialization
- Inline script in BaseLayout prevents flash of wrong theme
- Runs before page load to apply saved theme immediately
- Dynamic theme-color meta tag for browser chrome

### 4. Updated Components with Dark Mode Styles

#### Header (`src/components/Header.astro`)
- Dark background colors
- Dark text colors
- Theme toggle button in both desktop and mobile nav
- Proper contrast for all interactive elements

#### BaseLayout (`src/layouts/BaseLayout.astro`)
- Theme initialization script in <head>
- Dark mode classes on body and footer
- Updated meta theme-color for dark mode

#### RecipeCard (`src/components/RecipeCard.astro`)
- Dark card backgrounds
- Dark text and borders
- Adjusted shadows for dark mode
- Dark mode time badge styling

#### Pages
- **Homepage** (`src/pages/index.astro`): Full dark mode support
- **Recipes Listing** (`src/pages/recipes/index.astro`): All sections styled

### 5. Global CSS Updates (`src/styles/global.css`)
- Dark mode scrollbar styling
- Dark mode skeleton loader
- Dark mode card shine effect
- Color scheme meta for better browser integration

## Features

✅ **Persistent Theme**: Uses localStorage to remember user preference  
✅ **No Flash**: Theme applied before page renders  
✅ **Accessible**: Proper ARIA labels and keyboard navigation  
✅ **Responsive**: Works on mobile and desktop  
✅ **Smooth Transitions**: 200ms duration for theme changes  
✅ **System-aware**: Respects prefers-color-scheme for browser chrome  

## How to Use

1. Click the sun/moon icon in the header to toggle between light and dark modes
2. Your preference is automatically saved and persisted across sessions
3. The theme applies immediately without page reload

## Color Palette

### Light Mode
- Background: gray-50 (#f9fafb)
- Cards: white (#ffffff)
- Text: gray-900 (#111827)
- Accent: amber-600 (#d97706)

### Dark Mode
- Background: dark-bg (#0f172a)
- Cards: dark-surface (#1e293b)
- Text: dark-text (#e2e8f0)
- Accent: amber-600 (#d97706)

## Browser Support
Works in all modern browsers that support:
- CSS custom properties
- localStorage
- classList API
- Tailwind CSS dark mode

## Next Steps (Optional Enhancements)
- Add system preference detection (auto-switch based on OS setting)
- Add more theme options (e.g., high contrast, sepia)
- Animate theme transitions with view transitions API
- Add theme preference to recipe detail pages
