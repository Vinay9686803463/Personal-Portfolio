import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, Github, Linkedin, Mail, Camera, Upload, Trash2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import {
    SiHtml5,
    SiJavascript,
    SiPython,
    SiFlask,
    SiGit,
    SiGithub
} from "react-icons/si";
import { VscDatabase } from "react-icons/vsc";

const CssLogo = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#1572B6" />
        <path d="M12 4H18.5L18 9H12V4Z" fill="#33A9DC" />
        <path
            d="M12 13H16L15.5 17L12 18.2L8.5 17L8.25 15H10.5L10.6 15.8L12 16.2L13.4 15.8L13.6 14H8.1L7.6 9H12V13Z"
            fill="#FFFFFF"
        />
    </svg>
);

const technologies = [
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: CssLogo, color: "#1572B6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "Flask", Icon: SiFlask, color: "#FFFFFF" },
    { name: "SQL", Icon: VscDatabase, color: "#336791" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" }
];

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();
    const fileInputRef = useRef(null);
    const [profileImage, setProfileImage] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleFileSelect = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            event.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            setProfileImage(e.target?.result);
            setMenuOpen(false);
        };
        reader.readAsDataURL(file);
        event.target.value = "";
    };

    const handleRemovePhoto = () => {
        setProfileImage(null);
        setMenuOpen(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

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
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/[0.08] px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                            B.TECH CSE STUDENT
                        </span>
                    </div>

                    <h1 className="text-2xl font-bold leading-tight tracking-tight whitespace-nowrap sm:text-3xl lg:text-4xl">
                        <span>Hi, I'm</span>{" "}
                        <span className="text-violet-400">Vinay</span>{" "}
                        <span className="text-white">I build things for the web.</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                        I'm a Computer Science student interested in building practical web applications,
                        developing backend functionality, and working with databases to solve real-world
                        problems.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
                        >
                            View My Work
                            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/[0.16] px-6 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-violet-400/60 hover:bg-white/[0.02]"
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
                           
{technologies.map(({ name, Icon, color }) => (
    <span
        key={name}
        className="inline-flex items-center gap-2 rounded-md border border-white/[0.09] bg-white/[0.015] px-3 py-1 text-xs text-slate-300 transition-colors hover:border-violet-400/40 hover:text-violet-300"
    >
        <Icon
            size={16}
            color={color}
            aria-hidden="true"
        />
        <span>{name}</span>
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
                    <div className="absolute -right-6 top-6 hidden h-24 w-24 opacity-40 lg:block">
                        <div
                            className="h-full w-full"
                            style={{
                                backgroundImage: "radial-gradient(#a78bfa 1px, transparent 1px)",
                                backgroundSize: "8px 8px"
                            }}
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[90px] sm:h-[240px] sm:w-[240px] lg:h-[280px] lg:w-[280px]" />
                        <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d4ce3] sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px]" />

                        <div className="relative aspect-square h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px]">
                            <div
                                className="relative h-full w-full overflow-hidden rounded-full"
                                onMouseEnter={() => setMenuOpen(true)}
                                onMouseLeave={() => setMenuOpen(false)}
                            >
                                <button
                                    type="button"
                                    className="relative h-full w-full overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                                    onClick={() => setMenuOpen((prev) => !prev)}
                                    aria-haspopup="menu"
                                    aria-expanded={menuOpen}
                                    aria-label="Profile photo options"
                                >
                                    <div
                                        id="hero-portrait-layer"
                                        className="absolute inset-0 h-full w-full rounded-full overflow-hidden"
                                        aria-label="Profile photo"
                                    >
                                        {profileImage ? (
                                            <img
                                                src={profileImage}
                                                alt="Vinay Sollapure"
                                                className="h-full w-full rounded-full object-cover object-center"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center rounded-full" />
                                        )}
                                    </div>
                                </button>

                                {menuOpen && (
                                    <div
                                        role="menu"
                                        aria-label="Photo options"
                                        className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-full bg-black/70 p-2 text-center"
                                    >
                                        <button
                                            type="button"
                                            role="menuitem"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="flex w-full items-center justify-center gap-1.5 rounded-full px-2 py-1 text-[10px] text-white hover:bg-white/10"
                                        >
                                            <Camera size={12} />
                                            Change Photo
                                        </button>
                                        <button
                                            type="button"
                                            role="menuitem"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="flex w-full items-center justify-center gap-1.5 rounded-full px-2 py-1 text-[10px] text-white hover:bg-white/10"
                                        >
                                            <Upload size={12} />
                                            Upload Photo
                                        </button>
                                        <button
                                            type="button"
                                            role="menuitem"
                                            onClick={handleRemovePhoto}
                                            className="flex w-full items-center justify-center gap-1.5 rounded-full px-2 py-1 text-[10px] text-white hover:bg-white/10"
                                        >
                                            <Trash2 size={12} />
                                            Remove Photo
                                        </button>
                                    </div>
                                )}
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileSelect}
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-4 sm:-bottom-4 sm:-right-6 lg:-right-10">
                            <div className="rounded-lg border border-white/10 bg-[#10121f] px-4 py-3 shadow-[0_30px_60px_-40px_rgba(121,87,246,1)]">
                                <div className="mb-2 flex items-center gap-2">
                                    <Code2 size={16} className="text-violet-300" />
                                    <span className="text-xs font-medium text-white">Code</span>
                                    <span className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                </div>
                                <div className="font-mono text-[11px] leading-relaxed text-slate-400">
                                    <div>
                                        <span className="text-violet-300">const</span>{" "}
                                        <span className="text-sky-300">dev</span>{" "}
                                        <span className="text-slate-400">=</span>{" "}
                                        <span className="text-amber-200">{"{"}</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="text-sky-300">name</span>
                                        <span className="text-slate-400">:</span>{" "}
                                        <span className="text-emerald-300">"Vinay"</span>
                                        <span className="text-slate-400">,</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="text-sky-300">role</span>
                                        <span className="text-slate-400">:</span>{" "}
                                        <span className="text-emerald-300">"Web Developer"</span>
                                    </div>
                                    <div>
                                        <span className="text-amber-200">{"}"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-10 left-6 hidden sm:block">
                            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 19C6.33333 14.6667 19 5.2 39 1" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 4" />
                                <path d="M34 1L39 1L38 6" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
