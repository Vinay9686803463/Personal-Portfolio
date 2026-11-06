import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        globalThis.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section
            id="contact"
            className="scroll-mt-28 border-b border-white/[0.07] bg-[#0D1018] py-16 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                            05 • INQUIRIES &amp; COLLABORATION
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Let's engineer something <span className="italic text-[#C58C9B]">extraordinary.</span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-[#A5A9BC] sm:text-base">
                            Currently open to software engineering internships, frontend web development roles, and collaborative software development projects. Feel free to initiate contact directly.
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-sm text-emerald-300">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                            <span>Open to collaboration and opportunities</span>
                        </div>

                        <div className="mt-6 space-y-2 text-sm text-slate-300">
                            <p>Email: {personalInfo.email}</p>
                            <p>Mobile: +91 {personalInfo.phone}</p>
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
                                href={`tel:+91${personalInfo.phone}`}
                                className="inline-flex items-center gap-2 rounded-md border border-white/[0.12] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-violet-400/60 hover:text-white"
                            >
                                <Phone size={18} aria-hidden="true" />
                                Call Me
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

                        <div className="mt-8 border-t border-white/[0.08] pt-4 text-center text-[11px] text-slate-400">
                            © {year} Vinay Sollapure • All Rights Reserved.
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
        </section>
    );
}