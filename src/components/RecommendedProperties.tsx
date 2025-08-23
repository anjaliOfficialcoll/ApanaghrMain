// now file name is RecommendedProperties.tsx previously it was ProblemsWeSolve

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "STUDIO Semi Furnished Flat for Rent in Saurabh Grover",
    rent: "₹ 14,000",
    deposit: "3 Months",
    area: "650 sq.ft",
  },
  {
    id: 2,
    image: "/images/RA1.png",
    title: "1 BHK Fully Furnished Flat for Rent in Brindavan Classic",
    rent: "₹ 23,000",
    deposit: "1 Month",
    area: "500 sq.ft",
  },
  {
    id: 3,
    image: "/images/RA2.png",
    title: "1 BHK Fully Furnished Flat for Rent in Rakesh Residency",
    rent: "₹ 25,000",
    deposit: "2 Months",
    area: "350 sq.ft",
  },
  {
    id: 4,
    image: "/images/RA3.png",
    title: "1 BHK Semi Furnished Flat for Rent in Krishnarajapura",
    rent: "₹ 17,000",
    deposit: "₹ 1,00,000",
    area: "900 sq.ft",
  },
];

export default function RecommendedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // match card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Recommended Properties
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="min-w-[280px] max-w-[280px] bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2">
                  {property.title}
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <span className="font-bold">{property.rent}</span> Rent/month
                  </p>
                  <p>{property.deposit} Security Deposit</p>
                  <p>{property.area} Area</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
