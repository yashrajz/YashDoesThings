import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, ArrowRight, Zap, Globe, ChevronRight, Link as LinkIcon } from 'lucide-react';
import { projects } from '../../../data/projects';
import ProjectPreview from '../../../components/ProjectPreview';
import ProjectCard from '../../../components/ProjectCard';

const AccordionItem = ({ title, content, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border-white/10 ${!isLast ? 'border-b' : ''}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-2 hover:bg-white/5 transition-colors text-left group"
            >
                <div className="flex items-center gap-2">
                    <ChevronRight
                        size={20}
                        className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                    />
                    <span className="text-gray-400 text-lg " style={{ fontFamily: "'Gilroy-Light', sans-serif", fontWeight: "700" }}>{title}</span>
                </div>
                <LinkIcon size={18} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-2 pt-0 pl-10 text-gray-400 leading-relaxed border-t border-dashed border-white/5 mx-6 mt-0">
                            <p className="pt-2" style={{ fontFamily: "'Gilroy-Light', sans-serif", fontWeight: "600" }}>{content}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/" className="text-gray-400 hover:text-white underline">Return Home</Link>
            </div>
        );
    }

    const currentIndex = projects.findIndex(p => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

    return (
        <div className="min-h-screen bg-[#050505] text-[#E0E0E0] selection:bg-white/20 font-sans pb-20">
            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-sm bg-black/20 border-b border-white/5">
                <Link to="/#work" className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase hover:text-white transition-colors">
                    <div className="p-2 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <ArrowLeft size={16} />
                    </div>
                    <span>Back to Work</span>
                </Link>
                <div className="hidden md:block text-xs font-mono text-gray-500">
                    {project.category} // {project.status}
                </div>
            </nav>

            <main className="pt-32 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Hero Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-gray-500"
                                >
                                    <span>{project.category}</span>
                                    <span className="w-1 h-1 bg-gray-500 rounded-full" />
                                    <span className="text-[#00ff88]">{project.status}</span>
                                </motion.div>
                                <h1 className="text-5xl md:text-7xl text-white leading-tight tracking-tight" style={{ fontFamily: "'Gilroy-Bold', sans-serif" }}>
                                    {project.name}
                                </h1>
                                <p className="text-xl md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl" style={{ fontFamily: "'Gilroy-Light', sans-serif", fontWeight: "700" }}>
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-0">
                                {project.github && project.github !== project.link && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-6 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group"
                                    >
                                        <Github size={20} />
                                        <span className="font-bold tracking-wide text-sm">VIEW ON GITHUB</span>
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-200 transition-all duration-300"
                                    >
                                        <span className="font-bold tracking-wide text-sm">
                                            {project.link.includes('github.com') ? 'VIEW ON GITHUB' : 'CHECK IT OUT'}
                                        </span>
                                        {project.link.includes('github.com') ? <Github size={20} /> : <ExternalLink size={20} />}
                                    </a>
                                )}
                            </div>
                        </motion.section>

                        {/* Preview Image (Interactive Card) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-transparent"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ProjectCard project={project} />
                            </a>
                        </motion.div>

                        {/* Detailed Content */}
                        <div className="space-y-16" style={{ fontFamily: "'Gilroy-Bold', sans-serif" }}>
                            {/* Features - Accordion Style */}
                            <section id="features" className="scroll-mt-32">
                                <h3 className="text-2xl font-bold text-white mb-4" >
                                    Key Features
                                </h3>
                                <div className="border border-white/10 rounded-lg overflow-hidden bg-[#111]">
                                    {project.features?.map((feature, i) => (
                                        <AccordionItem
                                            key={i}
                                            title={feature.title}
                                            content={feature.description}
                                            isLast={i === project.features.length - 1}
                                        />
                                    ))}
                                </div>
                            </section>

                            {/* Tech Stack / Challenges Style List */}
                            <section id="challenges" className="scroll-mt-32">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Challenges & Learnings
                                </h3>
                                <ul className="space-y-6 list-disc list-outside ml-5 text-gray-300">
                                    {project.challenges?.map((challenge, i) => (
                                        <li key={i} className="pl-2">
                                            <span className="font-bold text-white underline decoration-white/30 underline-offset-4 mr-2">
                                                {challenge.title}
                                            </span>
                                            <span className="leading-relaxed" style={{ fontFamily: "'Gilroy-Light', sans-serif", fontWeight: "600" }}>
                                                – {challenge.description}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Outcome */}
                            <section id="outcome" className="scroll-mt-32" >
                                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Gilroy-Bold', sans-serif" }}>
                                    Outcome
                                </h3>
                                <ul className="space-y-6 list-disc list-outside ml-5 text-gray-300">
                                    <li className="pl-2" style={{ fontFamily: "'Gilroy-Light', sans-serif", fontWeight: "600" }}>
                                        <span className="font-bold text-white underline decoration-white/30 underline-offset-4 mr-2">
                                            Impact
                                        </span>
                                        <span className="leading-relaxed">
                                            – {project.outcome}
                                        </span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Right Column: Sticky Sidebar / TOC */}
                    <div className="hidden lg:block lg:col-span-4 pl-10">
                        <div className="sticky top-32 space-y-12">
                            {/* Tech Stack Summary */}
                            <div className="space-y-6">
                                <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4 pb-2 border-b border-white/10">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-sm text-gray-300 px-3 py-1.5 rounded bg-white/5 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Page Navigation */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4 pb-2 border-b border-white/10">
                                    On This Page
                                </h4>
                                <ul className="space-y-4 text-sm font-medium text-gray-400">
                                    <li>
                                        <a href="#features" className="flex items-center gap-3 hover:text-white transition-colors group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#00ff88] transition-colors" />
                                            Key Features
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#challenges" className="flex items-center gap-3 hover:text-white transition-colors group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-yellow-500 transition-colors" />
                                            Challenges
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#outcome" className="flex items-center gap-3 hover:text-white transition-colors group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-purple-500 transition-colors" />
                                            Outcome
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-32 h-[calc(100vh-10rem)] relative rounded-lg overflow-hidden group" style={{ backgroundImage: `url(GradientSpeckled.png)`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div className="absolute inset-0 opacity-80" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                    <div className="relative z-10 py-8 px-8 text-center space-y-8">
                        <div className="inline-block p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 mt-24 animate-bounce">
                            <img src="contact.png" alt="contact" className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl md:text-4xl text-black tracking-tight uppercase leading-none" style={{ fontFamily: "'Gilroy-Bold', sans-serif" }}>
                            From Concept to <span className="text-white bg-clip-text">Creation</span>
                            <br />
                            Let's Make it <span className="text-white bg-clip-text">Happen!</span>
                        </h2>

                        <div className="flex justify-center pt-8">
                            <a href="mailto:yashrajz.me@gmail.com" className="relative cursor-pointer group flex items-center gap-4 px-6 py-4 bg-white text-black rounded-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300">
                                <span>Get in Touch</span>
                                <div className="p-1 rounded-full bg-black text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
                                    <ArrowRight size={16} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer / Next Project */}
                <div className="mt-16 pt-16 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <Link to={`/projects/${prevProject.slug}`} className="group w-full md:w-auto">
                            <div className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-2 group-hover:text-[#00ff88] transition-colors">Previous Project</div>
                            <div className="flex items-center gap-4 text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">
                                <ArrowLeft size={24} />
                                {prevProject.name}
                            </div>
                        </Link>

                        <Link to={`/projects/${nextProject.slug}`} className="group w-full md:w-auto text-right">
                            <div className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-2 group-hover:text-[#00ff88] transition-colors">Next Project</div>
                            <div className="flex items-center justify-end gap-4 text-2xl font-bold text-white group-hover:-translate-x-2 transition-transform">
                                {nextProject.name}
                                <ArrowRight size={24} />
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
