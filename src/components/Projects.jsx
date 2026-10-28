import { useState } from "react";
import { motion } from "framer-motion";

import {
    Github,
    ArrowUpRight,
    CheckCircle2,
    Code2
} from "lucide-react";

import { projects } from "../data/portfolioData";

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const categories = [
        "All",
        "Web Development",
        "Student Support"
    ];

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === activeFilter
              );

    return (
        <section
            id="projects"
            className="py-28 bg-[#191316] relative border-t border-[#49323C]/50"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#49323C] gap-6">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#BB786D] uppercase tracking-wider">
                            <span>03 &bull; My Work</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0DCE2] tracking-tight">
                            Featured{" "}
                            <span className="font-editorial italic font-normal text-[#D6A19A]">
                                Projects
                            </span>
                        </h2>

                        <p className="text-sm sm:text-base text-[#C2AEB5] leading-relaxed">
                            A selection of software projects focused on
                            practical problem-solving, web application
                            development, database integration, and
                            student support.
                        </p>
                    </div>

                    {/* Project Filters */}
                    <div className="flex flex-wrap gap-1.5 self-start md:self-end">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveFilter(category)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                                    activeFilter === category
                                        ? "bg-[#33232B] text-[#F0DCE2] border border-[#84445C] font-semibold"
                                        : "bg-[#21191D] text-[#A18D96] border border-[#49323C] hover:text-[#F0DCE2] hover:bg-[#291D23]"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.1
                            }}
                            className="rounded-xl bg-[#291D23] border border-[#49323C] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-[#84445C]/80"
                        >
                            <div className="space-y-5">

                                {/* Project Category */}
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <span className="px-2.5 py-1 rounded bg-[#21191D] border border-[#49323C] text-[11px] font-mono text-[#BB786D]">
                                        {project.category || "Web Development"}
                                    </span>

                                    <Code2 className="w-5 h-5 text-[#BB786D]" />
                                </div>

                                {/* Project Information */}
                                <div className="space-y-3">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F0DCE2] tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-[#C2AEB5] leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Project Highlights */}
                                {project.highlights?.length > 0 && (
                                    <div className="pt-4 border-t border-[#49323C]/70 space-y-3">
                                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#A18D96]">
                                            Key Features
                                        </h4>

                                        <ul className="space-y-2">
                                            {project.highlights.map(
                                                (highlight, highlightIndex) => (
                                                    <li
                                                        key={highlightIndex}
                                                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C2AEB5]"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 text-[#BB786D] shrink-0 mt-0.5" />

                                                        <span>
                                                            {highlight}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Technologies and Repository */}
                            <div className="pt-4 border-t border-[#49323C]/70 space-y-4">

                                <div>
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A18D96] block mb-2">
                                        Technologies
                                    </span>

                                    <div className="flex flex-wrap gap-1.5">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded bg-[#21191D] border border-[#49323C] text-[10px] sm:text-[11px] font-mono text-[#C2AEB5]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-w-[120px] py-2.5 rounded-lg bg-[#21191D] hover:bg-[#33232B] text-[#F0DCE2] border border-[#49323C] hover:border-[#84445C] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                                    >
                                        <Github className="w-4 h-4 text-[#BB786D]" />

                                        <span>View Source Code</span>

                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>

                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 min-w-[100px] py-2.5 rounded-lg bg-[#33232B] hover:bg-[#84445C]/30 text-[#F0DCE2] border border-[#49323C] hover:border-[#84445C] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <span>Live Demo</span>

                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="py-12 text-center rounded-xl bg-[#21191D] border border-[#49323C]">
                        <p className="text-sm text-[#C2AEB5]">
                            No projects found in this category.
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
}