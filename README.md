# WEAR24 - Next.js Clothing Store

A modern, animated clothing store built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (optional)
- **Language**: TypeScript

## Project Structure

```
nextjs-store/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── products/           # Products page
│   ├── components/
│   │   ├── layout/             # Layout components (Header, Footer, etc.)
│   │   ├── sections/           # Page sections (Hero, NewArrivals, etc.)
│   │   └── ui/                 # Reusable UI components
│   ├── lib/                    # Utilities and data
│   │   ├── data.ts             # Static product data
│   │   ├── supabase.ts         # Supabase client & queries
│   │   └── utils.ts            # Helper functions
│   └── types/                  # TypeScript type definitions
│       └── index.ts
├── .env.example                # Environment variables template
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Supabase Setup (Optional)

1. Create a Supabase project at [supabase.com](https://supabase.com)

2. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

3. Add your Supabase credentials:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

4. Create the products table:
   ```sql
   CREATE TABLE products (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL,
     price DECIMAL(10,2) NOT NULL,
     image TEXT NOT NULL,
     category TEXT NOT NULL,
     description TEXT,
     is_featured BOOLEAN DEFAULT false,
     created_at TIMESTAMPTZ DEFAULT now()
   );
   ```

## Features

- ✅ Responsive design
- ✅ Page loader animation
- ✅ Smooth page transitions
- ✅ Product filtering by category
- ✅ Modern dark theme
- ✅ Optimized images with Next.js Image
