# LaoTrip.la Deployment Guide

## Quick Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Domain name (optional): laotrip.la

---

## Step 1: Push to GitHub

### Initialize Git Repository
```powershell
cd C:\Users\Undead\Desktop\laotrip\laotrip-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit with message
git commit -m "Complete LaoTrip.la website with full SEO optimization"

# Create main branch
git branch -M main
```

### Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `laotrip-website`
3. Description: "LaoTrip.la - Eco-friendly travel guide to Laos"
4. Choose: Public
5. Click "Create repository"

### Push to GitHub
```powershell
# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/laotrip-website.git

# Push to GitHub
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Connect Repository
1. Visit https://vercel.com/login
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your `laotrip-website` repository

### Configure Project
```yaml
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next (auto-detected)
Install Command: npm install
```

### Environment Variables (Optional)
Add in Vercel dashboard:
```env
NEXT_PUBLIC_GA_ID=G-88R3265CNX
NEXT_PUBLIC_SITE_URL=https://laotrip.la
```

### Deploy
Click "Deploy" button
- Build time: ~2-5 minutes
- Automatic deployment URL: `laotrip-website.vercel.app`

---

## Step 3: Custom Domain Setup

### Add Domain to Vercel
1. Go to Project Settings → Domains
2. Add domain: `laotrip.la`
3. Also add: `www.laotrip.la` (optional)

### Update DNS Records
Go to your domain registrar (Namecheap, GoDaddy, etc.):

#### For Root Domain (laotrip.la)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

#### For WWW Subdomain (www.laotrip.la)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Verify SSL
- Vercel automatically provides SSL certificate
- Wait 5-10 minutes for DNS propagation
- Check: https://laotrip.la (should show green lock)

---

## Step 4: Post-Deployment Verification

### Test URLs
- [x] Homepage: https://laotrip.la
- [x] Destinations: https://laotrip.la/destinations
- [x] Culture: https://laotrip.la/culture
- [x] Food: https://laotrip.la/food
- [x] Sitemap: https://laotrip.la/sitemap.xml
- [x] Robots: https://laotrip.la/robots.txt

### Check Google Analytics
1. Visit https://analytics.google.com
2. Navigate to your property (G-88R3265CNX)
3. Go to Realtime → Overview
4. Visit your site to generate test traffic
5. Verify pageviews appear

---

## Step 5: Google Search Console

### Add Property
1. Visit https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix": https://laotrip.la
4. Verify ownership (automatic if using Google Analytics)

### Submit Sitemap
1. Go to "Sitemaps" section
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Status should show "Success" within 24 hours

### Request Indexing
1. Go to "URL Inspection"
2. Enter: https://laotrip.la
3. Click "Request Indexing"
4. Repeat for key pages (destinations, culture, food)

---

## Step 6: Continuous Deployment

### Automatic Updates
Every time you push to GitHub main branch:
```powershell
git add .
git commit -m "Update content"
git push origin main
```
Vercel automatically rebuilds and deploys (2-5 minutes)

### Preview Deployments
- Every branch gets preview URL
- Test changes before merging to main
- URL format: `laotrip-website-git-branch-name.vercel.app`

---

## Troubleshooting

### Build Fails
```powershell
# Test locally first
npm run build

# Check for errors
npm run lint
```

### Images Not Loading
- Verify `next.config.ts` has correct domains
- Check image URLs in `destinations.json`
- Clear browser cache

### DNS Not Propagating
- Wait 24-48 hours for full DNS propagation
- Use https://dnschecker.org to check status
- Flush local DNS: `ipconfig /flushdns` (Windows)

### Google Analytics Not Tracking
- Check GA tracking ID: G-88R3265CNX
- Verify script in browser DevTools → Network tab
- Check ad blockers aren't blocking GA

---

## Maintenance

### Weekly Tasks
- [ ] Monitor Google Analytics traffic
- [ ] Check Google Search Console for errors
- [ ] Review top-performing keywords
- [ ] Update blog with new content

### Monthly Tasks
- [ ] Update destination images if needed
- [ ] Add new destinations to `destinations.json`
- [ ] Review and improve meta descriptions
- [ ] Check broken links
- [ ] Update sitemap if structure changes

### Performance Monitoring
```powershell
# Test with Lighthouse
npm install -g lighthouse
lighthouse https://laotrip.la --view
```

Target scores:
- Performance: >90
- Accessibility: >90
- Best Practices: 100
- SEO: 100

---

## Useful Commands

### Development
```powershell
npm run dev          # Start dev server (localhost:3001)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check for errors
```

### Git Workflow
```powershell
git status           # Check changed files
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push             # Push to GitHub → triggers deployment
git pull             # Pull latest changes
```

---

## Next Steps

### Content Expansion
1. **Blog Posts**: Create 10-20 SEO-optimized articles
   - "Top 10 Waterfalls in Laos"
   - "Luang Prabang Travel Guide"
   - "Best Time to Visit Laos"
   - "Laos Visa Requirements"

2. **More Destinations**: Add to `destinations.json`
   - Nong Khiaw
   - Plain of Jars
   - Bokeo Nature Reserve
   - Bolaven Plateau

3. **Features**
   - User reviews/ratings
   - Booking integration
   - Travel itinerary planner
   - Multi-language support (Lao, French)

### SEO Improvements
- Build backlinks from travel blogs
- Guest posting on tourism websites
- Submit to travel directories
- Social media promotion (Instagram, Facebook, Pinterest)

---

## Support

### Documentation
- SEO Guide: `SEO_IMPLEMENTATION_GUIDE.md`
- Project Status: `PROJECT_STATUS.md`
- Color Guide: `COLOR_AND_IMAGE_UPDATES.md`

### Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Google Analytics Help](https://support.google.com/analytics)

---

**Deployment Status**: Ready for Production ✅  
**Last Updated**: October 17, 2025
