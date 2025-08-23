"use client";
import { useState } from "react";
import { MapPin, Mic, Search } from "lucide-react";

const tabs = ["Buy", "Rent", "PG", "Commercial", "Plots", "Projects"];

const propertyTypes: Record<string, string[]> = {
  Buy: ["All Residential", "Flat", "Villa", "Plot"],
  Rent: ["All Residential", "Flat", "Villa"],
  PG: ["All PGs", "Boys", "Girls", "Shared"],
  Commercial: ["All Commercial", "Office", "Shop", "Warehouse"],
  Plots: ["All Plots", "Residential Plot", "Commercial Plot"],
  Projects: ["All Projects", "Ongoing", "Completed"],
};

export default function HeroSearchBar() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [selectedType, setSelectedType] = useState(propertyTypes["Buy"][0]);

  return (
    <div className="w-full max-w-5xl mx-auto -mt-6 md:-mt-10">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelectedType(propertyTypes[tab][0]); // reset type on tab change
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-[#14452F] text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-white shadow-lg rounded-2xl p-4">
        {/* Property Type Dropdown */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-gray-200 px-4 py-3 rounded-xl text-gray-700 w-full md:w-[200px] focus:outline-none focus:ring-2 focus:ring-[#14452F] bg-white"
        >
          {propertyTypes[activeTab].map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        {/* Location Input */}
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <MapPin size={20} />
          </span>

          <input
            type="text"
            placeholder={`Search by city, area or project (${activeTab})`}
            className="w-full border border-gray-200 pl-10 pr-10 py-3 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14452F] bg-white"
          />

          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer hover:text-[#14452F]">
            <Mic size={20} />
          </span>
        </div>

        {/* Search Button */}
        <button className="bg-[#14452F] hover:bg-[#0f3323] text-white font-medium py-3 px-6 rounded-xl flex items-center gap-2">
          <Search size={18} />
          Search
        </button>
      </div>
    </div>
  );
}
