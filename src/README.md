# Personal Website - HTML/CSS/JS Version

A modern, responsive personal website built with pure HTML, CSS, and JavaScript. No frameworks or build tools required!

## Features

- **About Section**: Personal bio and introduction
- **Portfolio**: Links to YouTube videos and slide presentations
- **Experience**: Work experience and volunteering activities
- **Elevator Pitch**: Video space for personal pitch
- **Responsive Design**: Works on all devices
- **Modern UI**: Clean and professional design
- **Interactive Elements**: Smooth scrolling, mobile menu, video player
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## Files Included

- `index.html` - Main HTML file with all content
- `styles.css` - Complete CSS styling (converted from Tailwind)
- `script.js` - JavaScript functionality
- `README.md` - This instruction file

## How to Use

### Option 1: Direct File Opening
1. **Download all files** to a folder on your computer
2. **Double-click `index.html`** to open in your web browser
3. That's it! The website will load and work completely offline

### Option 2: Local Web Server (Recommended)
For better performance and to avoid any browser security restrictions:

1. **Using Python** (if installed):
   ```bash
   # Navigate to your project folder
   cd path/to/your/project
   
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then open `http://localhost:8000` in your browser

2. **Using PHP** (if installed):
   ```bash
   cd path/to/your/project
   php -S localhost:8000
   ```

3. **Using Live Server Extension** (VS Code):
   - Install "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

### Option 3: Web Hosting
Upload all files to any web hosting service:
- Netlify (drag and drop the folder)
- Vercel
- GitHub Pages
- Any shared hosting provider

## Customization

### Personal Information
Edit the `index.html` file to update:
- Your name and bio
- Work experience details
- Portfolio links
- Contact information
- Social media links

### Styling
Modify `styles.css` to change:
- Colors and fonts
- Layout and spacing
- Animations and effects
- Responsive behavior

### Functionality
Update `script.js` to add:
- Contact form handling
- Analytics tracking
- Additional interactive features
- Custom animations

## Key Features Explained

### Responsive Navigation
- Desktop: Horizontal menu bar
- Mobile: Hamburger menu with overlay

### Video Player
- Custom video player interface
- Play/pause functionality
- Progress bar animation
- Mute/unmute controls

### Smooth Scrolling
- Navigation links smoothly scroll to sections
- Accounts for fixed header offset

### Interactive Elements
- Hover effects on cards and buttons
- Scroll animations for sections
- Mobile-friendly touch interactions

## Browser Support

Works in all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## File Structure
```
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Instructions (this file)
```

## External Dependencies

The website uses only one external library:
- **Lucide Icons** (loaded from CDN for icons)

All other functionality is built with pure HTML, CSS, and JavaScript.

## Performance Features

- Lazy loading for images
- Optimized CSS with mobile-first approach
- Minimal JavaScript for fast loading
- Error handling for broken images
- Smooth animations with CSS transitions

## Customization Tips

1. **Replace Images**: Update the `src` attributes in `index.html` with your own images
2. **Update Links**: Change portfolio and social media URLs
3. **Modify Colors**: Edit the color variables in `styles.css`
4. **Add Sections**: Copy existing section structure and modify content
5. **Update Content**: Replace all placeholder text with your information

## Troubleshooting

**Images not loading?**
- Check image URLs are correct
- Ensure image files are in the same folder if using local images

**Styles not working?**
- Make sure `styles.css` is in the same folder as `index.html`
- Check for typos in file names

**JavaScript not working?**
- Ensure `script.js` is in the same folder as `index.html`
- Check browser console (F12) for errors

## License

Free to use and modify for personal and commercial projects.

## Support

For questions or issues:
1. Check this README file
2. Ensure all files are in the same folder
3. Try opening in a different browser
4. Use a local web server instead of direct file opening

---

**Happy coding!** 🚀