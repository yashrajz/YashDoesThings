
import React from 'react';
import { motion } from 'framer-motion';

const InterestsSection = () => {
    return (
        <section className="relative w-full py-32 flex flex-col items-center justify-center px-4 text-center overflow-hidden">

            {/* Cassette Tape Floating & Glowing */}
            <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 mb-12"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Glow effect behind the tape */}
                <div className="absolute inset-0 bg-white/20 blur-[80px] rounded-full" />

                <img
                    src="/projects/Cassette-Tape.svg"
                    alt="Cassette Tape"
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
                />

                {/* Floating bubbles/particles decoration similar to reference */}
                <motion.div
                    className="absolute -top-4 -left-8 w-4 h-4 border border-white/20 rounded-full"
                    animate={{ y: [0, -40], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute top-1/2 -right-12 w-3 h-3 border border-white/20 rounded-full"
                    animate={{ y: [0, -30], opacity: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
            </motion.div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]" style={{ fontFamily: "'Gilroy-Bold', sans-serif" }}>
                i thrive on music,<br />
                although that's not all
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                Music, stories, and chaos — that's the full playlist. I write stories that twist souls and used to spill poetry like it was oxygen. Binge Marvel epics, Rick and Morty multiverse madness, any web series that hits hard. Meanwhile, hustling with friends to build cool weird stuff —why pick one obsession when the multiverse has infinite tracks?  
            </p>

        </section>
    );
};

export default InterestsSection;
