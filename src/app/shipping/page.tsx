"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Delivery
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6">
            SHIPPING INFO
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <section>
            <h2 className="text-2xl font-bold mb-4">Processing Time</h2>
            <p className="text-gray-400 leading-relaxed">
              All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
              If we are experiencing a high volume of orders, shipments may be delayed by a few days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Shipping Rates & Estimates</h2>
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="p-4 font-bold border-b border-white/10">Method</th>
                    <th className="p-4 font-bold border-b border-white/10">Time</th>
                    <th className="p-4 font-bold border-b border-white/10">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-4 text-gray-400">Standard Shipping</td>
                    <td className="p-4 text-gray-400">3-5 business days</td>
                    <td className="p-4 text-gray-400">Free</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400">Express Shipping</td>
                    <td className="p-4 text-gray-400">1-2 business days</td>
                    <td className="p-4 text-gray-400">$19.95</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-400">International</td>
                    <td className="p-4 text-gray-400">7-14 business days</td>
                    <td className="p-4 text-gray-400">$29.95</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">International Shipping</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We currently ship strictly to the US, Canada, UK, and EU. International shipping rates vary based on location.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <span className="text-orange-500 font-bold">Please Note:</span> Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. WEAR24 is not responsible for these charges if they are applied.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
