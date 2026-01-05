# Wolt Clone - Food Delivery Platform

## Overview

A Wolt-inspired food delivery web application built with a modern full-stack TypeScript architecture. The application features a responsive React frontend with high-fidelity animations, an Express.js backend API, and PostgreSQL database storage. It displays restaurant/store listings with category browsing, delivery information, and a polished UI matching Wolt's design language.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Styling**: Tailwind CSS with custom Wolt-inspired theme (blue primary color #009de0)
- **UI Components**: shadcn/ui component library (Radix UI primitives with custom styling)
- **Animations**: Framer Motion for Wolt-style transitions and micro-interactions
- **Typography**: Nunito font family for display and body text

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful API with typed routes defined in `shared/routes.ts`
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for input validation (integrated with drizzle-zod)
- **Development**: Vite dev server with HMR proxied through Express

### Data Layer
- **Database**: PostgreSQL (connection via `DATABASE_URL` environment variable)
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Migrations**: Drizzle Kit for database migrations (output to `./migrations`)
- **Current Tables**: `stores` (restaurant listings) and `categories` (food categories)

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # UI components (Hero, Header, StoreCard, etc.)
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks (data fetching)
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Database connection
├── shared/           # Shared types and schemas
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod validation
```

### Build System
- **Development**: `npm run dev` - runs tsx with Vite middleware for HMR
- **Production Build**: `npm run build` - builds both client (Vite) and server (esbuild)
- **Database Push**: `npm run db:push` - pushes schema changes to database

## External Dependencies

### Database
- **PostgreSQL**: Primary database, requires `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for PostgreSQL (available but not currently used)

### Third-Party UI Libraries
- **Radix UI**: Headless UI primitives for accessible components
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component for category rails

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **Drizzle Kit**: Database migration tool
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production server build

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)