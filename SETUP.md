# Argo Automation - Setup Guide

## 🚀 Quick Start

Follow these steps to get the website running locally:

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Formspree form ID:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_actual_form_id_here
```

**How to get a Formspree ID:**
1. Visit https://formspree.io/
2. Sign up for a free account
3. Click "New Form"
4. Name it "Contact Form" or similar
5. Copy the form ID (looks like: `xyzabc123`)
6. Paste it into your `.env.local` file

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The website should be running!

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out/` directory.

## 📝 Customization Guide

### Change Company Name & Branding

1. **Update text content:**
   - `app/page.tsx` - Home page content
   - `components/Navbar.tsx` - Logo and navigation
   - `components/Footer.tsx` - Footer information
   - `app/layout.tsx` - Site title in metadata

2. **Update contact information:**
   - `components/Footer.tsx` - Email, phone, address
   - `app/contact/page.tsx` - Contact details

### Modify Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Change these hex values to your brand colors
    500: '#0ea5e9',  // Main primary color
    600: '#0284c7',  // Darker primary
    700: '#0369a1',  // Even darker
  },
}
```

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

Browse fonts at: https://fonts.google.com/

### Update Services

Edit `app/services/page.tsx` - Modify the `services` array:

```typescript
const services = [
  {
    id: 'your-service',
    title: 'Your Service Name',
    description: 'Your service description',
    features: [
      'Feature 1',
      'Feature 2',
      // Add more features
    ],
  },
]
```

### Modify SEO Settings

Edit `components/SEO.tsx` to update default metadata:

```typescript
export function generateMetadata({
  title = 'Your Company',
  description = 'Your description',
  // ... other fields
})
```

## 🌐 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. Visit https://vercel.com and sign in with GitHub

3. Click "New Project"

4. Import your GitHub repository

5. Configure environment variables:
   - Add `NEXT_PUBLIC_FORMSPREE_ID` with your Formspree form ID

6. Click "Deploy"

Your site will be live in minutes at `https://your-project.vercel.app`

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

## 🔧 Troubleshooting

### Build Errors

**Issue:** TypeScript errors
**Solution:** Run `npm run build` locally first to catch errors

**Issue:** Missing environment variables
**Solution:** Ensure `.env.local` exists with `NEXT_PUBLIC_FORMSPREE_ID`

### Contact Form Not Working

**Issue:** Form submission fails
**Solution:** 
1. Verify your Formspree ID is correct in `.env.local`
2. Check that the ID starts with `NEXT_PUBLIC_`
3. Restart the dev server after changing `.env.local`

### Styling Issues

**Issue:** Tailwind classes not working
**Solution:** Make sure you ran `npm install` and the dev server is running

## 📱 Testing

### Test Responsiveness

1. Open DevTools (F12)
2. Click the device toolbar icon
3. Test on different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

### Test Forms

1. Fill out the contact form with test data
2. Submit the form
3. Check Formspree dashboard for submission
4. Verify email notification (if configured)

### Test Navigation

- Click all navigation links
- Verify smooth scrolling (home page sections)
- Test mobile menu on small screens

## 🎨 Assets

### Adding Images

1. Place images in `public/` directory
2. Reference in components:
   ```tsx
   <img src="/your-image.jpg" alt="Description" />
   ```

### Updating Logo

Replace the SVG content in:
- `public/favicon.svg`
- `public/apple-touch-icon.png`
- Update logo in `components/Navbar.tsx`

### Social Media Image

Replace `public/og-image.jpg` with your custom 1200x630px image

## 📊 Analytics (Optional)

### Google Analytics

1. Get your GA4 tracking ID
2. Add to `app/layout.tsx`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🔐 Security Checklist

- [ ] Update `.env.local` with real values (never commit this file)
- [ ] Replace placeholder contact information
- [ ] Test contact form spam protection
- [ ] Review Content Security Policy in `app/layout.tsx`
- [ ] Enable HTTPS in production (automatic on Vercel)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Formspree Docs](https://help.formspree.io/)

## 💬 Support

For issues or questions:
- Check the main README.md
- Review Next.js documentation
- Contact: info@argoautomation.com

---

**Happy Building! 🎉**
