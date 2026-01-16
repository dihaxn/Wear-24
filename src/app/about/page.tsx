"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6">
              REDEFINING<br />STREETWEAR
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Born in 2024, WEAR24 wasn't just created to sell clothes. It was created to start a movement. We believe that what you wear is the most direct expression of who you are.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is to bridge the gap between high-fashion aesthetics and everyday street durability. Every stitch, every fabric choice, and every silhouette is obsessed over until it's perfect.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[600px] w-full bg-zinc-900 rounded-lg overflow-hidden"
          >
             {/* Abstract/Vibe placeholder - normally would be a real image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 mix-blend-overlay" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-black text-white/5 tracking-tighter rotate-90 md:rotate-0">
                  EST. 2024
                </span>
             </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Quality", desc: "Premium heavyweight cottons and technical fabrics." },
            { title: "Design", desc: "Minimalist aesthetics meeting maximalist attitude." },
            { title: "Culture", desc: "Built for the creators, the movers, and the shakers." }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 p-8 rounded-lg border border-white/5"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
