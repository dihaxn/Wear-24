import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
            <CheckCircle className="w-10 h-10" />
          </div>
        </div>
        <h1 className="text-4xl font-black tracking-tighter">ORDER CONFIRMED</h1>
        <p className="text-gray-400 text-lg">
          Thank you for your purchase! We have received your order and will contact you shortly with shipping details.
        </p>
        <div className="pt-8">
          <Link
            href="/"
            className="inline-block bg-white text-black font-bold px-8 py-4 rounded-full tracking-widest uppercase hover:bg-gray-200 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
