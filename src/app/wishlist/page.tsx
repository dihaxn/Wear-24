"use client";

import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/ui/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
              WISHLIST
            </h1>
          </div>
          <p className="text-gray-400 max-w-lg">
            Your personal collection of favorites. Add items here to save them for later or move them to your cart when you're ready to purchase.
          </p>
        </motion.div>

        {/* Content */}
        {wishlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              Start building your personal collection by clicking the heart icon on products you love.
            </p>
            <Link
              href="/products"
              className="px-8 py-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors rounded-full"
            >
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {wishlist.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
