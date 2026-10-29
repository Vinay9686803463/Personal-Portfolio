import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Code2,
    Github,
    Linkedin,
    Mail,
    Terminal,
} from "lucide-react";

import { personalInfo, projects } from "../data/portfolioData";

const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Flask",
    "SQL",
    "Git",
    "GitHub",
];

export default function Hero() {
    return (
        <section
            id="about"
            className="relative overflow-hidden border-b border-white/[0.07] bg-[#050711] text-white"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/[0.08] blur-[120px]" />

                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-600/[0.08] blur-[130px]" />

                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "radial-gradient(#a78bfa 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:min-h-[570px] lg:grid-cols-2 lg:gap-12 lg:px-12">
                {/* Left: Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="relative z-10"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                            B.Tech CSE Student
                        </span>
                    </div>

                    <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                        Hi, I'm{" "}
                        <span className="text-violet-400">
                            Vinay
                        </span>
                        <br />
                        <span className="mt-2 block text-white">
                            I build things for the web.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                        I'm a Computer Science student interested in building
                        practical web applications, developing backend
                        functionality, and working with databases to solve
                        real-world problems.
                    </p>

                    {/* Primary actions */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-500"
                        >
                            View My Work

                            <ArrowUpRight
                                size={16}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-violet-400/60 hover:bg-white/[0.04]"
                        >
                            <Mail size={16} />
                            Contact Me
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="mt-7 flex items-center gap-4">
                        <span className="text-xs text-slate-500">
                            Find me on
                        </span>

                        <a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub profile"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            <Github size={19} />
                        </a>

                        <a
                            href={personalInfo.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn profile"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            <Linkedin size={19} />
                        </a>

                        <a
                            href={`mailto:${personalInfo.email}`}
                            aria-label="Send email"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            <Mail size={19} />
                        </a>
                    </div>

                    {/* Technologies */}
                    <div className="mt-10 border-t border-white/[0.08] pt-6">
                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Technologies I work with
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-md border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-violet-400/40 hover:text-violet-300"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Photo area — add your own image manually later */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="relative mx-auto flex w-full max-w-lg items-center justify-center"
                >
                    {/* Decorative glow behind the future photo */}
                    <div className="absolute h-64 w-64 rounded-full bg-violet-600/20 blur-[90px] sm:h-80 sm:w-80" />

                    {/* PHOTO SLOT: Add your image here when ready. */}
                    <div
                        id="hero-photo-slot"
                        className="relative flex aspect-[4/5] w-full max-w-[390px] items-center justify-center"
                        aria-label="Reserved space for your profile photo"
                    >
                        {/*
                            Your photo will go here.

                            Example:
                            <img
                                src="/images/your-photo.png"
                                alt="Vinay Sollapure"
                                className="h-full w-full object-cover"
                            />
                        */}

                        {/* Subtle decoration while the photo area is empty */}
                        <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

                        <div className="absolute right-2 top-12 h-24 w-24 opacity-30">
                            <div
                                className="h-full w-full"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(#a78bfa 1px, transparent 1px)",
                                    backgroundSize: "9px 9px",
                                }}
                            />
                        </div>

                        {/* Floating code card */}
                        <div className="absolute bottom-10 right-0 z-10 w-52 rounded-xl border border-white/10 bg-[#10121f]/95 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:-right-3">
                            <div className="mb-4 flex items-center justify-between border-b border-white/[0.08] pb-3">
                                <div className="flex items-center gap-2">
                                    <Terminal
                                        size={15}
                                        className="text-violet-400"
                                    />

                                    <span className="text-xs text-slate-300">
                                        developer.js
                                    </span>
                                </div>

                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            </div>

                            <div className="space-y-2 font-mono text-[10px] leading-relaxed">
                                <p className="text-violet-300">
                                    const developer = {"{"}
                                </p>

                                <p className="pl-3 text-slate-400">
                                    name:{" "}
                                    <span className="text-amber-200">
                                        "Vinay"
                                    </span>
                                    ,
                                </p>

                                <p className="pl-3 text-slate-400">
                                    role:{" "}
                                    <span className="text-amber-200">
                                        "CSE Student"
                                    </span>
                                    ,
                                </p>

                                <p className="pl-3 text-slate-400">
                                    skills:{" "}
                                    <span className="text-emerald-300">
                                        ["Python", "Flask"]
                                    </span>
                                </p>

                                <p className="text-violet-300">
                                    {"}"};
                                </p>
                            </div>
                        </div>

                        {/* Project count card */}
                        <div className="absolute left-0 top-16 z-10 rounded-xl border border-white/10 bg-[#10121f]/95 p-4 shadow-xl backdrop-blur sm:-left-2">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                                    <Code2 size={19} />
                                </div>

                                <div>
                                    <p className="text-lg font-semibold text-white">
                                        {projects.length}
                                    </p>

                                    <p className="text-[10px] text-slate-400">
                                        Featured Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#skills"
                aria-label="Scroll to skills"
                className="relative mx-auto mb-6 flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-violet-300"
            >
                Explore more

                <ArrowDown size={13} />
            </a>
        </section>
    );
}