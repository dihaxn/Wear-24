"use client";

import { motion } from "framer-motion";
import { Leaf, RefreshCcw, Truck } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-green-500 font-bold tracking-widest uppercase text-sm">
            Eco-Conscious
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6">
            SUSTAINABLE FUTURE
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Fashion shouldn't cost the earth. We are committed to reducing our footprint through responsible sourcing, ethical manufacturing, and plastic-free packaging.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 text-center"
            >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Organic Materials</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    We use 100% GOTS certified organic cotton and recycled polyester for 80% of our collection.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 text-center"
            >
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500">
                    <RefreshCcw className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Circular Economy</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Our "Re-Wear" program allows you to return old items for store credit, keeping clothes out of landfills.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 text-center"
            >
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                    <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Carbon Neutral</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    We offset 100% of carbon emissions from shipping and are working towards net-zero manufacturing by 2026.
                </p>
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 md:p-12 rounded-2xl text-center"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our 2026 Goals</h2>
            <div className="w-full bg-black/50 h-4 rounded-full overflow-hidden mb-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-400 w-[65%] h-full" />
            </div>
            <p className="text-gray-400 text-sm">65% Progress towards eliminating single-use plastics</p>
        </motion.div>
      </div>
    </div>
  );
}
