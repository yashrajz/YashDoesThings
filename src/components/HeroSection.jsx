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

// Slide up animation for name rows
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

// Diamond moving up and down animation
const diamondVariants = {
    animate: {
        y: [0, -60, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Reverse Diamond animation
const diamondReverseVariants = {
    animate: {
        y: [0, 60, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const DiamondSVG = () => (
    <svg width="19" height="19" viewBox="0 0 19 19">
        <path d="M 0.511 9.598 L 9.41 0.511 L 18.496 9.408 L 9.409 18.496 Z" fill="rgb(0,0,0)" strokeWidth="0.28" stroke="rgb(148, 148, 148)" strokeMiterlimit="10" />
        <path d="M 6.102 10.78 L 6.109 10.781 L 6.115 10.78 L 18.443 9.462 L 9.408 18.496 L 0.578 9.666 Z" fill="transparent" strokeWidth="0.28" stroke="rgb(148, 148, 148)" strokeMiterlimit="10" />
        <path d="M 9.318 0.605 L 6.072 10.727 L 6.067 10.741 L 6.073 10.755 L 9.289 18.377 L 0.511 9.598 Z" fill="transparent" strokeWidth="0.28" stroke="rgb(148, 148, 148)" strokeMiterlimit="10" />
        <path d="M 6.083 10.692 L 0.536 9.574 L 5.055 5.055 L 5.055 5.055 L 5.056 5.054 L 9.316 0.609 Z" fill="rgb(255,255,255)" strokeWidth="0.08" stroke="rgb(255,255,255)" strokeMiterlimit="10" />
    </svg>
);

export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20 pb-15 overflow-hidden bg-black mb-48">

            {/* Background Graphic Cluster */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[400px] scale-110 md:scale-150">

                    {/* Left Line Group */}
                    <div className="absolute left-[-30px] top-[45%] h-[138px] flex flex-col items-center">
                        <svg viewBox="0 0 4 138" height="100%" width="4" className="opacity-50">
                            <path d="M 1.8 138 L 1.8 0" fill="transparent" strokeWidth="0.8" stroke="rgba(255,255,255,0.46)" strokeMiterlimit="10" strokeDasharray="4 4" />
                        </svg>
                        {/* <motion.div className="absolute top-0" variants={diamondVariants} animate="animate" style={{ marginTop: '20px' }}>
                            <DiamondSVG />
                        </motion.div> */}
                        <motion.div className="absolute top-0" variants={diamondVariants} animate="animate" transition={{ delay: 1 }} style={{ marginTop: '80px' }}>
                            <DiamondSVG />
                        </motion.div>
                    </div>

                    {/* Laptop Wireframe - Positioned center-left */}
                    <div className="absolute left-[0] top-[40%] w-[180px] md:w-[240px]">
                        <svg viewBox="0 0 180 107" width="100%" height="100%">
                            <path d="M 2 7.589 C 2 4.088 4.848 1.25 8.361 1.25 L 171.479 1.25 C 174.992 1.25 177.84 4.088 177.84 7.589 L 177.84 105.337 L 2 105.337 Z" fill="rgb(0,0,0)" />
                            <path d="M 177.84 105.337 L 177.84 7.589 C 177.84 4.088 174.992 1.25 171.479 1.25 L 8.361 1.25 C 4.848 1.25 2 4.088 2 7.589 L 2 105.337" fill="transparent" strokeWidth="0.48" stroke="rgb(117,117,117)" strokeMiterlimit="10" />
                            <path d="M 6.656 105.337 L 6.656 8.635 C 6.656 7.119 7.889 5.89 9.411 5.89 L 80.508 5.89 C 81.015 5.89 81.427 6.299 81.427 6.805 L 81.427 9.55 C 81.427 10.055 81.838 10.465 82.345 10.465 L 97.954 10.465 C 98.462 10.465 98.873 10.055 98.873 9.55 L 98.873 6.805 C 98.873 6.299 99.284 5.89 99.791 5.89 L 170.43 5.89 C 171.951 5.89 173.184 7.119 173.184 8.635 L 173.184 105.337" fill="transparent" strokeWidth="0.48" stroke="rgb(117,117,117)" strokeMiterlimit="10" />
                        </svg>
                    </div>

                    {/* Top/Center Line Group - Above Phone*/}
                    <div className="absolute left-[120px] md:left-[140px] md:top-[-20px] top-[-55px] h-[178px] flex flex-col items-center">
                        <svg viewBox="0 0 3 178" height="100%" width="3" className="opacity-50">
                            <path d="M 1.8 178 L 1.8 0" fill="transparent" strokeWidth="0.8" stroke="rgba(255,255,255,0.46)" strokeMiterlimit="10" strokeDasharray="4 4" />
                        </svg>
                        <motion.div className="absolute top-0" variants={diamondReverseVariants} animate="animate" transition={{ delay: 1.5 }} style={{ marginTop: '90px' }}>
                            <DiamondSVG />
                        </motion.div>
                        
                    </div>

                    {/* Phone Wireframe - Overlapping/Next to Laptop */}
                    <div className="absolute left-[130px] md:left-[140px] md:top-[-25%] w-[180px] md:w-[400px]">
                        <svg viewBox="0 0 240 292" width="100%" height="100%">
                            <path d="M 73.466 84.534 L 158.737 84.534 L 158.737 84.054 L 73.466 84.054 Z M 178.197 103.948 L 178.197 244.054 L 178.677 244.054 L 178.677 103.948 Z M 54.007 244.054 L 54.007 103.948 L 53.527 103.948 L 53.527 244.054 Z M 158.737 84.534 C 169.484 84.534 178.197 93.226 178.197 103.948 L 178.677 103.948 C 178.677 92.961 169.75 84.054 158.737 84.054 Z M 73.466 84.054 C 62.454 84.054 53.527 92.961 53.527 103.948 L 54.007 103.948 C 54.007 93.226 62.719 84.534 73.466 84.534 Z" fill="rgb(117,117,117)" />
                            <g>
                                <defs>
                                    <path d="M 53.767 103.948 C 53.767 93.093 62.587 84.294 73.466 84.294 L 158.737 84.294 C 169.617 84.294 178.437 93.093 178.437 103.948 L 178.437 244.054 L 53.767 244.054 Z" id="phoneClipA" />
                                    <clipPath id="phoneClipPathA"><use xlinkHref="#phoneClipA" /></clipPath>
                                </defs>
                                <use xlinkHref="#phoneClipA" fill="rgb(0,0,0)" clipPath="url(#phoneClipPathA)" strokeWidth="0.6" stroke="rgb(116, 116, 116)" strokeMiterlimit="10" />
                            </g>
                            <path d="M 51.114 148.31 L 51.114 136.799 L 53.647 136.799 L 53.647 148.31 Z" fill="rgb(0,0,0)" strokeWidth="0.43" stroke="rgb(117,117,117)" strokeDasharray="2 2" />
                            <path d="M 51.114 178.634 L 51.114 158.418 L 53.647 158.418 L 53.647 178.634 Z" fill="rgb(0,0,0)" strokeWidth="0.43" stroke="rgb(117,117,117)" strokeDasharray="2 2" />
                            <path d="M 178.581 198.288 L 178.581 165.718 L 181.114 165.718 L 181.114 198.288 Z" fill="rgb(0,0,0)" strokeWidth="0.43" stroke="rgb(117,117,117)" strokeDasharray="2 2" />
                            <path d="M 51.234 203.623 L 51.234 183.407 L 53.767 183.407 L 53.767 203.623 Z" fill="rgb(0,0,0)" strokeWidth="0.43" stroke="rgb(117,117,117)" strokeDasharray="2 2" />
                            <path d="M 103.016 102.263 C 99.908 102.263 97.388 99.749 97.388 96.648 L 97.388 96.648 C 97.388 93.547 99.908 91.033 103.016 91.033 L 129.188 91.033 C 132.297 91.033 134.817 93.547 134.817 96.648 L 134.817 96.648 C 134.817 99.749 132.297 102.263 129.188 102.263 Z" fill="rgb(0,0,0)" strokeWidth="0.43" stroke="rgb(117,117,117)" />
                            <path d="M 124.967 96.648 C 124.967 94.477 126.731 92.717 128.907 92.717 C 131.083 92.717 132.847 94.477 132.847 96.648 C 132.847 98.819 131.083 100.579 128.907 100.579 C 126.731 100.579 124.967 98.819 124.967 96.648 Z" fill="rgb(0,0,0)" strokeWidth="0.43" stroke="rgb(117,117,117)" />
                            <path d="M 126.936 96.648 C 126.936 95.563 127.818 94.683 128.906 94.683 C 129.994 94.683 130.876 95.563 130.876 96.648 C 130.876 97.734 129.994 98.613 128.906 98.613 C 127.818 98.613 126.936 97.734 126.936 96.648 Z" fill="rgb(117,117,117)" strokeWidth="0.43" stroke="rgb(117,117,117)" />
                            <path d="M 128.906 96.367 C 128.906 95.902 129.284 95.525 129.75 95.525 C 130.217 95.525 130.595 95.902 130.595 96.367 C 130.595 96.833 130.217 97.21 129.75 97.21 C 129.284 97.21 128.906 96.833 128.906 96.367 Z" fill="rgb(0,0,0)" strokeWidth="0.43" stroke="rgb(117,117,117)" />
                        </svg>
                    </div>

                    {/* Right Line Group */}
                    <div className="absolute left-[330px] md:left-[500px] top-[8%] h-[167px] flex flex-col items-center">
                        <svg viewBox="0 0 3 167" height="100%" width="3" className="opacity-50">
                            <path d="M 1.8 167 L 1.8 0" fill="transparent" strokeWidth="0.8" stroke="rgba(255,255,255,0.46)" strokeMiterlimit="10" strokeDasharray="4 4" />
                        </svg>
                        {/* <motion.div className="absolute top-0" variants={diamondVariants} animate="animate" transition={{ delay: 0.8 }} style={{ marginTop: '30px' }}>
                            <DiamondSVG />
                        </motion.div> */}
                        <motion.div className="absolute top-0" variants={diamondVariants} animate="animate" transition={{ delay: 1.8 }} style={{ marginTop: '100px' }}>
                            <DiamondSVG />
                        </motion.div>
                    </div>

                    {/* Overlay for Fade Effect */}
                    <div className="absolute -bottom-20 left-[-50%] right-[-50%] h-[300px] bg-gradient-to-t from-black via-black to-transparent z-0 pointer-events-none"></div>

                </div>
            </div>

            {/* Main Text Overlapping */}
            <motion.div
                className="relative z-10 text-center mt-20 md:mt-40 flex flex-col items-center justify-center"
                variants={heroContainerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="font-bold tracking-tight leading-[0.5] flex flex-col items-center justify-center">
                    <motion.span
                        variants={nameVariants}
                        className="text-7xl md:text-[160px] lowercase text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] z-10"
                        style={{ fontFamily: "'Gilroy-Bold', 'Gilroy-Bold Placeholder', sans-serif" }}
                    >
                        yash
                    </motion.span>
                    <motion.span
                        variants={nameVariants}
                        className="text-7xl md:text-[160px] lowercase text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] z-10 -mt-2 md:-mt-14"
                        style={{ fontFamily: "'Gilroy-Bold', 'Gilroy-Bold Placeholder', sans-serif" }}
                    >
                        raj
                    </motion.span>
                </h1>
                <motion.p
                    className="text-sm md:text-xl tracking-wide font-light " style={{ fontFamily: "'Gilroy-Bold', 'Gilroy-Bold Placeholder', sans-serif", color: "rgb(243, 243, 243)" }}
                    variants={taglineVariants}
                >
                    designing for impact and delight
                </motion.p>
            </motion.div>

        </section>
    );
}
