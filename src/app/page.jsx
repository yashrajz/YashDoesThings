"use client";

import { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import FlowersSection from "../components/FlowersSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import OriginsSection from "../components/OriginsSection";
import InterestsSection from "../components/InterestsSection";
import ConnectSection from "../components/ConnectSection";
import Footer from "../components/Footer";

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
                    <img src="/projects/logo.png" alt="Logo" className="h-9 w-auto" />
                </div>
                <div className="flex gap-8 text-sm tracking-wider">
                    <a
                        href="#work"
                        className="text-gray-300 hover:text-white nav-link"
                    >
                        WORK
                    </a>
                    <a
                        href="https://drive.google.com/file/d/19PVm74L-MdBolWdbnC83FanIladvf8xU/view?usp=drive_link"
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
                <h2 className="text-5xl md:text-6xl font-bold mb-12 scroll-fade-in delay-100 lowercase text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">hey there!</h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 scroll-fade-in delay-300">
                    I'm <span className="font-bold mb-12 scroll-fade-in delay-100 underline text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]" style={{ fontFamily: "'Gilroy-Bold', 'Gilroy-Bold Placeholder', sans-serif" }}>Yash Raj</span>, a passionate developer and designer based in{" "}
                    <span className="text-white font-semibold">India</span>. I create
                    beautiful, functional web experiences that make an impact. Always
                    learning, always building!
                </p>

                <div className="relative inline-flex items-center gap-3 px-7 py-1.5 mt-8 bg-zinc-900/50 border border-zinc-800 rounded-sm backdrop-blur-md overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl hover:border-zinc-700 transition-all duration-500 scroll-fade-in delay-500">
                    {/* Glare effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                    <span className="text-xl relative z-10">
                        <img width="17" height="17" src="https://img.icons8.com/material/50/new-post.png" style={{ filter: "invert(1)" }} alt="new-post" /></span>
                    <a href="mailto:yashrajz.me@gmail.com" className="scroll-fade-in delay-100 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">yashrajz.me@gmail.com</a>
                </div>

                {/* Laptop Tooltip */}
                {showTooltip && (
                    <div className="inline-flex md:hidden items-center gap-3 mt-16 bg-[#1a1a1a] border border-gray-800 rounded px-6 py-3 text-sm text-gray-300 scroll-fade-in delay-700">
                        <span className="">
                            <img width="25" height="25" src="https://img.icons8.com/material/50/laptop.png" alt="laptop" />
                        </span>
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
            {/* Skills Section - Framer Motion */}
            <SkillsSection />

            {/* Projects Section - Framer Motion */}
            <ProjectsSection />

            {/* Origins / About Section */}
            <OriginsSection />

            {/* What I Love / Interests Section */}
            <InterestsSection />

            {/* Connect / QR Code Section */}
            <ConnectSection />


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

            {/* Final Footer */}
            <Footer />
        </div>
    );
}
