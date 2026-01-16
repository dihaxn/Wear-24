"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function FeaturedCollection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  return (
    <section
      id="editorial"
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#1a1a1a] scroll-mt-20 snap-start"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0 opacity-40"
      >
        <Image
          src="https://images.unsplash.com/photo-1760287363750-1c888c75578f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
          alt="Editorial Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-white" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-center w-full py-20">
        {/* Image with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden hidden md:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1739616194392-ee37d7584484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt="Editorial"
            fill
            className="object-cover"
          />
          
          {/* Decorative Frame */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="absolute inset-4 border border-white/20 pointer-events-none"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[2px] bg-orange-500 mb-6"
          />
          
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-sm font-bold tracking-[0.3em] text-orange-500 uppercase mb-4"
          >
            Editorial
          </motion.h4>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            URBAN
            <br />
            MINIMALISM
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md"
          >
            Discover our new collection focused on clean lines, monochromatic tones, 
            and premium fabrics designed for the modern urban landscape.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="flex gap-4"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-100 transition-all duration-300"
              >
                Shop The Look
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:border-white transition-all duration-300"
            >
              View Lookbook
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
