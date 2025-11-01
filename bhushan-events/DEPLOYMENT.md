# 🚀 Deployment Guide - Bhushan Events

Complete guide for deploying your event management website to production.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- ✅ Project builds successfully (`npm run build`)
- ✅ No linting errors (`npm run lint`)
- ✅ All features tested locally
- ✅ Environment variables configured (if any)
- ✅ Custom domain ready (optional)

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero configuration needed
- Automatic deployments
- Free SSL certificates
- Global CDN
- Serverless functions support

#### Step-by-Step Deployment

**Method A: Using Vercel CLI**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to project:
```bash
cd bhushan-events
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **bhushan-events** (or your choice)
   - Directory? **./** (press Enter)
   - Override settings? **N**

5. Your site is live! 🎉

**Method B: Using Vercel Dashboard**

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Bhushan Events"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)

3. Click "Add New Project"

4. Import your GitHub repository

5. Configure:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: **./bhushan-events**
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

6. Click "Deploy"

7. Wait 2-3 minutes for deployment

8. Your site is live! 🎉

**Custom Domain on Vercel**

1. Go to Project Settings → Domains
2. Add your domain (e.g., `bhushanevents.com`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-60 minutes)
5. SSL certificate auto-generated

---

### Option 2: Netlify

**Step-by-Step:**

1. Build the project:
```bash
cd bhushan-events
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

4. Follow prompts:
   - Create new site? **Y**
   - Team? Select your team
   - Site name? **bhushan-events**
   - Publish directory? **.next**

5. Your site is live!

**Or use Netlify Dashboard:**

1. Push to GitHub (see Vercel Method B, step 1)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

---

### Option 3: AWS Amplify

**Step-by-Step:**

1. Push code to GitHub

2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)

3. Click "New app" → "Host web app"

4. Connect GitHub repository

5. Configure build settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd bhushan-events
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

6. Click "Save and deploy"

---

### Option 4: Docker Container

**Create Dockerfile:**

```dockerfile
# /vercel/sandbox/bhushan-events/Dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**Build and run:**

```bash
cd bhushan-events
docker build -t bhushan-events .
docker run -p 3000:3000 bhushan-events
```

**Deploy to Docker Hub:**

```bash
docker tag bhushan-events yourusername/bhushan-events
docker push yourusername/bhushan-events
```

---

### Option 5: Traditional VPS (DigitalOcean, Linode, etc.)

**Step-by-Step:**

1. SSH into your server:
```bash
ssh user@your-server-ip
```

2. Install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Install PM2 (process manager):
```bash
sudo npm install -g pm2
```

4. Clone your repository:
```bash
git clone YOUR_REPO_URL
cd bhushan-events
```

5. Install dependencies and build:
```bash
npm install
npm run build
```

6. Start with PM2:
```bash
pm2 start npm --name "bhushan-events" -- start
pm2 save
pm2 startup
```

7. Configure Nginx as reverse proxy:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. Enable SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔐 Environment Variables

If you add environment variables later, configure them in your deployment platform:

**Vercel:**
- Project Settings → Environment Variables
- Add variables for Production, Preview, Development

**Netlify:**
- Site Settings → Environment Variables
- Add key-value pairs

**AWS Amplify:**
- App Settings → Environment Variables
- Add variables

**Docker:**
```bash
docker run -p 3000:3000 -e VARIABLE_NAME=value bhushan-events
```

---

## 🌍 Custom Domain Setup

### DNS Configuration

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

### Domain Providers
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare

---

## 📊 Post-Deployment

### Monitoring

**Vercel Analytics:**
- Automatically enabled
- View in Vercel Dashboard

**Google Analytics:**
1. Create GA4 property
2. Add tracking code to `app/layout.tsx`

**Sentry (Error Tracking):**
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### Performance

**Check with:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Expected Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🔄 Continuous Deployment

### Automatic Deployments

**Vercel/Netlify:**
- Push to `main` branch → Auto-deploy to production
- Push to other branches → Auto-deploy to preview URLs

**GitHub Actions:**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: cd bhushan-events && npm ci
      - run: cd bhushan-events && npm run build
      - run: cd bhushan-events && npm run lint
```

---

## 🐛 Troubleshooting

### Build Fails

**Check:**
- Node version (should be 18+)
- All dependencies installed
- No TypeScript errors
- Environment variables set

**Fix:**
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Images Not Loading

**Check:**
- `next.config.ts` has correct `remotePatterns`
- Image URLs are accessible
- HTTPS URLs (not HTTP)

### Slow Performance

**Optimize:**
- Enable image optimization
- Use CDN for static assets
- Enable caching headers
- Minimize JavaScript bundle

---

## 📈 Scaling

### As Your App Grows

**Vercel:**
- Automatically scales
- Upgrade to Pro for more resources

**AWS:**
- Use Auto Scaling Groups
- CloudFront CDN
- RDS for database

**Database:**
- Add PostgreSQL (Supabase, Neon)
- Add Redis for caching
- Use Prisma ORM

---

## 💰 Cost Estimates

### Free Tier Options

**Vercel:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic SSL
- ✅ Perfect for this project

**Netlify:**
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Automatic SSL

**AWS Amplify:**
- ✅ 1000 build minutes/month
- ✅ 15GB storage
- ✅ 5GB bandwidth/month

### Paid Plans (if needed)

**Vercel Pro:** $20/month
- 1TB bandwidth
- Advanced analytics
- Team collaboration

**Netlify Pro:** $19/month
- 400GB bandwidth
- Background functions
- Role-based access

---

## ✅ Deployment Checklist

Before going live:

- [ ] Test all features locally
- [ ] Run production build successfully
- [ ] No console errors
- [ ] All images load correctly
- [ ] Forms work properly
- [ ] Responsive on all devices
- [ ] SEO metadata configured
- [ ] Analytics set up (optional)
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Performance tested
- [ ] Error tracking configured (optional)

---

## 🎉 You're Ready to Deploy!

**Recommended Path:**
1. Use Vercel (easiest, best for Next.js)
2. Push to GitHub
3. Connect to Vercel
4. Deploy in 2 minutes
5. Share your live site!

**Your site will be at:**
- `https://bhushan-events.vercel.app` (default)
- `https://your-custom-domain.com` (if configured)

---

**Need help?** Check the [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

**Good luck with your deployment! 🚀**
