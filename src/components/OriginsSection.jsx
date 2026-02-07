
import React from 'react';
import { motion } from 'framer-motion';

const OriginsSection = () => {
    return (
        <section className="relative w-full py-40 flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* Background elements if any */}

            {/* The Main Card Container */}
            <div className="relative z-10 w-full max-w-[998px] h-auto min-h-[432px] rounded-[40px] border border-[#474747e6] bg-black overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">

                {/* Content Side (Left) */}
                <div className="flex-1 space-y-6 z-20">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" style={{ fontFamily: "'Gilroy-Bold', sans-serif" }}>
                        was i always into<br />
                        computers?
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                        well <span className="text-white font-bold">NO</span> – before engineering, I was that kid who "helped" family by fixing the WiFi (aka restarting the router 47 times) and arguing it was hardware engineering.
                        So…
                        In a way <span className="text-white font-bold">YES</span> – just not the kind you'd expect.
                    </p>
                </div>

                {/* Illustration Side (Right) */}
                <div className="flex-1 w-full flex items-center justify-center relative z-20">
                    {/* mobius strip Illustration SVG */}
                    <div className="absolute inset-0 bg-white/5 blur-[40px] rounded-full" />
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Custom Origin SVG with Floating Animation */}
                        <motion.img
                            src="/projects/originSvg2.svg"
                            alt="Origins Illustration"
                            draggable="false"
                            className="w-full h-full object-contain select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* The Legs / Stand - Positioned below the card */}
            <div className="relative w-full max-w-[998px] h-24 -mt-1 flex justify-between px-20 opacity-50 pointer-events-none">
                {/* Left Leg */}
                <div className="w-[125px] h-[115px]">
                    <svg viewBox="0 0 125 115" className="w-full h-full">
                        <path d="M 102.673 0.139 L 119.307 57.526 L 124.847 114.861 L 0.153 114.861 L 5.693 57.526 L 22.327 0.139 Z" fill="rgb(10,10,10)" stroke="rgb(55, 55, 55)" strokeMiterlimit="10" />
                        <path d="M 102.673 0.139 L 119.26 57.361 L 5.74 57.361 L 22.327 0.139 Z" fill="rgb(5,5,5)" stroke="rgb(55, 55, 55)" strokeMiterlimit="10" />
                    </svg>
                </div>

                {/* Right Leg */}
                <div className="w-[125px] h-[115px]">
                    <svg viewBox="0 0 125 115" className="w-full h-full">
                        <path d="M 102.673 0.139 L 119.307 57.526 L 124.847 114.861 L 0.153 114.861 L 5.693 57.526 L 22.327 0.139 Z" fill="rgb(10,10,10)" stroke="rgb(55, 55, 55)" strokeMiterlimit="10" />
                        <path d="M 102.673 0.139 L 119.26 57.361 L 5.74 57.361 L 22.327 0.139 Z" fill="rgb(5,5,5)" stroke="rgb(55, 55, 55)" strokeMiterlimit="10" />
                    </svg>
                </div>
            </div>

        </section>
    );
};

export default OriginsSection;
