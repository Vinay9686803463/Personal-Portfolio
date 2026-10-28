
import { motion, useReducedMotion } from "framer-motion";

import {
    Github,
    Linkedin,
    Mail,
    ArrowRight,
    Bot,
    Layers,
    MapPin,
    CheckCircle2,
    Cpu,
    GraduationCap
} from "lucide-react";

import {
    personalInfo,
    projects
} from "../data/portfolioData";

const coreSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Flask",
    "SQL",
    "Git",
    "GitHub"
];

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const openChatWidget = (event) => {
        event.preventDefault();

        const chatButton = document.getElementById(
            "chat-toggle-btn"
        );

        if (chatButton) {
            chatButton.click();
        }
    };

    return (
        <section
            id="about"
            className="relative min-h-screen pt-32 pb-24 flex items-center justify-center bg-[#0B1220] overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

                    {/* Left Column */}
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-7 text-left"
                    >

                        {/* Academic Status */}
                        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#26364D] text-[#A7B5C9] text-xs font-mono">
                            <span className="w-1.5 h-1.5 bg-[#60A5FA]" />

                            <span>
                                B.Tech Computer Science Engineering Student
                            </span>
                        </div>

                        {/* Profile Introduction */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-1">

                            {/* Profile Initials */}
                            <div className="relative shrink-0">
                                <div className="border border-[#26364D] p-1">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#0F192B] flex items-center justify-center">
                                        <span className="text-3xl sm:text-4xl font-editorial font-semibold text-[#A5D8FF]">
                                            VS
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Name and Role */}
                            <div className="space-y-1.5">
                                <div className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider">
                                    B.Tech CSE Student &bull; Web Developer
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F1F5F9] tracking-tight leading-[1.12]">
                                    Vinay{" "}
                                    <span className="font-editorial italic font-normal text-[#A5D8FF]">
                                        Sollapure
                                    </span>
                                </h1>

                                <div className="flex flex-wrap items-center gap-2 text-xs text-[#A7B5C9] font-mono">
                                    <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />

                                    <span>
                                        {personalInfo.location}
                                    </span>

                                    <span className="text-[#26364D]">
                                        &bull;
                                    </span>

                                    <span>
                                        Computer Science Engineering
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* About Me */}
                        <p className="text-[#A7B5C9] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                            I'm a B.Tech Computer Science and Engineering
                            student at Aditya College of Engineering and
                            Technology, Bengaluru. I enjoy building
                            practical web applications using HTML, CSS,
                            JavaScript, Python, Flask, and SQL.
                            My focus is on developing reliable applications,
                            improving my programming skills, and learning
                            through real-world projects.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">

                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#60A5FA] text-[#0B1220] hover:bg-[#A5D8FF] active:translate-y-[1px] transition-all duration-200"
                            >
                                <span>
                                    View My Projects
                                </span>

                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-[#26364D] text-[#F1F5F9] hover:border-[#60A5FA]/70 active:translate-y-[1px] transition-all duration-200"
                            >
                                <span>
                                    Get In Touch
                                </span>
                            </a>

                            <a
                                href="#chat-widget"
                                onClick={openChatWidget}
                                className="px-3 py-2 text-xs font-medium border border-[#26364D] text-[#A7B5C9] hover:text-[#F1F5F9] hover:border-[#60A5FA]/70 active:translate-y-[1px] transition-all duration-200 flex items-center gap-2"
                                title="Open Portfolio Assistant"
                            >
                                <Bot className="w-4 h-4 text-[#60A5FA]" />

                                <span className="hidden sm:inline">
                                    Ask Assistant
                                </span>
                            </a>
                        </div>

                        {/* Core Skills */}
                        <div className="pt-4 border-t border-[#26364D]">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7B5C9] block mb-2">
                                Core Competencies
                            </span>

                            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#A7B5C9]">
                                {coreSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-0.5 border border-[#26364D]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-1 text-xs text-[#A7B5C9]">

                            <span className="font-mono">
                                Connect:
                            </span>

                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 border border-[#26364D] text-[#A7B5C9] hover:text-[#F1F5F9] hover:border-[#60A5FA]/70 transition-colors"
                                title="GitHub"
                                aria-label="GitHub profile"
                            >
                                <Github className="w-4 h-4" />
                            </a>

                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 border border-[#26364D] text-[#A7B5C9] hover:text-[#F1F5F9] hover:border-[#60A5FA]/70 transition-colors"
                                title="LinkedIn"
                                aria-label="LinkedIn profile"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>

                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="p-1.5 border border-[#26364D] text-[#A7B5C9] hover:text-[#F1F5F9] hover:border-[#60A5FA]/70 transition-colors"
                                title="Email"
                                aria-label="Send email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>

                        </div>

                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.55,
                            delay: shouldReduceMotion ? 0 : 0.12,
                            ease: "easeOut"
                        }}
                        className="lg:col-span-5"
                    >

                        <div className="border border-[#26364D] p-6 sm:p-7 space-y-6 bg-[#0F192B]">

                            {/* Overview Header */}
                            <div className="flex items-center justify-between pb-3 border-b border-[#26364D]">

                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#60A5FA]" />

                                    <span className="text-xs font-mono uppercase tracking-wider text-[#F1F5F9]">
                                        Developer Overview
                                    </span>
                                </div>

                                <span className="text-[11px] font-mono text-[#A7B5C9]">
                                    2026
                                </span>

                            </div>

                            {/* Development Areas */}
                            <div className="grid grid-cols-1 divide-y divide-[#26364D]">
                                {/* Frontend */}
                                <div className="py-4 first:pt-0 last:pb-0 space-y-1">
                                    <div className="flex items-center justify-between gap-2 text-sm">
                                        <span className="text-[#F1F5F9] flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-[#60A5FA]" />
                                            Frontend Development
                                        </span>
                                        <span className="text-[11px] font-mono text-[#A7B5C9]">
                                            HTML / CSS / JS
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#A7B5C9] leading-relaxed pl-6">
                                        Building responsive web interfaces with semantic HTML, modern CSS, and interactive JavaScript.
                                    </p>
                                </div>

                                {/* Backend */}
                                <div className="py-4 first:pt-0 last:pb-0 space-y-1">
                                    <div className="flex items-center justify-between gap-2 text-sm">
                                        <span className="text-[#F1F5F9] flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-[#60A5FA]" />
                                            Backend Development
                                        </span>
                                        <span className="text-[11px] font-mono text-[#A7B5C9]">
                                            Python / Flask
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#A7B5C9] leading-relaxed pl-6">
                                        Developing web applications, server-side functionality, and database-connected features using Python and Flask.
                                    </p>
                                </div>

                                {/* Database */}
                                <div className="py-4 first:pt-0 last:pb-0 space-y-1">
                                    <div className="flex items-center justify-between gap-2 text-sm">
                                        <span className="text-[#F1F5F9] flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#60A5FA]" />
                                            Database & Tools
                                        </span>
                                        <span className="text-[11px] font-mono text-[#A7B5C9]">
                                            SQL / Git
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#A7B5C9] leading-relaxed pl-6">
                                        Working with relational databases, version control, GitHub, and application deployment workflows.
                                    </p>
                                </div>
                            </div>

                            {/* Portfolio Information */}
                            <div className="grid grid-cols-2 divide-x divide-[#26364D] border-t border-[#26364D] pt-4">
                                <div className="pr-4">
                                    <div className="text-2xl font-bold font-editorial text-[#F1F5F9]">
                                        {projects.length}
                                    </div>
                                    <div className="text-[11px] font-mono text-[#A7B5C9]">
                                        Featured Projects
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <div className="flex items-center gap-2 text-[#A5D8FF]">
                                        <GraduationCap className="w-5 h-5" />
                                        <span className="text-lg font-bold font-editorial">
                                            B.Tech
                                        </span>
                                    </div>
                                    <div className="text-[11px] font-mono text-[#A7B5C9]">
                                        CSE Student
                                    </div>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
