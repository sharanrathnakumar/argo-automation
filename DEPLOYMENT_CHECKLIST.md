# Deployment Checklist for Argo Automation

Use this checklist before deploying to production.

## 📋 Pre-Deployment Checklist

### ✅ Configuration

- [ ] Set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`
- [ ] Test contact form locally
- [ ] Update company email in `components/Footer.tsx`
- [ ] Update phone number in `components/Footer.tsx`
- [ ] Update address in `components/Footer.tsx`
- [ ] Update social media links in `components/Footer.tsx`
- [ ] Verify company name appears correctly on all pages

### ✅ Content Review

- [ ] Review Home page content
- [ ] Review About page content
- [ ] Review Services page - verify all services are accurate
- [ ] Review Contact page - verify contact information
- [ ] Check for any placeholder text
- [ ] Verify all headings and descriptions

### ✅ SEO & Metadata

- [ ] Update `sitemap.xml` with your domain
- [ ] Update `robots.txt` with your domain
- [ ] Verify metadata in `components/SEO.tsx`
- [ ] Check Open Graph image (`public/og-image.jpg`)
- [ ] Verify structured data in `components/StructuredData.tsx`

### ✅ Assets & Media

- [ ] Replace favicon (`public/favicon.svg`) with custom logo
- [ ] Update `public/apple-touch-icon.png`
- [ ] Update `public/og-image.jpg` (1200x630px)
- [ ] Verify all images load correctly

### ✅ Testing

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile devices
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test mobile menu
- [ ] Verify responsive design at 375px, 768px, 1440px
- [ ] Check for console errors
- [ ] Test keyboard navigation
- [ ] Verify smooth scrolling

### ✅ Build & Performance

- [ ] Run `npm run build` successfully
- [ ] No build errors
- [ ] No lint errors
- [ ] Bundle size is acceptable
- [ ] All pages pre-render correctly

### ✅ Security

- [ ] `.env.local` is in `.gitignore`
- [ ] No sensitive data committed to git
- [ ] Input validation working on forms
- [ ] Content Security Policy configured

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)

1. **Prepare Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - [ ] Go to https://vercel.com
   - [ ] Sign in with GitHub
   - [ ] Click "New Project"
   - [ ] Import your repository
   - [ ] Configure:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: (leave default)
     - Output Directory: (leave default)
   - [ ] Add Environment Variable:
     - Name: `NEXT_PUBLIC_FORMSPREE_ID`
     - Value: Your Formspree form ID
   - [ ] Click "Deploy"

3. **Verify Deployment**
   - [ ] Site deploys successfully
   - [ ] All pages load correctly
   - [ ] Contact form works
   - [ ] No 404 errors
   - [ ] Images load properly

### Option 2: Manual/Other Hosting

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Output Directory**
   - Built files are in `out/` directory
   - Upload entire `out/` folder to your hosting

3. **Configure Server**
   - [ ] Set up HTTPS
   - [ ] Configure redirects (if needed)
   - [ ] Set environment variables on server

## 📊 Post-Deployment Tasks

### Immediate

- [ ] Test live site on multiple devices
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (optional)
- [ ] Test contact form on live site
- [ ] Verify email notifications work

### SEO Setup

- [ ] Add site to Google Search Console
- [ ] Add site to Bing Webmaster Tools
- [ ] Submit sitemap URL
- [ ] Request indexing for main pages
- [ ] Set up Google Analytics 4 (optional)
- [ ] Configure analytics in Vercel (if using)

### Monitoring

- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Monitor Formspree submissions
- [ ] Check Vercel analytics
- [ ] Review Core Web Vitals

### Optional Enhancements

- [ ] Add blog/news section
- [ ] Implement dark/light mode toggle
- [ ] Add more animations
- [ ] Create additional service pages
- [ ] Add client testimonials
- [ ] Add portfolio/case studies section
- [ ] Implement newsletter signup
- [ ] Add live chat widget

## 🔧 Troubleshooting

### Common Issues

**Build Fails**
- Check for TypeScript errors: `npm run build`
- Verify all dependencies installed: `npm install`
- Check Node.js version (requires 18+)

**Contact Form Not Working**
- Verify `NEXT_PUBLIC_FORMSPREE_ID` is set
- Check Formspree dashboard for submissions
- Ensure environment variable name starts with `NEXT_PUBLIC_`

**Images Not Loading**
- Verify images are in `public/` directory
- Check file paths in components
- Ensure images deployed to hosting

**404 Errors on Vercel**
- Check deployment logs
- Verify all pages built successfully
- Check `next.config.js` configuration

## 📱 Social Media Setup

After deployment, share your site:

- [ ] Update LinkedIn company page
- [ ] Update Twitter/X profile
- [ ] Update Facebook page
- [ ] Add to Google My Business
- [ ] Update business directories

## 🎯 Performance Goals

Target metrics:
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 100
- [ ] Lighthouse Best Practices: 100
- [ ] Lighthouse SEO: 100
- [ ] First Contentful Paint: < 1.5s
- [ ] Time to Interactive: < 3s

## ✅ Final Verification

Before announcing your website:

- [ ] All pages accessible
- [ ] All links work
- [ ] Contact form submits successfully
- [ ] Mobile experience is smooth
- [ ] No broken images
- [ ] No console errors
- [ ] SEO tags visible in page source
- [ ] Social media preview looks good
- [ ] SSL certificate active (HTTPS)

## 🎉 Launch!

Once all items are checked:

1. Announce on social media
2. Send email to clients/contacts
3. Update email signatures
4. Update business cards
5. Monitor initial traffic and feedback

---

**Deployment Date:** _________________

**Deployed By:** _________________

**Domain:** _________________

**Status:** ⬜ Ready | ⬜ In Progress | ⬜ Complete

---

Good luck with your deployment! 🚀
