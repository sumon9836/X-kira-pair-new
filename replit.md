# Overview

A WhatsApp bot pairing website built with Next.js 16 featuring Firebase-based user verification system. The site includes a public pairing page (/pair-pro) that verifies users against a Firebase database before allowing access, and an admin panel (/admin) for managing user verification. The project emphasizes security with header-based authentication and session management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Next.js 16 with React 19.2.0 using the App Router architecture
- Server-side rendering for optimal SEO and performance
- TypeScript for type safety throughout the application
- Single-page application with smooth scroll navigation between sections

**Component Structure**: 
- Modular component-based architecture with 20+ reusable components
- All components located in `app/components/` directory
- Each section (Hero, About, Skills, Experience, Education, Certifications, Projects, Testimonials, Contact) is a standalone component
- Shared UI components include: Navbar, Footer, LoadingScreen, CustomCursor, ScrollProgress, AnimatedBackground, SmoothScroll

**Styling Strategy**:
- TailwindCSS 4 for utility-first styling
- Custom CSS variables defined in `globals.css` for theming (background, foreground, accent, muted colors)
- Dark theme with minimal color palette (black background, white text, accent colors)
- Responsive design using Tailwind's breakpoint system

**Animation System**:
- Framer Motion for all animations and transitions
- Lenis smooth scrolling for butter-smooth momentum-based page scrolling
- Scroll-triggered animations using `useInView` hook for performance
- Custom animation variants for consistent motion design
- Advanced effects: parallax text scrolling, magnetic buttons, custom cursor tracking
- Spring-based physics for natural movement
- Accessibility: Respects prefers-reduced-motion for users who need reduced animations

**State Management**:
- React hooks (useState, useEffect, useRef) for local component state
- Framer Motion hooks (useScroll, useMotionValue, useSpring) for animation state
- No global state management library - keeps architecture simple

## Configuration Architecture

**Centralized Settings**: 
- Single `settings.json` file contains all editable content
- Imported throughout components using `@/settings.json`
- Sections include: personal info, social links, SEO metadata, skills, services, experience, education, certifications, projects, testimonials, statistics

**Content Structure**:
- Personal information (name, title, email, tagline, availability status)
- Social media links (GitHub, LinkedIn, Twitter)
- SEO configuration (site URL, meta descriptions, keywords, OG images)
- Skills array with proficiency levels
- Services/offerings array with icons and descriptions
- Experience timeline with dates, descriptions, achievements, technologies
- Education history
- Certifications with credential IDs
- Projects portfolio with tech stack, links, featured status
- Client testimonials with ratings
- Statistical counters (projects completed, clients, etc.)

**Benefits of Centralized Config**:
- Non-developers can update content by editing JSON
- No code changes required for content updates
- Consistent data structure across components
- Easy to validate and maintain

## SEO & Metadata

**Next.js Metadata API**:
- Generated dynamically from settings.json
- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card optimization
- Canonical URLs
- Google Site Verification support

**Static Assets**:
- `robots.txt` for search engine crawling permissions
- Sitemap support (referenced in robots.txt)

## Design Patterns

**Intersection Observer Pattern**: 
- Components use `useInView` to trigger animations only when visible
- Improves performance by preventing off-screen animations
- Enhances user experience with staggered reveals

**Compound Component Pattern**:
- Complex components broken into smaller sub-components
- Example: ProjectModal, ContactForm as separate reusable pieces

**Render Props / Custom Hooks**:
- Animation logic extracted into reusable variants
- Scroll tracking and cursor positioning in custom components

# External Dependencies

## Core Framework Dependencies

- **next**: v16.0.0 - React framework for production applications
- **react**: v19.2.0 - UI library
- **react-dom**: v19.2.0 - React DOM renderer
- **typescript**: v5 - Type safety and developer experience

## UI & Styling

- **tailwindcss**: v4 - Utility-first CSS framework
- **@tailwindcss/postcss**: v4 - PostCSS integration for Tailwind
- **lucide-react**: v0.468.0 - Icon library (500+ icons)

## Animation Libraries

- **framer-motion**: v11.11.17 - Production-ready animation library
  - Used for: page transitions, scroll animations, gesture animations, layout animations
  - Provides: useScroll, useInView, useSpring, useMotionValue hooks
- **@popmotion/popcorn**: v0.4.4 - Utility functions for animation
  - Used for: wrap function in parallax text scrolling
- **@studio-freight/lenis**: v1.0.42 - Premium smooth scrolling library
  - Used for: Physics-based momentum scrolling with custom easing
  - Features: Proper RAF cleanup, accessibility support (prefers-reduced-motion)
  - Provides butter-smooth scrolling experience across the entire website

## Font System

- **Geist**: Google Fonts integration
  - Geist Sans (primary font)
  - Geist Mono (monospace font for code)
  - Variable fonts for optimal performance

## Development Tools

- **eslint**: v9 - Code linting
- **eslint-config-next**: v16.0.0 - Next.js specific linting rules
- **@types/node**, **@types/react**, **@types/react-dom**: TypeScript type definitions

## Build & Deployment

**Development Server**: 
- Runs on port 5000 (customized from default 3000)
- Bound to 0.0.0.0 for network accessibility
- Hot module replacement enabled

**Production Build**:
- Optimized for Vercel deployment (recommended platform)
- Static generation where possible
- Automatic code splitting
- Image optimization through Next.js Image component

**Firebase Integration**: 
- Firebase Realtime Database for user verification data
- Secure admin authentication using environment variables
- Session-based authentication with automatic logout on unauthorized access
- API routes handle all Firebase operations server-side

## Firebase Database Integration

**User Verification System**:
- Firebase Realtime Database stores user verification status
- Users database structure: `users/{phoneNumber}` with fields: `verified`, `phoneNumber`, `verifiedAt`
- `/pair-pro` page checks verification before allowing pairing
- Unverified users are automatically redirected to WhatsApp contact

**Admin Panel** (`/admin`):
- Secure admin authentication using header-based key transmission
- Session-based authentication (sessionStorage)
- Features: View all users, verify/unverify users, add new users
- Auto-logout on unauthorized access (401 responses)
- Server-side validation on all admin operations

**API Routes**:
- `/api/check-user` - Check if a phone number is verified (GET)
- `/api/admin/verify-user` - Admin operations for user management (GET/POST)
  - GET: Retrieve all users (requires x-admin-key header)
  - POST: Verify/unverify a user (requires x-admin-key header)

**Security Features**:
- Admin key transmitted only via HTTP headers (never in URL/query/body)
- Server-side key validation before any database operations
- SessionStorage for client-side key persistence (cleared on logout)
- Automatic session expiration on unauthorized responses
- No admin key exposure in logs or browser history

## Environment Variables Required

**Firebase Configuration** (all required):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_DATABASE_URL`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

**Admin Authentication**:
- `ADMIN_KEY` - Secret key for admin panel access

**External APIs**:
- `NEXT_PUBLIC_API` - API endpoint for standard pairing
- `NEXT_PUBLIC_API_PRO` - API endpoint for PRO pairing

## Third-Party Integrations

**Firebase** (Google Cloud Platform):
- Realtime Database for user verification data
- Configuration via environment variables
- Client SDK for browser-side operations
- Server-side operations via API routes

**External Pairing APIs**:
- WhatsApp pairing service integration
- Automatic redirect to WhatsApp for unverified users