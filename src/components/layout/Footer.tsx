"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, ArrowUpRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "New Arrivals", href: "/products?filter=new" },
    { label: "Bestsellers", href: "/products?filter=bestseller" },
    { label: "Sale", href: "/products?filter=sale" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Sustainability", href: "/sustainability" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Youtube, href: "https://youtube.com" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white snap-start">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-black tracking-wider">
                WEAR<span className="text-orange-500">24</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Premium streetwear designed for the modern urban lifestyle. 
              Quality fabrics, timeless designs.
            </p>
            
            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={status === "error" ? "Please try again" : "Enter your email"}
                disabled={status === "loading" || status === "success"}
                className={`flex-1 px-4 py-3 bg-white/10 border ${
                  status === "error" ? "border-red-500" : "border-white/10"
                } text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50`}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status === "loading" || status === "success"}
                className={`px-6 py-3 font-semibold transition-colors flex items-center justify-center min-w-[60px] ${
                  status === "success" 
                    ? "bg-green-500 hover:bg-green-600" 
                    : "bg-orange-500 hover:bg-orange-600"
                } text-white`}
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <ArrowUpRight className="w-5 h-5" />
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold tracking-widest uppercase mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Icons - aligned with Company column */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex justify-center items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WEAR24. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
