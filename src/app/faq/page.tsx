"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I find my size?",
    answer: "We recommend checking our detailed size guide located on each product page. If you're between sizes, we generally suggest sizing up for a more relaxed, oversized street fit, or sizing down for a tailored look."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to select international countries including Canada, UK, Australia, and most of Europe. Shipping costs and times will be calculated at checkout."
  },
  {
    question: "When will my order ship?",
    answer: "Orders are processed within 1-2 business days. Once shipped, you'll receive a confirmation email with tracking information."
  },
  {
    question: "Can I change my order after placing it?",
    answer: "We process orders quickly. If you need to make changes, please contact support@wear24.com within 1 hour of placing your order and we'll do our best to accommodate."
  },
  {
    question: "What materials do you use?",
    answer: "We prioritize high-quality, sustainable fabrics. Most of our tees are 100% heavyweight cotton, while our outerwear features technical blends designed for durability."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Help Center
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6">
            FREQUENTLY ASKED
          </h1>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <Plus
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                className="overflow-hidden bg-zinc-900/50"
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
