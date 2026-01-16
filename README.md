# WEAR24 - Premium Streetwear Store

A high-performance, animated e-commerce experience built with Next.js 14.

## 🚀 Features

### Core
-   **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS.
-   **Animations**: Smooth page transitions and scroll effects using Framer Motion.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

### Shopping Experience
-   **Product Filtering**: Sort by New Arrivals, Bestsellers, and Sale items.
-   **Cart System**: Persistent local cart with slide-out drawer.
-   **Wishlist**: Save favorites for later (persists in local storage).
-   **Wishlist Sorting**: Favorited items automatically float to the top of product lists.

### Checkout & User Flow
-   **Email Checkout**: Complete checkout form that sends order details via email (Nodemailer).
-   **Newsletter**: Functional footer subscription form.
-   **Static Pages**: Full suite of support and company pages (Contact, About, FAQ, Shipping, etc.).

## 🛠️ Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Configure Environment**:
    Rename `.env.example` to `.env` and add your SMTP credentials for email features:
    ```env
    SMTP_HOST=smtp.example.com
    SMTP_PORT=587
    SMTP_USER=your_email@example.com
    SMTP_PASS=your_password
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router (Pages & API Routes)
├── components/          # React Components
│   ├── layout/          # Header, Footer, CartDrawer
│   ├── sections/        # Homepage sections
│   └── ui/              # Button, Input, ProductCard, etc.
├── context/             # Global State (Cart, Wishlist)
├── lib/                 # Utilities & Mock Data
└── types/               # TypeScript Definitions
```

## 🎨 Design System
-   **Colors**: Zinc/Black theme with Orange accents.
-   **Typography**: Inter (Google Fonts).
-   **Icons**: Lucide React.
