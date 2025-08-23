// now file name is popularlocal.tsx previously it was features

"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const localities = [
  {
    image: "/images/whitefield.jpg",
    title: "Whitefield",
    properties: "651+ Properties",
  },
  {
    image: "/images/hsr.png",
    title: "Hsr Layout",
    properties: "413+ Properties",
  },
  {
    image: "/images/electronic.png",
    title: "Electronic City",
    properties: "177+ Properties",
  },
  {
    image: "/images/koramangala.png",
    title: "Koramangala",
    properties: "222+ Properties",
  },
  {
    image: "/images/indiranagar.png",
    title: "Indiranagar",
    properties: "305+ Properties",
  },
];

export default function PopularLocalities() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300, // adjust scroll speed
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 relative inline-block">
          Popular Localities
          <span className="absolute -bottom-2 left-0 w-16 h-[2px] bg-red-500"></span>
        </h2>

        {/* Scrollable container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {localities.map((loc, index) => (
              <div
                key={index}
                className="relative min-w-[300px] rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={loc.image}
                  alt={loc.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{loc.title}</h3>
                  <p className="text-sm opacity-90">{loc.properties}</p>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-xl">
                  →
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
