
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        globalThis.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            id="contact"
            className="scroll-mt-28 bg-[#050711]"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

                <div className="grid grid-cols-1 gap-8 border-t border-white/[0.08] py-14 lg:grid-cols-12">

                    <div className="lg:col-span-10">

                        {/* Section Label */}
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                            LET'S WORK TOGETHER
                        </p>

                        {/* Heading */}
                        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                            Contact Me
                        </h2>

                        {/* Description */}
                        <p className="mt-5 w-full max-w-none text-sm leading-7 text-slate-400 sm:text-base">
                            I'm always open to discussing new projects, creative
                            ideas, collaboration opportunities, and opportunities
                            to learn and grow as a developer. Whether you have
                            a question or simply want to connect, feel free to
                            reach out.
                        </p>

                        {/* Availability */}
                        <div className="mt-5 flex items-center gap-2 text-xs text-emerald-300 sm:text-sm">
                            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                            <span>
                                Open to collaboration and opportunities
                            </span>
                        </div>

                        {/* Contact Links - No Borders */}
                        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">

                            
<a
    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]"
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
                    </div>

                    {/* Back to Top */}
                    <div className="flex items-start lg:col-span-2 lg:justify-end">
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-violet-400/60 hover:text-white"
                        >
                            <ArrowUp size={16} />
                            Back to top
                        </button>
                    </div>

                </div>

                {/* Copyright */}
                <div className="flex items-center justify-center border-t border-white/[0.08] py-4 text-[11px] text-slate-400">
                    © {year} {personalInfo.name}
                </div>

            </div>
        </footer>
    );
}
