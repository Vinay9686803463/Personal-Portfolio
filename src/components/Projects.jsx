import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderCode } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="projects" className="relative border-b border-white/[0.07] bg-[#050711] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="mb-10">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        Featured Projects
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Some of My Recent Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.4,
                                delay: shouldReduceMotion ? 0 : index * 0.05,
                                ease: "easeOut"
                            }}
                            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#10121f] transition-colors hover:border-violet-400/40"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="flex items-start justify-between gap-4 p-6 sm:p-7">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-400/[0.08]">
                                        <FolderCode size={18} className="text-violet-300" />
                                    </span>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                            Project {String(index + 1).padStart(2, "0")}
                                        </p>
                                        <h3 className="mt-1 text-lg font-medium text-white sm:text-xl">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View project on GitHub"
                                    className="text-slate-400 transition-colors hover:text-white"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                            <div className="px-6 sm:px-7">
                                <p className="text-sm leading-7 text-slate-400">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-white/[0.09] px-2.5 py-1 text-xs text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto flex items-center justify-between gap-4 px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                                    <span>Open Source</span>
                                </div>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-2 text-sm text-violet-300 transition-colors hover:text-white"
                                >
                                    View on GitHub
                                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
