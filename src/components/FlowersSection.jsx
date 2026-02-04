"use client";

import { motion } from "framer-motion";

// Flower rotation animation - continuous infinite rotation
const flowerRotationVariants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 5, // Slow, smooth rotation
            repeat: Infinity,
            ease: "linear",
        },
    },
};

// Flower fade up when scrolled into view
const flowerFadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 30,
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

// Stem breathing animation
const stemBreathingVariants = {
    animate: {
        scaleY: [1, 1.05, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// SVG Component for the new flower
const FlowerSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 117" width="100%" height="100%">
        <path d="M 82.332 114.564 C 91.145 92.113 80.176 66.745 57.762 57.784 C 80.099 66.879 105.582 56.262 114.879 34.007 L 115.108 33.442 L 114.542 33.213 C 92.091 24.401 66.724 35.37 57.762 57.784 C 66.857 35.447 56.241 9.963 33.985 0.666 L 33.42 0.437 L 33.191 1.003 C 24.379 23.454 35.348 48.822 57.762 57.784 C 35.425 48.689 9.941 59.305 0.644 81.56 L 0.415 82.126 L 0.981 82.354 C 23.432 91.167 48.8 80.198 57.762 57.784 C 48.667 80.12 59.283 105.604 81.538 114.901 L 82.104 115.13 Z" fill="rgb(0,0,0)"></path>
        <path d="M 57.762 57.784 C 80.176 66.745 91.145 92.113 82.332 114.564 L 82.104 115.13 L 81.538 114.901 C 59.283 105.604 48.667 80.12 57.762 57.784 Z M 57.762 57.784 C 80.099 66.879 105.582 56.262 114.879 34.007 L 115.108 33.442 L 114.542 33.213 C 92.091 24.401 66.724 35.37 57.762 57.784 Z M 57.762 57.784 C 66.857 35.447 56.241 9.963 33.985 0.666 L 33.42 0.437 L 33.191 1.003 C 24.379 23.454 35.348 48.822 57.762 57.784 Z M 57.762 57.784 C 35.425 48.689 9.941 59.305 0.644 81.56 L 0.415 82.126 L 0.981 82.354 C 23.432 91.167 48.8 80.198 57.762 57.784 Z" fill="transparent" strokeWidth="0.8" stroke="rgb(99, 99, 99)" strokeMiterlimit="10"></path>
        <path d="M 34.986 115.308 C 57.093 105.664 67.275 79.97 57.762 57.784 C 67.126 80.01 92.652 90.523 114.963 81.36 L 115.525 81.122 L 115.286 80.56 C 105.642 58.454 79.949 48.272 57.762 57.784 C 79.988 48.421 90.501 22.894 81.338 0.583 L 81.1 0.022 L 80.538 0.26 C 58.432 9.904 48.25 35.598 57.762 57.784 C 48.399 35.559 22.872 25.046 0.562 34.208 L 0 34.447 L 0.238 35.008 C 9.882 57.115 35.576 67.296 57.762 57.784 C 35.537 67.148 25.024 92.674 34.186 114.985 L 34.425 115.547 Z" fill="rgb(0,0,0)"></path>
        <path d="M 57.762 57.784 C 67.275 79.97 57.093 105.664 34.986 115.308 L 34.425 115.547 L 34.186 114.985 C 25.024 92.674 35.537 67.148 57.762 57.784 Z M 57.762 57.784 C 67.126 80.01 92.652 90.523 114.963 81.36 L 115.525 81.122 L 115.286 80.56 C 105.642 58.454 79.949 48.272 57.762 57.784 Z M 57.762 57.784 C 79.988 48.421 90.501 22.894 81.338 0.583 L 81.1 0.022 L 80.538 0.26 C 58.432 9.904 48.25 35.598 57.762 57.784 Z M 57.762 57.784 C 48.399 35.559 22.872 25.046 0.562 34.208 L 0 34.447 L 0.238 35.008 C 9.882 57.115 35.576 67.296 57.762 57.784 Z" fill="transparent" strokeWidth="0.8" stroke="rgb(99, 99, 99)" strokeMiterlimit="10"></path>
        <path d="M 51.662 59.26 C 51.662 55.903 54.384 53.182 57.74 53.182 C 61.097 53.182 63.818 55.903 63.818 59.26 C 63.818 62.616 61.097 65.338 57.74 65.338 C 54.384 65.338 51.662 62.616 51.662 59.26 Z" fill="rgb(255,255,255)"></path>
    </svg>
);

export default function FlowersSection() {
    return (
        <div className="relative mb-12">
            <div className="flex justify-center gap-16 items-start">
                {/* Flower 1 */}
                <motion.div
                    className="relative flex flex-col items-center"
                    variants={flowerFadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {/* Breathing Stem - rendered first to be behind */}
                    <motion.div
                        className="w-px h-32 bg-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2"
                        style={{
                            transformOrigin: "top",
                        }}
                        variants={stemBreathingVariants}
                        animate="animate"
                    />

                    {/* Rotating Flower */}
                    <motion.div
                        className="relative z-10"
                        style={{
                            width: '80px',
                            height: '80px',
                            transformOrigin: 'center center'
                        }}
                        variants={flowerRotationVariants}
                        animate="animate"
                    >
                        <FlowerSVG />
                    </motion.div>
                </motion.div>

                {/* Flower 2 */}
                <motion.div
                    className="relative flex flex-col items-center -mt-16"
                    variants={flowerFadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Breathing Stem - rendered first to be behind */}
                    <motion.div
                        className="w-px h-48 bg-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2"
                        style={{
                            transformOrigin: "top",
                        }}
                        variants={stemBreathingVariants}
                        animate="animate"
                    />

                    {/* Rotating Flower */}
                    <motion.div
                        className="relative z-10"
                        style={{
                            width: '100px',
                            height: '100px',
                            transformOrigin: 'center center'
                        }}
                        variants={flowerRotationVariants}
                        animate="animate"
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <FlowerSVG />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
