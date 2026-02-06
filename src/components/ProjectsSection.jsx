"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router';
import { slideUp, staggerContainer } from '../utils/animations';
import TitleDecoration from './TitleDecoration';
import ProjectCursor from './ProjectCursor';
import React, { useState } from 'react';
import { projects } from '../data/projects';
import './Projects.css';

const ProjectsSection = () => {
    const [cursorActive, setCursorActive] = React.useState(false);

    return (
        <section className="relative py-32" id="work">
            <ProjectCursor isActive={cursorActive} />
            <div className="projects-container mx-auto px-4">
                <motion.div
                    className="w-full mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-center lowercase drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                        style={{
                            fontFamily: "'Gilroy-Bold', 'Gilroy-Bold Placeholder', sans-serif",
                            fontWeight: 600,
                            fontSize: '54px',
                            lineHeight: '58.44px',
                            color: 'rgb(243, 243, 243)',
                            letterSpacing: '-0.03em'
                        }}>
                        <div className="flex items-center justify-center gap-8 md:gap-16">
                            <TitleDecoration />
                            <span>A quick bite of <br />my work</span>
                            <TitleDecoration />
                        </div>
                    </h2>
                </motion.div>

                {/* Custom Scrollbar Hide Styles */}
                <style jsx global>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>

                <div className="relative">
                    <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-8 px-4 pb-8 snap-x snap-mandatory no-scrollbar" style={{ scrollBehavior: 'smooth' }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 snap-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/projects/${project.slug}`}
                                    className="project-card w-[350px] h-[550px] block text-inherit no-underline"
                                    onMouseEnter={() => setCursorActive(true)}
                                    onMouseLeave={() => setCursorActive(false)}
                                >
                                    <motion.div
                                        className="project-card-inner h-full flex flex-col border-2 mt-4 border-[var(--color-border)] rounded-3xl bg-black overflow-hidden transition-all duration-300 ease-in-out"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Top: Description */}
                                        <div className="card-top p-0 border-b border-[var(--color-border)] flex-grow flex items-start">
                                            <div>
                                                <p className="project-description text-lg leading-relaxed text-[var(--color-text)] transition-colors duration-400" style={{ textAlign: 'center' }}>
                                                    {project.description}
                                                </p>
                                                <p className="project-tagline text-sm italic text-[var(--color-text-secondary)] mt-4 transition-colors duration-400" style={{ textAlign: 'center' }}>
                                                    {project.tagline}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Middle: Title & Meta */}
                                        <div className="card-middle p-6 pt-2 border-b border-[var(--color-border)]" style={{ textAlign: 'center' }}>
                                            <h3 className="project-name font-extrabold uppercase mb-2 text-white transition-colors duration-400"
                                                style={{ fontFamily: "'Gilroy-Bold', sans-serif", fontSize: '23.5px' }}>
                                                {project.name}
                                            </h3>
                                            <div className="project-tags flex gap-2 flex-wrap text-xs font-bold uppercase tracking-wider" style={{ textAlign: 'center', justifyContent: 'center' }}>
                                                <span className="project-category">{project.category}</span>
                                                {/* <span className="text-gray-500">|</span> */}
                                                <span className="project-status text-[#00ff88]">{project.status}</span>
                                            </div>
                                        </div>

                                        {/* Bottom: View Button */}
                                        <div className="card-bottom p-6 flex items-end justify-center h-24">
                                            <span className="project-link-text text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-lg border border-transparent transition-all duration-400">
                                                VIEW
                                            </span>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    {/* Subtle Gradient Indicator */}
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-black/60 to-transparent pointer-events-none z-10" />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
