import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
    Github,
    ArrowUpRight,
    Code2
} from "lucide-react";

import { projects } from "../data/portfolioData";

export default function Projects() {
    const shouldReduceMotion = useReducedMotion();
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
            className="py-28 bg-[#0B1220] relative border-t border-[#26364D]"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-[#26364D] gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <div className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider">
                            03 &bull; My Work
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#F1F5F9] tracking-tight">
                            Featured Projects
                        </h2>

                        <p className="text-sm text-[#A7B5C9] leading-relaxed">
                            A selection of software projects focused on
                            practical problem-solving, web application
                            development, database integration, and
                            student support.
                        </p>
                    </div>

                    {/* Project Filters */}
                    <div className="flex flex-wrap gap-2 self-start md:self-end">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveFilter(category)}
                                className={`px-2.5 py-1 text-xs transition-colors ${
                                    activeFilter === category
                                        ? "text-[#F1F5F9] border-b border-[#60A5FA]"
                                        : "text-[#A7B5C9] hover:text-[#F1F5F9]"
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
                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.35,
                                delay: shouldReduceMotion ? 0 : index * 0.05,
                                ease: "easeOut"
                            }}
                            className="border border-[#26364D] bg-[#0F192B] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-200 hover:-translate-y-[2px] hover:border-[#60A5FA]/70"
                        >
                            <div className="space-y-5">

                                {/* Project Category */}
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <span className="text-[11px] font-mono text-[#A7B5C9] border border-[#26364D] px-2 py-0.5">
                                        {project.category || "Web Development"}
                                    </span>

                                    <Code2 className="w-5 h-5 text-[#60A5FA]" />
                                </div>

                                {/* Project Information */}
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-[#F1F5F9] tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-[#A7B5C9] leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Project Highlights */}
                                {project.highlights?.length > 0 && (
                                    <div className="pt-3 border-t border-[#26364D] space-y-2">
                                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7B5C9]">
                                            Key Features
                                        </h4>

                                        <ul className="space-y-1.5">
                                            {project.highlights.map(
                                                (highlight, highlightIndex) => (
                                                    <li
                                                        key={highlightIndex}
                                                        className="flex items-start gap-2 text-xs sm:text-sm text-[#A7B5C9]"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-[#60A5FA] shrink-0 mt-1.5" />

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
                            <div className="pt-3 border-t border-[#26364D] space-y-4">

                                <div>
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7B5C9] block mb-2">
                                        Technologies
                                    </span>

                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[11px] font-mono text-[#A7B5C9] border border-[#26364D] px-2 py-0.5"
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
                                        className="flex-1 min-w-[120px] py-2 text-xs text-[#F1F5F9] border border-[#26364D] hover:border-[#60A5FA]/70 hover:text-[#A5D8FF] active:translate-y-[1px] flex items-center justify-center gap-2 transition-all duration-200"
                                    >
                                        <Github className="w-4 h-4 text-[#60A5FA]" />

                                        <span>View Source Code</span>

                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>

                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 min-w-[100px] py-2 text-xs text-[#F1F5F9] border border-[#26364D] hover:border-[#60A5FA]/70 hover:text-[#A5D8FF] active:translate-y-[1px] flex items-center justify-center gap-2 transition-all duration-200"
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
                    <div className="py-10 text-center border border-[#26364D]">
                        <p className="text-sm text-[#A7B5C9]">
                            No projects found in this category.
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
}