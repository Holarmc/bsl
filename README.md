# BiproSyncLogic (BSL) - Next.js Website

A modern, responsive website for BiproSyncLogic built with Next.js 15, React 19, and Tailwind CSS.

## Overview

This is a complete Next.js conversion of the original HTML website, maintaining all content and design while introducing modern web development practices.

**Key Features:**
- ✨ Server-side rendering with React Server Components
- 📱 Mobile-responsive design with Tailwind CSS
- ⚡ Static page generation for optimal performance
- 🎨 Material Design 3 color system
- 🔍 SEO optimized with metadata per page
- ♿ Accessible component design
- 📦 TypeScript support
- 🚀 Production-ready and Vercel-deployable

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org)
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com)
- **Icons**: [Material Symbols](https://fonts.google.com/icons)
- **Fonts**: Manrope, Inter (Google Fonts)
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure

```
app/
├── layout.tsx              # Root layout with Header & Footer
├── globals.css             # Global Tailwind styles
├── page.tsx                # Homepage (/)
├── about-us/page.tsx       # About Us page
├── services/page.tsx       # Services page
├── training/page.tsx       # Training & Programs page
├── contacts/page.tsx       # Contact Us page
└── programs/
    └── oracle-dba/page.tsx # Oracle DBA Training page

components/
├── Header.tsx              # Navigation header with mobile menu
└── Footer.tsx              # Footer with company info & links
```

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Holarmc/bsl.git
cd bsl
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Main landing page with services overview |
| About Us | `/about-us` | Company mission, vision, and values |
| Services | `/services` | Detailed service offerings |
| Training | `/training` | Professional training programs |
| Contact | `/contacts` | Contact form and business information |
| Oracle DBA | `/programs/oracle-dba` | Specific training program details |

## Styling & Customization

### Theme Colors
The project uses a Material Design 3 color system with 64 custom color tokens. Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  'primary': '#00658d',
  'secondary': '#366b00',
  'error': '#ba1a1a',
  // ... more colors
}
```

### Typography
Fonts are configured in `tailwind.config.ts` and imported in `app/globals.css`:
- **Headings** (h1, h2, h3): Manrope
- **Body text**: Inter
- **Icons**: Material Symbols Outlined

### Spacing
Custom spacing scale available as Tailwind utilities:
- `stack-sm` (8px)
- `stack-md` (16px)
- `stack-lg` (32px)
- `section-padding` (80px)
- `gutter` (24px)

## Mobile Menu

The Header component includes a fully functional mobile menu using React state:
- Hamburger icon triggers slide-out navigation
- Backdrop overlay with blur effect
- Smooth animations and transitions
- Automatic scroll lock when menu is open

## Components

### Header
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Links to all main pages
- Get Started CTA button

### Footer
- Four-column layout (desktop)
- Company information
- Service links
- Contact details
- Social media links

## Deployment

### Vercel (Recommended)
This project is optimized for Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect it's a Next.js project
4. Configure environment variables if needed
5. Deploy with one click

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Railway
- Render

## Environment Variables

See `.env.example` for template. Create `.env.local` for local development:

```bash
cp .env.example .env.local
```

Common variables:
- `NEXT_PUBLIC_API_URL` - API endpoint
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `CONTACT_EMAIL` - Email for contact form submissions

## Performance

The website is optimized for performance:
- ✅ Static page pre-rendering (no runtime rendering needed)
- ✅ Optimized images with Next.js `Image` component
- ✅ CSS is compiled and minified by Tailwind
- ✅ JavaScript code splitting per page
- ✅ Fast initial page load (~100-108 kB)
- ✅ No JavaScript runtime overhead for static content

## SEO

Each page includes:
- Proper metadata (title, description)
- OpenGraph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Alt text on images
- Structured data ready for implementation

## Accessibility

The site follows WCAG guidelines:
- Semantic HTML elements
- ARIA labels on interactive elements
- Proper color contrast ratios
- Keyboard navigation support
- Focus indicators on buttons and links
- Alternative text for images

## Forms & Dynamic Content

Currently, forms are client-side ready. For production:
- Implement backend API for form submissions
- Add email notifications
- Set up database for storing inquiries
- Add validation and error handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

[Add your license here]

## Support

For support, issues, or questions:
- 📧 Email: info@bsl.com
- 📱 Phone: +234 905 878 8143
- 📍 Address: 11 Coachwood Street, Northern Foreshore Estate, Chevron

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Conversion Details](./CONVERSION_SUMMARY.md)

---

Built with ❤️ using Next.js
