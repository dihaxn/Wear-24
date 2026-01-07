"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data";

export function NewArrivals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const displayProducts = products.slice(0, 3);

  return (
    <section id="new-arrivals" className="min-h-screen w-full flex flex-col justify-center px-6 md:px-20 py-20 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <motion.span 
              initial={{ width: 0 }}
              animate={isInView ? { width: "3rem" } : { width: 0 }}
              className="block h-[2px] bg-orange-500 mb-4"
            />
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              NEW ARRIVALS
            </h2>
            <p className="text-gray-400 mt-2 tracking-wide">
              Explore the latest additions to our collection
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-white border-b-2 border-white pb-1 hover:opacity-70 transition-opacity uppercase text-sm tracking-widest text-left flex items-center gap-2 font-bold"
              >
                View All Products →
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
