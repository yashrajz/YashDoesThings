"use client";

import { motion } from "framer-motion";

// Container animation for sequential reveal
const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

// Slide up animation for name rows (60px offset)
const nameVariants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

// Fade in animation for tagline
const taglineVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

// Decorative elements fade and scale
const decorativeVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20 pb-32">
            {/* Device Wireframes and Decorations */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Left vertical line */}
                <motion.div
                    className="absolute left-[15%] top-[20%] w-px h-64 bg-gray-800"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "16rem", opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                />

                {/* Tablet wireframe */}
                <motion.div
                    className="absolute left-[20%] top-[25%] w-48 h-64 border-2 border-gray-800 rounded-lg device-hover pointer-events-auto"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full" />
                </motion.div>

                {/* Top decoration */}
                <motion.div
                    className="absolute top-[15%] left-1/2 -translate-x-1/2"
                    variants={decorativeVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                >
                    <div className="w-px h-16 bg-gray-800 relative">
                        <div className="absolute -top-2 -left-1 w-3 h-3 border-t-2 border-r-2 border-gray-800 rotate-45" />
                    </div>
                </motion.div>

                {/* Phone wireframe */}
                <motion.div
                    className="absolute right-[25%] top-[20%] w-32 h-56 border-2 border-gray-800 rounded-3xl device-hover pointer-events-auto"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-gray-800 rounded-full" />
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full" />
                </motion.div>

                {/* Right decoration */}
                <motion.div
                    className="absolute right-[20%] top-[28%]"
                    variants={decorativeVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                >
                    <div className="w-3 h-3 bg-white rounded-full relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gray-800 rotate-45" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-gray-800 -rotate-45" />
                    </div>
                </motion.div>

                {/* Right vertical line */}
                <motion.div
                    className="absolute right-[15%] top-[30%] w-px h-48 bg-gray-800"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "12rem", opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                />

                {/* Left arrow decoration */}
                <motion.div
                    className="absolute left-[18%] top-1/2 -translate-y-1/2 arrow-left pointer-events-auto cursor-pointer"
                    variants={decorativeVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M15 18l-6-6 6-6"
                            stroke="#333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>

                {/* Right arrow decoration */}
                <motion.div
                    className="absolute right-[18%] top-1/2 -translate-y-1/2 arrow-right pointer-events-auto cursor-pointer"
                    variants={decorativeVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9 18l6-6-6-6"
                            stroke="#333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
            </div>

            {/* Main Text with Stagger Container */}
            <motion.div
                className="relative z-10 text-center"
                variants={heroContainerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-4">
                    <motion.div variants={nameVariants}>yash</motion.div>
                    <motion.div variants={nameVariants}>raj</motion.div>
                </h1>
                <motion.p
                    className="text-gray-400 text-sm md:text-base tracking-wide"
                    variants={taglineVariants}
                >
                    designing for impact and delight
                </motion.p>
            </motion.div>

            {/* Sparkle decorations */}
            <motion.div
                className="absolute top-[15%] right-[25%] w-3 h-3"
                variants={decorativeVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.0 }}
            >
                <motion.div
                    className="w-full h-px bg-white absolute top-1/2 left-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="h-full w-px bg-white absolute left-1/2 top-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </section>
    );
}
