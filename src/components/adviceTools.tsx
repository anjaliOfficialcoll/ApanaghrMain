// HowItWorks changed to adviceTools';

import { Calculator, TrendingUp, MapPin, BookOpen } from "lucide-react";

const tools = [
  {
    icon: <Calculator className="w-10 h-10 text-red-500" />,
    title: "EMI Calculator",
    description: "Know how much you'll have to pay every month on your loan",
    link: "View now →",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-red-500" />,
    title: "Rates & Trends",
    description: "Know all about Property Rates & Trends in your city",
    link: "View now →",
  },
  {
    icon: <MapPin className="w-10 h-10 text-red-500" />,
    title: "Investment Hotspot",
    description: "Discover the top localities in your city for investment",
    link: "View now →",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-red-500" />,
    title: "Research Insights",
    description: "Get experts insights and research reports on real estate",
    link: "View now →",
  },
];

export default function AdviceTools() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 relative inline-block">
          Advice & Tools
          <span className="absolute -bottom-2 left-0 w-16 h-[2px] bg-red-500"></span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <a href="#" className="text-red-500 font-medium hover:underline">
                {tool.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
