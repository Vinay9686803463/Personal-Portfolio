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
        <footer className="bg-[#050711]">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="grid grid-cols-1 gap-10 border-t border-white/[0.08] py-12 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-8">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                            Contact Me
                        </p>
                        <h2 className="text-sm font-semibold tracking-tight sm:text-base lg:whitespace-nowrap lg:text-base xl:text-lg">
                            I'm open to discussing projects, collaborating on ideas, and connecting with other developers.
                        </h2>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
                            >
                                <Mail size={16} aria-hidden="true" />
                                <span>Email Me</span>
                            </a>

                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                                className="inline-flex items-center gap-2 rounded-md border border-white/[0.14] px-5 py-2.5 text-sm text-slate-200 transition-colors hover:border-violet-400/60"
                            >
                                <Github size={16} aria-hidden="true" />
                                <span>GitHub</span>
                            </a>

                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                                className="inline-flex items-center gap-2 rounded-md border border-white/[0.14] px-5 py-2.5 text-sm text-slate-200 transition-colors hover:border-violet-400/60"
                            >
                                <Linkedin size={16} aria-hidden="true" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-start lg:col-span-4 lg:justify-end">
                        <button
                            type="button"
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.02] px-4 py-2 text-sm text-slate-200 transition-colors hover:border-violet-400/60 hover:text-white"
                        >
                            <ArrowUp size={16} aria-hidden="true" />
                            <span>Back to top</span>
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center border-t border-white/[0.08] py-4 text-[11px] text-slate-400">
                    © {year} {personalInfo.name}
                </div>
            </div>
        </footer>
    );
}
