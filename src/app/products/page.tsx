"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { products, categories } from "@/lib/data";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">


      <div className="px-6 md:px-8 py-12 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="text-gray-500 hover:text-white mb-4 text-sm tracking-widest uppercase transition-colors inline-flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-6">
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="h-[2px] bg-orange-500 mb-4"
                />
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                  ALL PRODUCTS
                </h1>
              </div>

              {/* Desktop Filter */}
              <div className="hidden md:flex gap-2 flex-wrap">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-400 hover:text-white"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Filter Button */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsFilterOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-3 border border-white text-sm tracking-widest uppercase"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">
                No products found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-orange-500 hover:text-orange-400 transition-colors"
              >
                View all products
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-white/10 z-50 rounded-t-2xl max-h-[60vh] overflow-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold tracking-widest uppercase">
                    Filter by Category
                  </h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`py-4 text-left text-lg tracking-wide border-b border-white/5 transition-colors flex items-center justify-between ${
                        selectedCategory === category
                          ? "text-white font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {category}
                      {selectedCategory === category && (
                        <motion.div
                          layoutId="active-mobile-category"
                          className="w-2 h-2 bg-orange-500 rounded-full"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
