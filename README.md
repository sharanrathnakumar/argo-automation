# Argo Automation - Professional Business Website

A modern, professional automation startup website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Meta tags, Open Graph, structured data (JSON-LD), sitemap
- **Performance**: Static export, optimized images, lazy loading
- **Accessibility**: WCAG compliant, semantic HTML, keyboard navigation
- **Animations**: Smooth Framer Motion animations
- **Dark Theme**: Professional dark blue and silver color scheme
- **Contact Form**: Integrated with Formspree, client-side validation
- **Security**: Input sanitization, Content Security Policy

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🌐 Pages

- **Home** (`/`) - Hero, services overview, about preview, CTA
- **About** (`/about`) - Mission, vision, values, timeline, team
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form and information

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

To get a Formspree ID:
1. Visit [formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy the form ID
5. Add it to your `.env.local` file

### Customization

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Fonts**: Modify `app/layout.tsx` to change fonts
- **Content**: Update text in page components
- **SEO**: Edit metadata in `components/SEO.tsx`

## 📁 Project Structure

```
argo-automation/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── SEO.tsx
│   └── StructuredData.tsx
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.svg
│   └── og-image.jpg
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Manual Deployment

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## 🎨 Design Features

- **Color Scheme**: Dark blue (#0369a1) and silver theme
- **Typography**: Inter font family
- **Animations**: Framer Motion for smooth interactions
- **Icons**: SVG icons for scalability
- **Layout**: Consistent max-width container (max-w-7xl)

## 🔒 Security

- Input sanitization on all forms
- Content Security Policy headers
- Environment variable protection
- HTTPS recommended for production

## 📊 Performance

- Static export for fast loading
- Lazy-loaded components
- Optimized images
- Minimal JavaScript bundle
- Target: 90+ Lighthouse score

## 🧪 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📝 License

This project is created for Argo Automation. All rights reserved.

## 🤝 Support

For support, email info@argoautomation.com or visit our contact page.

## 🙏 Acknowledgments

- Next.js Team
- Tailwind CSS
- Framer Motion
- Formspree

---

**Built with ❤️ by Argo Automation**
