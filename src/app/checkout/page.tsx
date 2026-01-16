"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          cartItems: items,
          total: cartTotal,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      clearCart();
      router.push("/checkout/success");
    } catch (err) {
        console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white pt-24 md:pt-32 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/products" className="text-orange-500 hover:text-orange-400">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <div>
          <h1 className="text-3xl font-black tracking-tighter mb-8">CHECKOUT</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-zinc-900 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-zinc-900 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-medium text-gray-400">
                Address
              </label>
              <input
                type="text"
                id="address"
                required
                className="w-full bg-zinc-900 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium text-gray-400">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="zip" className="text-sm font-medium text-gray-400">
                  ZIP / Postal Code
                </label>
                <input
                  type="text"
                  id="zip"
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  value={formData.zip}
                  onChange={(e) =>
                    setFormData({ ...formData, zip: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-medium text-gray-400">
                Country
              </label>
              <input
                type="text"
                id="country"
                required
                className="w-full bg-zinc-900 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-md tracking-widest uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-zinc-900/50 p-8 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-16 h-20 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-bl">
                    {item.quantity}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.category}</p>
                  <p className="text-sm font-bold mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4 space-y-2">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Shipping</span>
              <span>Calculated at next step</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-white/10 mt-2">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
