"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import type { Product } from "@/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Filter products based on query
  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description?.toLowerCase().includes(searchTerm)
    );
    setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
  }, [query]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleProductClick = () => {
    setQuery("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8"
          >
            <div className="max-w-2xl mx-auto">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, categories..."
                  className="w-full px-12 py-4 bg-zinc-900 border border-white/10 text-white placeholder:text-gray-500 text-lg focus:outline-none focus:border-orange-500 transition-colors rounded-lg"
                />
                <button
                  onClick={onClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Suggestions */}
              <AnimatePresence>
                {suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 bg-zinc-900 border border-white/10 rounded-lg overflow-hidden"
                  >
                    {suggestions.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={`/products?search=${encodeURIComponent(product.name)}`}
                          onClick={handleProductClick}
                          className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                        >
                          <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-medium truncate">
                              {product.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {product.category} · ${product.price}
                            </p>
                          </div>
                          <span className="text-orange-500 text-sm">→</span>
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* View All Results */}
                    <Link
                      href={`/products?search=${encodeURIComponent(query)}`}
                      onClick={handleProductClick}
                      className="block p-4 text-center text-orange-500 hover:bg-white/5 transition-colors text-sm font-medium"
                    >
                      View all results for "{query}"
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* No Results */}
              {query.trim() !== "" && suggestions.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 p-8 bg-zinc-900 border border-white/10 rounded-lg text-center"
                >
                  <p className="text-gray-400">No products found for "{query}"</p>
                  <Link
                    href="/products"
                    onClick={handleProductClick}
                    className="inline-block mt-4 text-orange-500 hover:text-orange-400 text-sm"
                  >
                    Browse all products →
                  </Link>
                </motion.div>
              )}

              {/* Quick Links when empty */}
              {query.trim() === "" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 p-4 bg-zinc-900 border border-white/10 rounded-lg"
                >
                  <p className="text-gray-500 text-sm mb-3">Popular searches</p>
                  <div className="flex flex-wrap gap-2">
                    {["Jacket", "Hoodie", "Outerwear", "Tops", "Accessories"].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded hover:bg-white/10 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
