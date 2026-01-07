"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {

  return (
    <section className="h-screen w-full relative overflow-hidden bg-black">
      {/* Main Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80"
          alt="Fashion Model"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
      </div>





      {/* Hero Content */}
      <div className="relative z-10 h-[calc(100%-70px)] flex flex-col justify-center px-6 md:px-16 max-w-3xl">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.95] tracking-tighter mb-6"
        >
          <motion.span 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="block"
          >
            FIND YOUR
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="block"
          >
            TRUE
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="block"
          >
            STYLE
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-sm md:text-base text-gray-400 max-w-sm mb-8 tracking-wide"
        >
          Premium streetwear designed for the modern urban lifestyle. Discover our new summer collection.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#f5f5f5" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 sm:px-16 py-4 sm:py-5 bg-white text-black font-bold text-sm tracking-widest transition-all duration-300"
            >
              SHOP NOW
            </motion.button>
          </Link>
        </motion.div>
      </div>


    </section>
  );
}
