
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="contact"
            className="scroll-mt-28 border-b border-white/[0.07] bg-[#050711] py-16 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                    }}
                    className="max-w-3xl text-left"
                >
                    {/* Section Label */}
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        LET'S WORK TOGETHER
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Contact Me
                    </h2>

                    {/* Description */}
                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        I'm always open to discussing new projects, creative
                        ideas, collaboration opportunities, and opportunities
                        to learn and grow as a developer. Whether you have a
                        question or simply want to connect, feel free to reach out.
                    </p>

                    {/* Availability Indicator */}
                    <div className="mt-6 flex items-center gap-2 text-xs text-emerald-300 sm:text-sm">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                        <span>Open to collaboration and opportunities</span>
                    </div>

                    {/* Contact Links */}
                    <div className="mt-8 flex flex-wrap items-center justify-start gap-x-8 gap-y-4">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-white"
                        >
                            <Mail size={18} aria-hidden="true" />
                            Email Me
                        </a>

                        <a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-violet-300"
                        >
                            <Github size={18} aria-hidden="true" />
                            GitHub
                        </a>

                        <a
                            href={personalInfo.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-violet-300"
                        >
                            <Linkedin size={18} aria-hidden="true" />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
