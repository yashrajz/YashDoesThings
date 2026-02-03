"use client";

import { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import FlowersSection from "../components/FlowersSection";
import SkillsSection from "../components/SkillsSection";

export default function HomePage() {
  const [showTooltip, setShowTooltip] = useState(true);
  const bioRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-fade-up");
        }
      });
    }, observerOptions);

    // Observe bio section
    if (bioRef.current) {
      observer.observe(bioRef.current);
    }

    // Observe footer elements
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between animate-nav-enter">
        <div className="text-white logo-hover cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M8 8 L20 28 L32 8 M20 28 L20 32"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex gap-8 text-sm tracking-wider">
          <a
            href="#work"
            className="text-gray-300 hover:text-white nav-link"
          >
            WORK
          </a>
          <a
            href="#resume"
            className="text-gray-300 hover:text-white nav-link"
          >
            RÉSUMÉ
          </a>
          <a
            href="#connect"
            className="text-gray-300 hover:text-white nav-link"
          >
            CONNECT
          </a>
        </div>
      </nav>



      {/* Hero Section - Framer Motion */}
      <HeroSection />




      {/* Flower Decorations - Framer Motion */}
      <FlowersSection />


      {/* Bio Section */}
      <section ref={bioRef} className="max-w-2xl mx-auto px-8 py-20 text-center opacity-0">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 scroll-fade-in delay-100">hey there!</h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8 scroll-fade-in delay-300">
          I'm Yash Raj, a passionate developer and designer based in{" "}
          <span className="text-white font-semibold">India</span>. I create
          beautiful, functional web experiences that make an impact. Always
          learning, always building!
        </p>

        <p className="text-gray-400 text-base scroll-fade-in delay-500">
          📧 <span className="text-gray-300">yashrajz.me@gmail.com</span>
        </p>

        {/* Laptop Tooltip */}
        {showTooltip && (
          <div className="inline-flex items-center gap-3 mt-16 bg-[#1a1a1a] border border-gray-800 rounded-full px-6 py-3 text-sm text-gray-300 scroll-fade-in delay-700">
            <span className="text-2xl">💻</span>
            <span>this website works better on a laptop</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-2 text-gray-500 hover:text-gray-300 close-btn"
            >
              ✕
            </button>
          </div>
        )}
      </section>


      {/* Skills Section - Framer Motion */}
      <SkillsSection />


      {/* Sparkles scattered */}
      <div ref={footerRef} className="relative h-96 opacity-0">
        <div className="absolute top-20 left-[20%]">
          <div className="w-2 h-2 animate-rotate-medium">
            <div className="w-full h-px bg-white absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-white absolute left-1/2 top-0"></div>
          </div>
        </div>

        <div className="absolute top-32 right-[30%]">
          <div className="w-1.5 h-1.5 animate-rotate-fast">
            <div className="w-full h-px bg-gray-600 absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-gray-600 absolute left-1/2 top-0"></div>
          </div>
        </div>

        <div className="absolute top-64 left-[40%] animate-rotate-slow">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="absolute top-80 right-[25%]">
          <div className="w-2 h-2 animate-rotate-medium">
            <div className="w-full h-px bg-gray-700 absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-gray-700 absolute left-1/2 top-0"></div>
          </div>
        </div>

        <div className="absolute bottom-20 left-[15%]">
          <div className="w-3 h-3 animate-rotate-slow">
            <div className="w-full h-px bg-white absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-white absolute left-1/2 top-0"></div>
          </div>
        </div>

        <div className="absolute bottom-32 right-[35%]">
          <div className="w-2 h-2 animate-rotate-fast">
            <div className="w-full h-px bg-gray-600 absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-gray-600 absolute left-1/2 top-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
