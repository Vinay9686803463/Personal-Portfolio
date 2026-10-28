import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";

export default function Skills() {
    const shouldReduceMotion = useReducedMotion();
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredCategories =
        activeCategory === "all"
            ? skillCategories
            : skillCategories.filter(
                  (category) => category.id === activeCategory
              );

    return (
        <section
            id="skills"
            className="py-28 bg-[#0B1220] relative border-t border-[#26364D]"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-[#26364D] gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <div className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider">
                            02 &bull; Technical Skills
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#F1F5F9] tracking-tight">
                            Skills &amp; Technical Expertise
                        </h2>

                        <p className="text-sm text-[#A7B5C9] leading-relaxed">
                            Technologies and tools I use to develop web
                            applications, build backend functionality,
                            work with databases, and manage software projects.
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2 self-start md:self-end">
                        <button
                            type="button"
                            onClick={() => setActiveCategory("all")}
                            className={`px-2.5 py-1 text-xs transition-colors ${
                                activeCategory === "all"
                                    ? "text-[#F1F5F9] border-b border-[#60A5FA]"
                                    : "text-[#A7B5C9] hover:text-[#F1F5F9]"
                            }`}
                        >
                            All Categories
                        </button>

                        {skillCategories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-2.5 py-1 text-xs transition-colors ${
                                    activeCategory === category.id
                                        ? "text-[#F1F5F9] border-b border-[#60A5FA]"
                                        : "text-[#A7B5C9] hover:text-[#F1F5F9]"
                                }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.35,
                                delay: shouldReduceMotion ? 0 : index * 0.05,
                                ease: "easeOut"
                            }}
                            className="border border-[#26364D] bg-[#0F192B] p-6 sm:p-7 space-y-5 transition-all duration-200 hover:border-[#60A5FA]/60"
                        >
                            {/* Category Header */}
                            <div className="flex items-start justify-between pb-3 border-b border-[#26364D]">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#F1F5F9] tracking-tight">
                                        {category.title}
                                    </h3>

                                    <p className="text-xs text-[#A7B5C9] mt-1">
                                        {category.description}
                                    </p>
                                </div>

                                <span className="text-[11px] font-mono text-[#A7B5C9] border border-[#26364D] px-2 py-0.5 whitespace-nowrap">
                                    {category.skills.length} Skills
                                </span>
                            </div>

                            {/* Individual Skills */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="px-3 py-2 border border-[#26364D] flex items-center gap-2 text-xs transition-colors duration-200 hover:border-[#60A5FA]/70"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#60A5FA] shrink-0" />

                                        <span className="text-[#F1F5F9]">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Learning Statement */}
                <div className="mt-8 p-5 sm:p-6 border border-[#26364D] bg-[#0F192B]">
                    <p className="text-sm text-[#A7B5C9] leading-relaxed">
                        <span className="text-[#A5D8FF]">
                            Continuous learning:
                        </span>{" "}
                        I continue to improve my programming and
                        problem-solving skills by building practical
                        projects and exploring new development tools.
                    </p>
                </div>

            </div>
        </section>
    );
}