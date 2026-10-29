import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const technologies = ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQL", "Git", "GitHub"];

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="about"
            className="relative overflow-hidden border-b border-white/[0.07] bg-[#050711]"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-600/[0.09] blur-[120px]" />
                <div className="absolute right-[-10%] top-[-10%] h-96 w-96 rounded-full bg-violet-500/[0.07] blur-[130px]" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: "radial-gradient(#a78bfa 1px, transparent 1px)",
                        backgroundSize: "28px 28px"
                    }}
                />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:min-h-[680px] lg:grid-cols-2 lg:gap-14 lg:px-12">
                <motion.div
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-violet-400/25 bg-violet-400/[0.07] px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                            B.TECH CSE STUDENT
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block">Hi, I'm</span>
                        <span className="block text-violet-400">Vinay</span>
                        <span className="mt-1 block text-white">I build things for the web.</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                        I'm a Computer Science student interested in building practical web applications,
                        developing backend functionality, and working with databases to solve real-world
                        problems.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
                        >
                            View My Work
                            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-md border border-white/[0.14] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-violet-400/60 hover:bg-white/[0.02]"
                        >
                            <Mail size={16} />
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-7 flex items-center gap-3">
                        <span className="text-xs text-slate-500">Find me on</span>
                        <a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub profile"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href={personalInfo.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn profile"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            aria-label="Send email"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                    <div className="mt-10 border-t border-white/[0.08] pt-6">
                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Technologies I Work With
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-md border border-white/[0.09] bg-white/[0.015] px-3 py-1 text-xs text-slate-300 transition-colors hover:border-violet-400/40 hover:text-violet-300"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" }}
                    className="relative mx-auto flex w-full max-w-lg items-center justify-center"
                >
                    <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
                    <div
                        id="hero-photo-slot"
                        className="relative flex aspect-[4/5] w-full max-w-[380px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.01] to-white/[0.005]"
                        aria-label="Reserved space for your profile photo"
                    >
                        {/* 
                          PHOTO INSERTION POINT
                          Add your own photo manually here later. 
                          Example:
                          <img src="/images/your-photo.jpg" alt="Vinay Sollapure" className="h-full w-full object-cover" />
                        */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                                Photo Slot
                            </span>
                            <span className="mt-2 text-xs text-slate-600">
                                Insert your image manually
                            </span>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#10121f]/95 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur">
                                <Code2 size={16} className="text-violet-300" />
                                <span className="text-xs text-slate-300">console.log("Building for the web")</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
