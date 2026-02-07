import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="relative w-full aspect-[1.6/1] rounded-[32px] overflow-hidden group cursor-pointer border border-white/10 bg-[#0a0a0a]"
            initial="initial"
            whileHover="hover"
        >
            {/* Header Content */}
            <div className="absolute top-0 left-0 right-0 p-8 z-20 flex justify-between items-start">
                <div className="max-w-[80%]">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-snug" style={{ fontFamily: "'Gilroy-Bold', sans-serif", fontWeight: "700" }}>
                        {project.tagline}
                    </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
                </div>
            </div>

            {/* Images Container */}
            <div className="absolute inset-0 top-24 px-8 pb-0 overflow-hidden">
                {/* Main Image (Back) */}
                <motion.div
                    className="relative w-full h-full rounded-t-xl overflow-hidden shadow-2xl origin-bottom"
                    variants={{
                        initial: { scale: 1, y: 0, rotate: 0 },
                        hover: { scale: 0.95, y: 30, rotate: -2 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Browser Header */}
                    <div className="h-6 bg-[#1a1a1a] flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                    {/* Image Content */}
                    <div className="w-full h-full bg-gray-900 border-x border-b border-white/10 relative">
                        {project.image ? (
                            <img src={project.image} alt={project.name} className="w-full h-auto min-h-full object-cover object-top opacity-80 group-hover:opacity-40 transition-opacity" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500 font-bold uppercase tracking-widest text-xs">
                                {project.name} Preview
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Second Image (Front/Hover) */}
                <motion.div
                    className="absolute right-0 bottom-0 w-[85%] h-[80%] rounded-tl-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-l border-white/20 z-10 bg-[#050505]"
                    variants={{
                        initial: { x: "100%", y: "20%", rotate: 5, opacity: 0 },
                        hover: { x: "5%", y: "5%", rotate: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} // smooth bezier
                >
                    {/* Browser Header */}
                    <div className="h-6 bg-[#222] flex items-center px-3 gap-1.5 border-b border-white/5">
                        <div className="w-2 h-2 rounded-full bg-gray-600" />
                        <div className="w-2 h-2 rounded-full bg-gray-600" />
                    </div>
                    <div className="w-full h-full relative">
                        {/* We use the same image but zoomed or a placeholder if no second image exists */}
                        {project.hoverImage || project.image ? (
                            <img src={project.hoverImage || project.image} alt="Detail" className="w-full h-full object-cover object-center" />
                        ) : (
                            <div className="w-full h-full bg-gray-900" />
                        )}


                    </div>
                </motion.div>

                {/* Custom Cursor Trigger Area */}
                {/* The entire card is clickable via Link in parent */}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
