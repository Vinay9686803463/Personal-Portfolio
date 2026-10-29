import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        if (typeof globalThis !== "undefined") {
            globalThis.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer id="contact" className="bg-[#050711]">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="grid grid-cols-1 gap-10 border-t border-white/[0.08] py-12 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                            Let's Work Together
                        </p>
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            I'm open to discussing projects, collaborating on ideas, and connecting with
                            other developers.
                        </h2>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
                            >
                                <Mail size={16} />
                                Email Me
                            </a>
                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-white/[0.14] px-5 py-2.5 text-sm text-slate-200 transition-colors hover:border-violet-400/60"
                            >
                                <Github size={16} />
                                GitHub
                            </a>
                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-white/[0.14] px-5 py-2.5 text-sm text-slate-200 transition-colors hover:border-violet-400/60"
                            >
                                <Linkedin size={16} />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3 lg:col-start-8">
                        <p className="text-sm font-medium text-white">Navigation</p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-400">
                            <li><a href="#about" className="hover:text-white">Home</a></li>
                            <li><a href="#skills" className="hover:text-white">Skills</a></li>
                            <li><a href="#projects" className="hover:text-white">Projects</a></li>
                            <li><a href="#education" className="hover:text-white">Education</a></li>
                            <li><a href="#contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="text-sm font-medium text-white">Connect</p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-400">
                            <li>
                                <a href={`mailto:${personalInfo.email}`} className="hover:text-white">
                                    {personalInfo.email}
                                </a>
                            </li>
                            <li>
                                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-white">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] py-6 sm:flex-row">
                    <p className="text-sm text-slate-500">
                        © {year} {personalInfo.name}. All rights reserved.
                    </p>
                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                    >
                        Back to top
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
