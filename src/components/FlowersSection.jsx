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

export default function FlowersSection() {
    return (
        <div className="relative">
            {/* SVG Definitions */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    {/* Flower 1 - 80x80 */}
                    <g id="flower_80">
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
                    </g>

                    {/* Flower 2 - 100x100 */}
                    <g id="flower_100">
                        <g transform="translate(50, 50)">
                            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                                <ellipse
                                    key={`large-${i}`}
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
                    </g>
                </defs>
            </svg>

            <div className="flex justify-center gap-16 items-start">
                {/* Flower 1 */}
                <motion.div
                    className="relative flex flex-col items-center"
                    variants={flowerFadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Rotating Flower */}
                    <motion.div
                        className="relative"
                        style={{
                            width: '80px',
                            height: '80px',
                            transformOrigin: 'center center'
                        }}
                        variants={flowerRotationVariants}
                        animate="animate"
                    >
                        <svg
                            style={{ width: '100%', height: '100%', overflow: 'visible' }}
                            viewBox="0 0 80 80"
                            preserveAspectRatio="xMidYMid meet"
                            width="100%"
                            height="100%"
                        >
                            <use href="#flower_80" />
                        </svg>
                    </motion.div>

                    {/* Breathing Stem - starts from center */}
                    <motion.div
                        className="w-px h-32 bg-gray-800"
                        style={{
                            transformOrigin: "top",
                            marginTop: '-40px'
                        }}
                        variants={stemBreathingVariants}
                        animate="animate"
                    />
                </motion.div>

                {/* Flower 2 */}
                <motion.div
                    className="relative flex flex-col items-center"
                    variants={flowerFadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Rotating Flower */}
                    <motion.div
                        className="relative"
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
                        <svg
                            style={{ width: '100%', height: '100%', overflow: 'visible' }}
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid meet"
                            width="100%"
                            height="100%"
                        >
                            <use href="#flower_100" />
                        </svg>
                    </motion.div>

                    {/* Breathing Stem - starts from center */}
                    <motion.div
                        className="w-px h-48 bg-gray-800"
                        style={{
                            transformOrigin: "top",
                            marginTop: '-50px'
                        }}
                        variants={stemBreathingVariants}
                        animate="animate"
                    />
                </motion.div>
            </div>
        </div>
    );
}
