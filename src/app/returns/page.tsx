"use client";

import { motion } from "framer-motion";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Policies
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6">
            RETURNS & EXCHANGES
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Policy</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We want you to love your purchase. If you're not entirely satisfied, you have 30 days from the date of purchase to return your item for a full refund or exchange.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Items must be unused and in the same condition that you received them.</li>
              <li>Items must be in the original packaging with tags attached.</li>
              <li>Returns initiated after 30 days will be credited as store credit.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How to Return</h2>
            <div className="bg-zinc-900/50 p-6 rounded-lg space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold mb-1">Email Support</h3>
                  <p className="text-gray-400 text-sm">Send an email to support@wear24.com with your order number.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold mb-1">Receive Label</h3>
                  <p className="text-gray-400 text-sm">We'll send you a prepaid shipping label via email.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold mb-1">Ship It</h3>
                  <p className="text-gray-400 text-sm">Pack the item and drop it off at any authorized shipping center.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Refunds</h2>
            <p className="text-gray-400 leading-relaxed">
              Once we receive your item, we will inspect it and notify you that we have received your returned item. 
              We will immediately notify you on the status of your refund after inspecting the item.
              If your return is approved, we will initiate a refund to your credit card (or original method of payment).
              You will receive the credit within a certain amount of days, depending on your card issuer's policies.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
