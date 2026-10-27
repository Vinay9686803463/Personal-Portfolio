
import { motion } from "framer-motion";

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
            className="relative min-h-screen pt-32 pb-24 flex items-center justify-center bg-[#191316] overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="lg:col-span-7 space-y-7 text-left"
                    >

                        {/* Academic Status */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#21191D] border border-[#49323C] text-[#C2AEB5] text-xs font-mono">
                            <span className="w-2 h-2 rounded-full bg-[#BB786D]" />

                            <span>
                                B.Tech Computer Science Engineering Student
                            </span>
                        </div>

                        {/* Profile Introduction */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-1">

                            {/* Profile Initials */}
                            <div className="relative shrink-0">
                                <div className="p-1 rounded-2xl bg-[#291D23] border border-[#49323C] shadow-lg shadow-black/40">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[#191316] flex items-center justify-center">
                                        <span className="text-3xl sm:text-4xl font-editorial font-semibold text-[#D6A19A]">
                                            VS
                                        </span>
                                    </div>
                                </div>

                                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#84445C] border-2 border-[#191316] flex items-center justify-center text-[10px] text-[#F0DCE2]">
                                    ✦
                                </span>
                            </div>

                            {/* Name and Role */}
                            <div className="space-y-1.5">
                                <div className="text-xs font-mono text-[#BB786D] uppercase tracking-wider">
                                    B.Tech CSE Student &bull; Web Developer
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F0DCE2] tracking-tight leading-[1.12]">
                                    Vinay{" "}
                                    <span className="font-editorial italic font-normal text-[#D6A19A]">
                                        Sollapure
                                    </span>
                                </h1>

                                <div className="flex flex-wrap items-center gap-2 text-xs text-[#A18D96] font-mono">
                                    <MapPin className="w-3.5 h-3.5 text-[#BB786D]" />

                                    <span>
                                        {personalInfo.location}
                                    </span>

                                    <span className="text-[#49323C]">
                                        &bull;
                                    </span>

                                    <span>
                                        Computer Science Engineering
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* About Me */}
                        <p className="text-[#C2AEB5] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
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
                        <div className="flex flex-wrap items-center gap-3.5 pt-2">

                            <a
                                href="#projects"
                                className="btn-primary"
                            >
                                <span>
                                    View My Projects
                                </span>

                                <ArrowRight className="w-4 h-4 text-[#F0DCE2]" />
                            </a>

                            <a
                                href="#contact"
                                className="btn-secondary"
                            >
                                <span>
                                    Get In Touch
                                </span>
                            </a>

                            <a
                                href="#chat-widget"
                                onClick={openChatWidget}
                                className="px-3.5 py-3 rounded-xl bg-[#21191D] hover:bg-[#291D23] text-[#C2AEB5] hover:text-[#F0DCE2] border border-[#49323C] hover:border-[#84445C] transition-all duration-200 text-xs font-medium flex items-center gap-2"
                                title="Open Portfolio Assistant"
                            >
                                <Bot className="w-4 h-4 text-[#BB786D]" />

                                <span className="hidden sm:inline">
                                    Ask Assistant
                                </span>
                            </a>
                        </div>

                        {/* Core Skills */}
                        <div className="pt-3 border-t border-[#49323C]/70">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A18D96] block mb-2">
                                Core Competencies
                            </span>

                            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#C2AEB5]">
                                {coreSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 rounded-md bg-[#21191D] border border-[#49323C] text-[#C2AEB5]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-1 text-xs text-[#A18D96]">

                            <span className="font-mono">
                                Connect:
                            </span>

                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[#21191D] hover:bg-[#291D23] border border-[#49323C] text-[#C2AEB5] hover:text-[#F0DCE2] transition-colors"
                                title="GitHub"
                                aria-label="GitHub profile"
                            >
                                <Github className="w-4 h-4" />
                            </a>

                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[#21191D] hover:bg-[#291D23] border border-[#49323C] text-[#C2AEB5] hover:text-[#F0DCE2] transition-colors"
                                title="LinkedIn"
                                aria-label="LinkedIn profile"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>

                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="p-2 rounded-lg bg-[#21191D] hover:bg-[#291D23] border border-[#49323C] text-[#C2AEB5] hover:text-[#F0DCE2] transition-colors"
                                title="Email"
                                aria-label="Send email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>

                        </div>

                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15
                        }}
                        className="lg:col-span-5"
                    >

                        <div className="rounded-2xl bg-[#21191D] border border-[#49323C] p-6 sm:p-7 space-y-6 shadow-2xl shadow-black/50">

                            {/* Overview Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-[#49323C]">

                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#84445C]" />

                                    <span className="text-xs font-mono uppercase tracking-wider text-[#F0DCE2] font-semibold">
                                        Developer Overview
                                    </span>
                                </div>

                                <span className="text-[11px] font-mono text-[#BB786D] bg-[#291D23] px-2.5 py-0.5 rounded border border-[#49323C]">
                                    2026
                                </span>

                            </div>

                            {/* Development Areas */}
                            <div className="space-y-4">

                                {/* Frontend */}
                                <div className="p-3.5 rounded-xl bg-[#291D23] border border-[#49323C]/80 space-y-1.5 transition-colors hover:border-[#84445C]/60">

                                    <div className="flex items-center justify-between gap-2 text-xs">

                                        <span className="font-semibold text-[#F0DCE2] flex items-center gap-2">
                                            <Layers className="w-3.5 h-3.5 text-[#BB786D]" />
                                            Frontend Development
                                        </span>

                                        <span className="text-[10px] font-mono text-[#A18D96]">
                                            HTML / CSS / JS
                                        </span>

                                    </div>

                                    <p className="text-xs text-[#A18D96] leading-relaxed">
                                        Building responsive web interfaces
                                        with semantic HTML, modern CSS,
                                        and interactive JavaScript.
                                    </p>

                                </div>

                                {/* Backend */}
                                <div className="p-3.5 rounded-xl bg-[#291D23] border border-[#49323C]/80 space-y-1.5 transition-colors hover:border-[#84445C]/60">

                                    <div className="flex items-center justify-between gap-2 text-xs">

                                        <span className="font-semibold text-[#F0DCE2] flex items-center gap-2">
                                            <Cpu className="w-3.5 h-3.5 text-[#BB786D]" />
                                            Backend Development
                                        </span>

                                        <span className="text-[10px] font-mono text-[#A18D96]">
                                            Python / Flask
                                        </span>

                                    </div>

                                    <p className="text-xs text-[#A18D96] leading-relaxed">
                                        Developing web applications,
                                        server-side functionality,
                                        and database-connected features
                                        using Python and Flask.
                                    </p>

                                </div>

                                {/* Database */}
                                <div className="p-3.5 rounded-xl bg-[#291D23] border border-[#49323C]/80 space-y-1.5 transition-colors hover:border-[#84445C]/60">

                                    <div className="flex items-center justify-between gap-2 text-xs">

                                        <span className="font-semibold text-[#F0DCE2] flex items-center gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#BB786D]" />
                                            Database & Tools
                                        </span>

                                        <span className="text-[10px] font-mono text-[#A18D96]">
                                            SQL / Git
                                        </span>

                                    </div>

                                    <p className="text-xs text-[#A18D96] leading-relaxed">
                                        Working with relational databases,
                                        version control, GitHub, and
                                        application deployment workflows.
                                    </p>

                                </div>

                            </div>

                            {/* Portfolio Information */}
                            <div className="grid grid-cols-2 gap-3 pt-2">

                                <div className="p-3 rounded-xl bg-[#291D23] border border-[#49323C]">

                                    <div className="text-2xl font-bold font-editorial text-[#F0DCE2]">
                                        {projects.length}
                                    </div>

                                    <div className="text-[11px] font-mono text-[#A18D96]">
                                        Featured Projects
                                    </div>

                                </div>

                                <div className="p-3 rounded-xl bg-[#291D23] border border-[#49323C]">

                                    <div className="flex items-center gap-2 text-[#BB786D]">
                                        <GraduationCap className="w-5 h-5" />

                                        <span className="text-lg font-bold font-editorial">
                                            B.Tech
                                        </span>
                                    </div>

                                    <div className="text-[11px] font-mono text-[#A18D96]">
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
