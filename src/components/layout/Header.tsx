"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { SearchModal } from "@/components/ui/SearchModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-wider text-white">
              WEAR<span className="text-orange-500">24</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-500 transition-colors">
              HOME
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
              SHOP
            </Link>
            <Link href="/#new-arrivals" className="text-gray-300 hover:text-white transition-colors">
              NEW ARRIVALS
            </Link>
            <Link href="/#editorial" className="text-gray-300 hover:text-white transition-colors">
              EDITORIAL
            </Link>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-orange-500 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link href="/products" className="text-white hover:text-orange-500 transition-colors hidden sm:block relative">
              <ShoppingBag className="w-5 h-5" />
              {/* Optional: Add badge here if needed */}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white hover:text-orange-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-12">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-orange-500 transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
              >
                SHOP
              </Link>
              <Link
                href="/#new-arrivals"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
              >
                NEW ARRIVALS
              </Link>
              <Link
                href="/#editorial"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
              >
                EDITORIAL
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
