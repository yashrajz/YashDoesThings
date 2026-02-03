"use client";

import { useState } from "react";

export default function HomePage() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between">
        <div className="text-white">
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
            className="text-gray-300 hover:text-white transition-colors"
          >
            WORK
          </a>
          <a
            href="#resume"
            className="text-gray-300 hover:text-white transition-colors"
          >
            RÉSUMÉ
          </a>
          <a
            href="#connect"
            className="text-gray-300 hover:text-white transition-colors"
          >
            CONNECT
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 pb-32">
        {/* Device Wireframes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Left vertical line */}
          <div className="absolute left-[15%] top-[20%] w-px h-64 bg-gray-800"></div>

          {/* Tablet wireframe */}
          <div className="absolute left-[20%] top-[25%] w-48 h-64 border-2 border-gray-800 rounded-lg">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
          </div>

          {/* Top decoration */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2">
            <div className="w-px h-16 bg-gray-800 relative">
              <div className="absolute -top-2 -left-1 w-3 h-3 border-t-2 border-r-2 border-gray-800 rotate-45"></div>
            </div>
          </div>

          {/* Phone wireframe */}
          <div className="absolute right-[25%] top-[20%] w-32 h-56 border-2 border-gray-800 rounded-3xl">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>

          {/* Right decoration */}
          <div className="absolute right-[20%] top-[28%]">
            <div className="w-3 h-3 bg-white rounded-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gray-800 rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gray-800 -rotate-45"></div>
            </div>
          </div>

          {/* Right vertical line */}
          <div className="absolute right-[15%] top-[30%] w-px h-48 bg-gray-800"></div>

          {/* Left arrow decoration */}
          <div className="absolute left-[18%] top-1/2 -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right arrow decoration */}
          <div className="absolute right-[18%] top-1/2 -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Main Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-4">
            <div>yash</div>
            <div>raj</div>
          </h1>
          <p className="text-gray-400 text-sm md:text-base tracking-wide">
            designing for impact and delight
          </p>
        </div>

        {/* Sparkle decorations */}
        <div className="absolute top-[15%] right-[25%] w-3 h-3">
          <div className="w-full h-px bg-white absolute top-1/2 left-0"></div>
          <div className="h-full w-px bg-white absolute left-1/2 top-0"></div>
        </div>
      </section>

      {/* Flower Decorations */}
      <div className="relative pb-20">
        <div className="flex justify-center gap-16 items-start mb-32">
          {/* Flower 1 */}
          <div className="relative">
            <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto mb-4">
              <g transform="translate(40, 40)">
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <ellipse
                    key={i}
                    cx="0"
                    cy="-20"
                    rx="8"
                    ry="20"
                    fill="none"
                    stroke="#444"
                    strokeWidth="1.5"
                    transform={`rotate(${angle})`}
                  />
                ))}
                <circle cx="0" cy="0" r="4" fill="white" />
              </g>
            </svg>
            <div className="w-px h-32 bg-gray-800 mx-auto"></div>
          </div>

          {/* Flower 2 */}
          <div className="relative">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="mx-auto mb-4"
            >
              <g transform="translate(50, 50)">
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <ellipse
                    key={i}
                    cx="0"
                    cy="-25"
                    rx="10"
                    ry="25"
                    fill="none"
                    stroke="#444"
                    strokeWidth="1.5"
                    transform={`rotate(${angle})`}
                  />
                ))}
                <circle cx="0" cy="0" r="5" fill="white" />
              </g>
            </svg>
            <div className="w-px h-48 bg-gray-800 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <section className="max-w-2xl mx-auto px-8 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">hey there!</h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I'm Yash Raj, a passionate developer and designer based in{" "}
          <span className="text-white font-semibold">India</span>. I create
          beautiful, functional web experiences that make an impact. Always
          learning, always building!
        </p>

        <p className="text-gray-400 text-base">
          📧 <span className="text-gray-300">yashrajz.me@gmail.com</span>
        </p>

        {/* Laptop Tooltip */}
        {showTooltip && (
          <div className="inline-flex items-center gap-3 mt-16 bg-[#1a1a1a] border border-gray-800 rounded-full px-6 py-3 text-sm text-gray-300">
            <span className="text-2xl">💻</span>
            <span>this website works better on a laptop</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-2 text-gray-500 hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        )}
      </section>

      {/* Sparkles scattered */}
      <div className="relative h-96">
        <div className="absolute top-20 left-[20%]">
          <div className="w-2 h-2">
            <div className="w-full h-px bg-white absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-white absolute left-1/2 top-0"></div>
          </div>
        </div>

        <div className="absolute top-32 right-[30%]">
          <div className="w-1.5 h-1.5">
            <div className="w-full h-px bg-gray-600 absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-gray-600 absolute left-1/2 top-0"></div>
          </div>
        </div>

        <div className="absolute top-64 left-[40%]">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="absolute top-80 right-[25%]">
          <div className="w-2 h-2">
            <div className="w-full h-px bg-gray-700 absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-gray-700 absolute left-1/2 top-0"></div>
          </div>
        </div>

        <div className="absolute bottom-20 left-[15%]">
          <div className="w-3 h-3">
            <div className="w-full h-px bg-white absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-white absolute left-1/2 top-0"></div>
          </div>
        </div>

        <div className="absolute bottom-32 right-[35%]">
          <div className="w-2 h-2">
            <div className="w-full h-px bg-gray-600 absolute top-1/2 left-0"></div>
            <div className="h-full w-px bg-gray-600 absolute left-1/2 top-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
