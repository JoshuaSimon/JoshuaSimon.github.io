# Dark Mode Troubleshooting

## Current Status
- ✅ Tailwind v4 configured with `@custom-variant dark`
- ✅ Dark mode CSS rules generated (22 rules found)
- ✅ HTML has `dark:` classes on elements  
- ✅ JavaScript toggle script in place
- ✅ ThemeToggle button rendered
- ❓ Button click not working

## Manual Test in Browser Console

Open DevTools (F12) and run:

```javascript
// Test 1: Check if toggle button exists
document.querySelectorAll('.theme-toggle')
// Should return NodeList with 2 elements

// Test 2: Manually add dark class
document.documentElement.classList.add('dark')
// Page should turn dark

// Test 3: Remove dark class  
document.documentElement.classList.remove('dark')
// Page should turn light

// Test 4: Check for JavaScript errors
// Look in Console tab for any red error messages
```

## If Manual Toggle Works

If adding/removing the `.dark` class manually works, then the CSS is fine and it's a JavaScript event listener issue.

## Quick Fix to Try

Add this at the very end of the `<body>` tag in `src/layouts/BaseLayout.astro`:

```html
<script>
console.log('Theme script loading...');
console.log('Found buttons:', document.querySelectorAll('.theme-toggle').length);
</script>
```

Then check the console to see if it finds the buttons.

## Files to Check

1. `dist/index.html` - Verify toggle script is present
2. Browser Console - Check for errors
3. Elements inspector - Verify `.dark` class toggles on `<html>`
