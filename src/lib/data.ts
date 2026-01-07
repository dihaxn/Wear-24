import type { Product } from "@/types";

// Static product data (used when Supabase is not configured)
export const products: Product[] = [
  {
    id: "1",
    name: "Oversized Denim Jacket",
    category: "Outerwear",
    price: 240,
    image: "https://images.unsplash.com/photo-1588011025378-15f4778d2558?w=800&q=80",
    description: "Premium oversized denim jacket with vintage wash and modern fit.",
    is_featured: true,
  },
  {
    id: "2",
    name: "Tech Fleece Hoodie",
    category: "Tops",
    price: 180,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    description: "Innovative tech fleece hoodie with moisture-wicking fabric.",
    is_featured: true,
  },
  {
    id: "3",
    name: "Essential Tee Black",
    category: "Essentials",
    price: 85,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    description: "Premium cotton essential tee with perfect weight and drape.",
    is_featured: false,
  },
  {
    id: "4",
    name: "Minimalist Trench",
    category: "Outerwear",
    price: 320,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    description: "Classic minimalist trench coat with modern tailoring.",
    is_featured: true,
  },
  {
    id: "5",
    name: "Urban Cargo Pants",
    category: "Bottoms",
    price: 150,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    description: "Functional cargo pants with sleek urban design.",
    is_featured: false,
  },
  {
    id: "6",
    name: "Structured Blazer",
    category: "Outerwear",
    price: 280,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    description: "Contemporary structured blazer for versatile styling.",
    is_featured: false,
  },
  {
    id: "7",
    name: "Silk Blend Shirt",
    category: "Tops",
    price: 190,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    description: "Luxurious silk blend shirt with relaxed fit.",
    is_featured: false,
  },
  {
    id: "8",
    name: "Leather Crossbody",
    category: "Accessories",
    price: 120,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    description: "Minimalist leather crossbody bag with adjustable strap.",
    is_featured: false,
  },
];

export const categories = ["All", "Outerwear", "Tops", "Bottoms", "Essentials", "Accessories"];

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.is_featured);
}
