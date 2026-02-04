"use client";

import { motion } from "framer-motion";

const skills = [
    // Row 1
    ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    // Row 2
    ["GSAP", "Three.js", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Git", "Vite"],
    // Row 3
    ["Responsive Design", "Performance Optimization", "UI/UX Design", "Figma", "Accessibility", "SEO", "Redux"],
    // Row 4
    ["Context API", "React Router", "Webpack", "npm"],
];

// Flatten all skills into a single array for cloud layout
const allSkills = skills.flat();

// Container animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.05, // Initial delay before animation starts
            staggerChildren: 0.05, // Stagger delay between children
        },
    },
};

// Individual skill tag animation variants
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 60, // Start from 60px below
    },
    visible: {
        opacity: 1,
        y: 0, // End at original position
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

// Hover animation variants
const hoverVariants = {
    scale: 1.1,
    transition: {
        duration: 0.2,
    },
};

export default function SkillsSection() {
    return (
        <section className="max-w-6xl mx-auto px-8 py-32" id="stack">
            <motion.h2
                className="text-5xl md:text-6xl font-bold text-center mb-20 lowercase text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Stack I Ship With
            </motion.h2>

            {/* Stagger container with cloud layout */}
            <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }} // Trigger when 20% visible
            >
                {allSkills.map((skill, index) => (
                    <motion.span
                        key={`${skill}-${index}`}
                        className="skill-tag-motion"
                        variants={itemVariants}
                        whileHover={hoverVariants}
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
}
