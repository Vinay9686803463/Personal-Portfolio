import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        globalThis.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="scroll-mt-28 bg-[#0D1018]">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="py-16">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        05 • INQUIRIES &amp; COLLABORATION
                    </p>

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                Let's engineer something <span className="italic text-[#C58C9B]">extraordinary.</span>
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#A5A9BC] sm:text-base">
                                Currently open to software engineering internships, frontend and full-stack development opportunities, and collaborative projects. Feel free to reach out to discuss ideas, opportunities or potential collaborations.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm text-emerald-300">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                                <span>Open to collaboration and opportunities</span>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]"
                                >
                                    <Mail size={18} aria-hidden="true" />
                                    Email Me
                                </a>

                                <a
                                    href={personalInfo.socials.github}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-violet-300"
                                >
                                    <Github size={18} aria-hidden="true" />
                                    GitHub
                                </a>

                                <a
                                    href={personalInfo.socials.linkedin}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-violet-300"
                                >
                                    <Linkedin size={18} aria-hidden="true" />
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-2 self-start rounded-full border border-white/[0.12] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-violet-400/60 hover:text-white"
                        >
                            <ArrowUp size={16} />
                            Back to top
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/[0.08] py-4 text-center text-[11px] text-slate-400">
                    © {year} Vinay Sollapure • All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}