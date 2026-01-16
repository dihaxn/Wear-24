"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6">
            CONTACT US
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Have a question about your order, sizing, or just want to say hello? 
            We're here to help. Fill out the form below or drop us an email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Name</label>
              <input
                type="text"
                className="w-full bg-zinc-900 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                className="w-full bg-zinc-900 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea
                rows={5}
                className="w-full bg-zinc-900 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-colors w-full md:w-auto">
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 md:pl-12 border-l border-white/10"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-400">support@wear24.com</p>
              <p className="text-gray-400">press@wear24.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-gray-400">
                123 Streetwear Blvd<br />
                Los Angeles, CA 90012<br />
                United States
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-gray-400">Mon - Fri: 9am - 6pm PST</p>
              <p className="text-gray-400">Sat - Sun: Closed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
