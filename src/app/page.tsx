'use client';

import Hero from '../components/Hero';
import Features from '../components/Features';
import ProblemsWeSolve from '../components/ProblemsWeSolve';
import HowItWorks from '../components/HowItWorks';
import WhyApnaGhr from '../components/WhyApnaGhr';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
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
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
