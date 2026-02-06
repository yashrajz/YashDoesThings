import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectPreview = ({ image, link, title }) => {
    const ref = useRef(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for the mouse movement
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Calculate rotation based on mouse position relative to center
    // Range: -20 to 20 degrees
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Add some shine/glare effect that moves opposite
    const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate normalized position (-0.5 to 0.5)
        // 0,0 is the center
        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = (mouseXPos / width) - 0.5;
        const yPct = (mouseYPos / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
            }}
            className="w-full relative group cursor-pointer"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
            >
                {/* Browser Header */}
                <div className="h-10 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />

                    {/* URL Bar (Decorative) */}
                    <div className="ml-4 flex-1 h-6 bg-white/5 rounded-md flex items-center px-3 text-[10px] text-gray-500 font-mono overflow-hidden">
                        {link ? link.replace('https://', '') : 'loading...'}
                    </div>
                </div>

                {/* Content Container */}
                <div className="relative aspect-video bg-[#050505] overflow-hidden">
                    {image ? (
                        <motion.img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                            <span className="text-gray-700 font-bold text-lg uppercase tracking-widest">Preview</span>
                        </div>
                    )}

                    {/* Overlay / Glare */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-20 mix-blend-overlay"
                        style={{
                            x: useTransform(mouseX, [-0.5, 0.5], ["-50%", "50%"]),
                            y: useTransform(mouseY, [-0.5, 0.5], ["-50%", "50%"]),
                            opacity: useTransform(mouseX, [-0.5, 0, 0.5], [0, 0.4, 0]), // Only visible on movement
                        }}
                    />

                    {/* Scanline Effect (Optional, subtle) */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-10" />
                </div>

                {/* Reflection on top of browser header */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent h-1/2 pointer-events-none" />

            </motion.div>

            {/* Shadow beneath */}
            <motion.div
                style={{
                    scale: 0.9,
                    opacity: 0.4,
                    filter: "blur(20px)"
                    //  rotateX: rotateX, // Invert shadow movement slightly if desired
                }}
                className="absolute -bottom-10 left-0 right-0 h-10 bg-black/50 z-[-1]"
            />
        </motion.div>
    );
};

export default ProjectPreview;
