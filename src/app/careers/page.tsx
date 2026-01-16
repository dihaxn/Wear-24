"use client";

import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Join the Team
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6">
            WORK WITH US
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We're always looking for creative minds to help us push boundaries. 
            If you're passionate about fashion, technology, and culture, we want to hear from you.
          </p>
        </motion.div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold border-b border-white/10 pb-4 mb-8">Open Positions</h2>
          
          {[
            { role: "Senior UX Designer", dept: "Design", loc: "Remote / LA" },
            { role: "Full Stack Engineer", dept: "Engineering", loc: "Remote" },
            { role: "Marketing Specialist", dept: "Marketing", loc: "New York, NY" },
            { role: "Product Manager", dept: "Product", loc: "Los Angeles, CA" },
          ].map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 border border-white/10 rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">{job.role}</h3>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  <span>{job.dept}</span>
                  <span>•</span>
                  <span>{job.loc}</span>
                </div>
              </div>
              <span className="mt-4 md:mt-0 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                Apply Now →
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-gray-500">Don't see your role? Email us at <a href="mailto:careers@wear24.com" className="text-white hover:text-orange-500 underline">careers@wear24.com</a></p>
        </div>
      </div>
    </div>
  );
}
