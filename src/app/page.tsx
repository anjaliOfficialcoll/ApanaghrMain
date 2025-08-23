'use client';

import Hero from '../components/Hero';
<<<<<<< HEAD
import Features from '../components/Features';
import ProblemsWeSolve from '../components/ProblemsWeSolve';
import HowItWorks from '../components/HowItWorks';
=======
import HeroHighlights from "@/components/HeroHighlights";
import Features from '../components/popularlocal';
import ProblemsWeSolve from '../components/RecommendedProperties';
import HowItWorks from '../components/adviceTools';
>>>>>>> 78e7e34 (Initial commit)
import WhyApnaGhr from '../components/WhyApnaGhr';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
<<<<<<< HEAD
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="problems">
        <ProblemsWeSolve />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="why-apanaghr">
        <WhyApnaGhr />
      </section>
=======

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Highlights Section (Light Background) */}
      <section className="bg-gray-50 py-12">
        <div >
          <HeroHighlights />
        </div>
      </section>

      {/* Popular Localities */}
      <section id="features" className="py-8">
        <Features />
      </section>

      {/* Recommended Properties */}
      <section id="problems">
        <ProblemsWeSolve />
      </section>

      {/* How It Works */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Why ApnaGhr */}
      <section id="why-apanaghr">
        <WhyApnaGhr />
      </section>

      {/* Footer */}
>>>>>>> 78e7e34 (Initial commit)
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
