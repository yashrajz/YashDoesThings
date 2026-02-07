
import React from 'react';
import { motion } from 'framer-motion';

const ConnectSection = () => {
    return (
        <section id="connect" className="relative w-full py-40 flex flex-col items-center justify-center px-4 overflow-hidden bg-black text-white">

            {/* Header Text */}
            <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-center leading-tight mb-12 drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
                style={{ fontFamily: "'Gilroy-Bold', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                well, that's my story<br />
                what's yours?
            </motion.h2>

            {/* The Dome / Globe Container */}
            <div className="relative group perspective-1000 mt-8">

                {/* 1. Main Globe/Dome SVG */}
                <div className="relative w-[300px] md:w-[600px] h-auto z-10 select-none">
                    <img
                        src="/projects/QR_Globe.svg"
                        alt="Dome Structure"
                        draggable={false}
                        className="w-full h-full object-contain drop-shadow-2xl select-none"
                    />
                </div>

                {/* 2. The QR Code Sticker (Floating inside) */}
                <motion.div
                    className="absolute top-[30%] left-[37%] -translate-x-1/2 -translate-y-1/2 z-20 w-[70px] h-[70px] md:w-[150px] md:h-[150px]"
                    animate={{
                        y: [0, -10, 0],
                        rotate: [2, -2, 2]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <a
                        href="https://wa.me/919122024500"
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable={false}
                        className="block w-full h-full bg-white p-2 shadow-[0_0_25px_rgba(255,255,255,0.25)] transform rotate-3 select-none"
                    >
                        {/* Using the provided code.svg */}
                        <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden">
                            <img
                                src="/projects/code.svg"
                                alt="Scan QR"
                                draggable={false}
                                className="w-full h-full object-contain select-none"
                            />
                        </div>
                    </a>
                </motion.div>

                {/* 3. Floating Particles (Stars) */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full opacity-0"
                            style={{
                                width: Math.random() < 0.5 ? '2px' : '4px',
                                height: Math.random() < 0.5 ? '2px' : '4px',
                                top: `${Math.random() * 60 + 10}%`,
                                left: `${Math.random() * 60 + 20}%`,
                            }}
                            animate={{
                                y: [-10, -20],
                                opacity: [0, 0.8, 0],
                                scale: [0, 1.2, 0]
                            }}
                            transition={{
                                duration: Math.random() * 2 + 3,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* 4. Scan Text Overlay (if needed, positioned at bottom of dome) */}
                {/* <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase opacity-80">
                        Scan to Connect
                    </span>
                </div> */}

                {/* Glow behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full -z-10" />

            </div>

        </section>
    );
};

export default ConnectSection;
