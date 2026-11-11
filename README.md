# Muhammad Saad — Creative Portfolio

> **Social Media & AI Content Creator**  
> *Creating Engaging Content Through Creativity, Technology & AI.*  
> Location: Taxila, Punjab, Pakistan  
> Email: [muhammadsaad.webdev@gmail.com](mailto:muhammadsaad.webdev@gmail.com) • Phone: [+92-3225425081](tel:+923225425081) • LinkedIn: [linkedin.com/in/muhammadsaad023](https://www.linkedin.com/in/muhammadsaad023/)

---

## 🌟 Overview

A world-class, premium, production-ready personal creative portfolio website built specifically for **Muhammad Saad**, tailored for applications in **Social Media Executive**, **Brand & Content Executive**, **AI Content Creator**, and **Digital Marketing** positions.

Unlike generic software engineer templates, this portfolio is built with the aesthetics of an editorial creative studio: deep dark backgrounds, precision typography, vibrant creative accents (`#C7F36B`), video aspect-ratio preservation (16:9 landscape & 9:16 vertical reels), and in-depth case study pages for every campaign.

---

## 🛠 Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom dark agency design tokens
- **Animations & UI**: Lucide Icons, CSS micro-interactions, responsive aspect-ratio wrappers
- **SEO & Performance**: OpenGraph metadata, JSON-LD Schema (Person & CreativeWork), dynamic `sitemap.xml`, and `robots.txt`
- **Asset Optimization**: Next.js Image optimization, lightweight scalable SVGs, responsive video previews

---

## 🎨 Design System

| Element | Color Hex | Role |
| :--- | :--- | :--- |
| **Background** | `#0A0A0A` | Deepest charcoal black |
| **Secondary Background** | `#111111` | Subtle section contrast |
| **Cards & Panels** | `#171717` | Card surface container |
| **Accent** | `#C7F36B` | High-energy creative lime accent |
| **Borders** | `#292929` | Hairline structural borders |
| **Primary Text** | `#F5F5F5` | High-contrast readable typography |
| **Secondary Text** | `#A1A1AA` | Balanced supporting prose |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── documents/
│   │   └── resume.pdf                 # Muhammad Saad's downloadable CV
│   ├── images/
│   │   ├── branding/
│   │   │   └── ms-logo.svg            # Custom MS monogram logo
│   │   ├── profile/
│   │   │   └── saad-avatar.svg        # Text-based visual identity badge
│   │   ├── thumbnails/
│   │   │   ├── dynamic-business-suite.svg
│   │   │   ├── dynamic-erp.svg
│   │   │   ├── dar-electronics.svg
│   │   │   └── directpay.svg
│   │   └── projects/
│   └── videos/
│       ├── dar-electronics/
│       │   └── README.md              # Target: 1bill-raast-guide.mp4
│       ├── dynamic-business-suite/
│       │   └── README.md              # Target: promo.mp4
│       └── dynamic-erp/
│           └── README.md              # Target: whatsapp-ai-features.mp4
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts           # Server-side contact form handler
│   │   ├── work/
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # Individual project detail pages (SSG)
│   │   ├── globals.css                # Tailwind base, dark palette, utilities
│   │   ├── layout.tsx                 # Root layout, OpenGraph, JSON-LD schema
│   │   ├── loading.tsx                # Sleek loading screen
│   │   ├── not-found.tsx              # Custom creative 404 page
│   │   ├── page.tsx                   # Master homepage with all sections
│   │   ├── robots.ts                  # Dynamic robots.txt
│   │   └── sitemap.ts                 # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── About.tsx                  # A Little About Me & engineering advantage
│   │   ├── Contact.tsx                # Inquiries, WhatsApp, mailto fallback
│   │   ├── Experience.tsx             # Dynamic Solutions & Marq Networks roles
│   │   ├── Footer.tsx                 # Clean footer with dynamic year
│   │   ├── Hero.tsx                   # Editorial headline & creative visual collage
│   │   ├── MediaModal.tsx             # Interactive video/graphic preview modal
│   │   ├── Navbar.tsx                 # Sticky navigation, logo, mobile drawer
│   │   ├── Process.tsx                # 5-stage workflow (Research → Delivery)
│   │   ├── ProjectCard.tsx            # Reusable project card
│   │   ├── ProjectGallery.tsx         # Category filterable gallery
│   │   └── Skills.tsx                 # 4 tool categories with badges
│   ├── data/
│   │   └── projects.ts                # Centralized project & biography store
│   └── types/
│       └── project.ts                 # TypeScript interfaces
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Centralized Project Management (`src/data/projects.ts`)

All projects are managed in a single file: `src/data/projects.ts`.

To add a new project, simply append an object to the `projects` array:

```typescript
{
  id: "proj-05",
  slug: "your-project-slug",
  title: "Your Project Title",
  client: "Client Name",
  category: "AI Video Creation", // "AI Video Creation" | "Promotional Videos" | "Social Media Content" | "Graphic Design" | "Digital Marketing"
  secondaryCategory: "Short-Form Reel",
  shortDescription: "A concise 2-sentence summary of the campaign.",
  fullOverview: "Detailed breakdown of the project scope and deliverables.",
  objective: "The marketing challenge and target audience objective.",
  creativeConcept: "The visual idea and narrative direction.",
  responsibilities: [
    "Scriptwriting & storyboarding",
    "AI scene generation in Google Flow",
    "Editing & captioning in CapCut"
  ],
  productionProcess: [
    { step: "01. Ideation", description: "Audience research and hook drafting." },
    { step: "02. AI Generation", description: "Scene rendering and asset synthesis." },
    // ...
  ],
  toolsUsed: ["Google Flow", "Canva", "CapCut"],
  thumbnail: "/images/thumbnails/your-thumbnail.svg",
  mediaType: "video", // "video" | "image"
  aspectRatio: "16:9", // "16:9" | "9:16" | "1:1"
  videoUrl: "/videos/your-project/promo.mp4", // or YouTube / Vimeo URL
  videoDuration: "1:00",
  featured: true,
  date: "2026",
  accentColor: "#C7F36B"
}
```

Next.js automatically compiles a dedicated page at `/work/your-project-slug` and includes it in `sitemap.xml` upon build!

---

## 📋 Missing Assets Checklist

To replace placeholders with your finished media exports:

| Asset | Target Location | Recommended Format & Ratio |
| :--- | :--- | :--- |
| **Dynamic Business Suite Video** | `public/videos/dynamic-business-suite/promo.mp4` | 16:9 Landscape MP4 (1080p, H.264) |
| **Dynamic ERP WhatsApp Reel** | `public/videos/dynamic-erp/whatsapp-ai-features.mp4` | 9:16 Vertical Reel MP4 (1080x1920) |
| **Dar Electronics Video** | `public/videos/dar-electronics/1bill-raast-guide.mp4` | 16:9 Landscape MP4 (1080p) |
| **DirectPay Design Assets** | `public/images/thumbnails/directpay.svg` or `.png` | 1:1 Square PNG/JPG (1080x1080) |
| **Updated Resume PDF** | `public/documents/resume.pdf` | Standard Letter / A4 PDF |

*Note: You can also keep the current high-resolution SVG thumbnails as posters and link external video embeds (YouTube, Vimeo, Google Drive) by updating `videoUrl` in `src/data/projects.ts`!*

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build & Typecheck
```bash
npm run build
```

### 4. Run ESLint Validation
```bash
npm run lint
```

---

## 🚢 Git & GitHub Setup

To push this repository to GitHub:

```bash
# 1. Initialize git in the project root
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "feat: complete creative portfolio for Muhammad Saad"

# 4. Create a repository on GitHub (e.g. muhammad-saad-creative-portfolio)
# and link the remote:
git remote add origin https://github.com/YOUR_USERNAME/muhammad-saad-creative-portfolio.git

# 5. Push to main branch
git branch -M main
git push -u origin main
```

---

## ☁️ Vercel Deployment

### Method A: Deploy via GitHub (Recommended)
1. Push your code to GitHub following the instructions above.
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and select **`muhammad-saad-creative-portfolio`**.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy**. Your portfolio will be live on a global CDN in under 60 seconds with SSL enabled!

### Method B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally or run with npx
npx vercel

# Follow the interactive prompts to link and deploy to production:
npx vercel --prod
```

---

## 👤 Author Information

- **Name**: Muhammad Saad
- **Role**: Social Media & AI Content Creator
- **Email**: [muhammadsaad.webdev@gmail.com](mailto:muhammadsaad.webdev@gmail.com)
- **WhatsApp / Phone**: [+92-3225425081](https://wa.me/923225425081)
- **LinkedIn**: [https://www.linkedin.com/in/muhammadsaad023/](https://www.linkedin.com/in/muhammadsaad023/)
- **Education**: BS Software Engineering, COMSATS University Islamabad
