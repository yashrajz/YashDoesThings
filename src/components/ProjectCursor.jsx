import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Eye } from 'lucide-react';

const ProjectCursor = ({ isActive }) => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [mounted, setMounted] = useState(false);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        setMounted(true);
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    if (!mounted) return null;

    return createPortal(
        <motion.div
            style={{
                translateX: springX,
                translateY: springY,
                x: "-50%", // Center the cursor on the mouse
                y: "-50%",
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
                pointerEvents: 'none',
            }}
            animate={{
                scale: isActive ? 1 : 0,
                opacity: isActive ? 1 : 0,
            }}
            transition={{
                duration: 0.2, // Fast transition for appearance
                ease: "easeInOut"
            }}
        >
            <div className="relative flex items-center justify-center w-24 h-24 bg-[#0a0a0a]/65 rounded-full border border-white/10 shadow-2xl backdrop-blur-md">
                {/* Rotating Text Ring */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "linear"
                    }}
                >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text className="fill-white text-[11px] font-bold tracking-widest uppercase" style={{ letterSpacing: '0.14em' }}>
                            <textPath href="#circlePath" startOffset="0%">
                                VIEW DETAILS • VIEW DETAILS •
                            </textPath>
                        </text>
                    </svg>
                </motion.div>

                {/* Inner Circle with Icon */}
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-white/10 rounded-full backdrop-blur-sm">
                    <Eye size={20} className="text-white" strokeWidth={2} />
                </div>
            </div>
        </motion.div>,
        document.body
    );
};

export default ProjectCursor;
