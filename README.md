# MARS Academy Website

A modern, responsive website for MARS Academy - Kids Robotics and Coding Academy.

Built with **Tailwind CSS** and **AOS (Animate On Scroll)** library for smooth, professional animations.

## Tech Stack

- **HTML5** - Semantic markup with SEO optimization
- **Tailwind CSS** (via CDN) - Utility-first CSS framework
- **AOS Library** - Scroll animations
- **Vanilla JavaScript** - Counter animations, mobile menu, form handling
- **Web3Forms** - Contact form submissions (requires API key)

## Project Structure

```
robomars.us/
├── index.html          # Home page with hero, services, stats, events, testimonials
├── partners.html       # Partners page with 19 organizations and partnership types
├── contact.html        # Contact page with side-by-side layout
├── css/
│   └── custom.css      # Custom styles and Tailwind overrides
├── js/
│   └── main.js         # JavaScript for animations and interactions
└── assets/
    ├── logo.png        # ✅ Already uploaded
    └── mascot/         # ✅ Already uploaded
        ├── marsy-waving.png
        ├── marsy-excited.png
        ├── marsy-thinking.png
        ├── marsy-superhero.png
        └── marsy-laptop.png
```

## Features Implemented

### Home Page (index.html)
- **Hero section** with gradient background and mascot animation
- **Services section** with 4 service cards (AI & Robotics, Coding Classes, Personalized Learning, Project-Based Learning)
- **Animated stats counter** (340+ Students, 500+ Projects, 16+ Partners) - counts from 0 when scrolled into view
- **Upcoming events section** with Free Weekly Support Call
- **Testimonials** from 3 students/parents with 5-star ratings
- **Why Choose Us** section with 3 key benefits
- **Final CTA section** with Book Free Trial button
- **Footer** with Khan Marketing Group credit link

### Partners Page (partners.html)
- **19 partner organizations** displayed in responsive grid with icons
- **Partnership Types section** (Robotics Demo Day, 8-Week Skill Builder, Round-the-Year Training)
- **Partnership inquiry form** with dropdown for partnership types
- Web3Forms integration

### Contact Page (contact.html)
- **Side-by-side layout** - Contact info on left, form on right
- **Contact details** with phone, email, social links
- **Marsy mascot** with floating animation
- **Contact form** with First Name, Last Name, Phone, Email, Message fields
- Web3Forms integration

### Design & Animations
- **Color palette**: Primary Gold (#F5A623), Dark Charcoal (#2D2D2D), White
- **Fully responsive** design (mobile-first approach)
- **AOS scroll animations** - fade-up, fade-right, fade-left, zoom-in
- **Counter animation** that triggers on scroll
- **Mascot floating animation** (3s ease-in-out infinite)
- **Smooth transitions** throughout (0.3s ease)
- **Card hover effects** with lift and shadow
- **Button hover effects** with scale and shadow
- **Sticky navigation** with blur backdrop
- **Mobile-friendly hamburger menu**

### SEO Optimization
- Comprehensive meta tags (description, keywords, OG tags)
- Semantic HTML structure
- Optimized page titles
- Alt text for all images
- Clean URL structure

## Next Steps

### 1. Configure Web3Forms ⚠️
Replace `YOUR_WEB3FORMS_ACCESS_KEY` in both `partners.html` and `contact.html` with your actual Web3Forms access key.

To get a free Web3Forms access key:
1. Visit https://web3forms.com
2. Sign up for free
3. Get your access key
4. Find and replace `YOUR_WEB3FORMS_ACCESS_KEY` in:
   - `partners.html` (line 359)
   - `contact.html` (line 146)

### 2. Update Social Media Links
Replace the `#` placeholder links in the footer with your actual social media URLs:
- Instagram
- Facebook
- YouTube

## Local Development

The website is currently running at:
**http://localhost:8000**

Open this URL in your browser to preview the site.

To stop the server:
```bash
# Press Ctrl+C in the terminal, or:
lsof -i :8000  # Find the process
kill -9 <PID>  # Kill the process
```

To restart the server later:
```bash
cd /Users/khan/Projects/RoboMars-Website
python3 -m http.server 8000
```

## Deployment

This is a static website and can be deployed to:
- **Netlify** (drag & drop)
- **Vercel** (GitHub integration)
- **GitHub Pages** (free hosting)
- **Cloudflare Pages**
- Any static hosting service

### Deployment Checklist
- [ ] Add Web3Forms API key
- [ ] Update social media links
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Verify all images load
- [ ] Check page load speed

## Color Palette

- **Primary**: #F5A623 (Gold/Yellow)
- **Primary Dark**: #e89610
- **Charcoal**: #2D2D2D (Dark Gray)
- **Text Dark**: #2b2b2b
- **Text Light**: #666
- **White**: #ffffff
- **Background Light**: #f8f9fa

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- CDN-hosted Tailwind CSS and AOS library
- Lazy loading for images (with IntersectionObserver)
- Minimal JavaScript footprint
- Optimized animations (GPU-accelerated)
- No external dependencies besides Tailwind and AOS

## Credits

- **Design & Development**: Rebuilt from scratch with Tailwind CSS + AOS
- **Website by**: [Khan Marketing Group](https://khanmarketinggroup.com)
- **Forms**: Web3Forms (free service)
- **Animations**: AOS Library

## Notes

- All content pulled from the existing robomars.us website
- Forms use Web3Forms for submission (requires API key)
- No backend required - fully static
- Optimized for performance and SEO
- Mobile-first responsive design

---

Built with ❤️ for MARS Academy
