import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full bg-[#E5E5E5] py-24 px-8 md:px-16 overflow-hidden">
            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative">

                {/* Left: Name */}
                <div className="flex flex-col select-none z-10">
                    <h1
                        className="text-[15vw] md:text-[11vw] leading-[0.8] font-black tracking-tighter text-[#C8C8C8] mix-blend-difference"
                        style={{ fontFamily: "'Gilroy-Bold', sans-serif" }}
                    >
                        yash
                    </h1>
                    <h1
                        className="text-[15vw] md:text-[11vw] leading-[0.8] font-black tracking-tighter text-[#C8C8C8] mix-blend-difference"
                        style={{ fontFamily: "'Gilroy-Bold', sans-serif" }}
                    >
                        raj.
                    </h1>
                </div>

                {/* Right: Buttons */}
                <div className="flex flex-col gap-4 w-full md:w-auto z-10 mb-2">

                    {/* LinkedIn Button */}
                    <a
                        href="https://www.linkedin.com/in/yash-rajz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between px-8 py-5 bg-transparent border border-zinc-400 rounded-2xl hover:bg-white hover:border-transparent transition-all duration-300 w-full md:w-[320px]"
                    >
                        <div className="flex items-center gap-4">
                            {/* LinkedIn Icon */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-black group-hover:scale-110 transition-transform duration-300"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <span className="font-semibold text-xl tracking-tight text-black">LinkedIn</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>

                    {/* Connect Button */}
                    <a
                        href="#connect"
                        className="group flex items-center justify-center px-8 py-5 bg-black text-white rounded-2xl hover:bg-zinc-800 transition-all duration-300 w-full md:w-[320px] shadow-xl hover:shadow-2xl"
                    >
                        <span className="font-bold text-sm tracking-[0.2em] uppercase">LET'S CONNECT</span>
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
