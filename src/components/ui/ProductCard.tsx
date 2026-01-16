"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart } from "lucide-react";
import type { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden bg-zinc-900"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => addToCart(product)}
              className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggleWishlist(product)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border ${
                isWishlisted
                  ? "bg-red-500 border-red-500 text-white"
                  : "bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
            </motion.button>
          </div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs tracking-widest uppercase">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-white font-medium text-lg tracking-wide hover:text-gray-300 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-400 text-sm tracking-wider font-bold">
            ${product.price.toFixed(2)}
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: "2rem" }}
            className="h-[2px] bg-orange-500"
          />
        </div>
      </div>
    </motion.div>
  );
}
