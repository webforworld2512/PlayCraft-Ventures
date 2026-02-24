# PlayCraft Ventures - Project Documentation

## Original Problem Statement
Run the PlayCraft Ventures React app from GitHub repository: https://github.com/webforworld2512/PlayCraft-Ventures

## Project Overview
A Vite + React landing page for PlayCraft Ventures - an early-stage VC fund focused on gaming and interactive entertainment investments.

## Tech Stack
- **Frontend**: React 18, Vite 6, TailwindCSS 3.4
- **UI Components**: Radix UI, shadcn/ui components
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## What's Been Implemented (Feb 24, 2026)
- [x] Cloned repository from GitHub
- [x] Fixed import path case sensitivity (base44client -> base44Client)
- [x] Simplified AuthContext to work standalone without Base44 backend
- [x] Updated Vite config to remove Base44 plugin dependency
- [x] Configured nginx proxy to route port 80 to Vite dev server on port 3000
- [x] Set up supervisor configuration for frontend process
- [x] App running successfully on localhost

## Key Features
1. **Hero Section**: Full-screen background with gaming imagery, headline, and CTAs
2. **Vision Section**: Company mission with feature cards (Focused Investment, Founder-First, Strategic Growth)
3. **Strengths Section**: 4 key differentiators with images
4. **Invested Companies**: Logo showcase (Tag Games, Rastar, 6waves, Ledo Interactive)
5. **News Section**: Latest insights and updates with article cards
6. **Contact Section**: Funding application form with criteria list
7. **Footer**: Company info, quick links, social media

## Architecture
```
/app/
├── src/
│   ├── components/
│   │   ├── home/           # Page sections (Hero, Vision, Strengths, etc.)
│   │   └── ui/             # shadcn/ui components
│   ├── lib/                # Auth, utilities, router
│   ├── pages/              # Home page
│   └── api/                # Base44 client (simplified)
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # TailwindCSS theme
└── package.json            # Dependencies
```

## Current Status
- ✅ App running locally on port 3000
- ✅ Nginx proxying port 80 to 3000
- ⚠️ External preview URL showing "Preview Unavailable" (platform gateway issue)

## Backlog (P1/P2)
- P1: Add meta tags and SEO optimization
- P1: Update page title from "Base44 APP" to "PlayCraft Ventures"
- P2: Add form submission integration (currently simulated)
- P2: Add analytics integration

## Next Tasks
- Connect form to actual backend/email service
- Update branding (favicon, title)
- Add proper error handling for external images
