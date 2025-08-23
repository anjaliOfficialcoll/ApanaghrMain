import React from "react";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Verified PG’s",
  "Best Prices",
  "Quick Booking",
  "Quality Homes",
  "AI Matching",
  "Prime Locations",
];

export default function HeroHighlights() {
  return (
    <section className="relative py-12">
      {/* Soft greenish gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-100 opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
            >
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
