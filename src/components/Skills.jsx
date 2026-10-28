import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";

export default function Skills() {
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
            className="py-28 bg-[#191316] relative border-t border-[#49323C]/50"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#49323C] gap-6">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#BB786D] uppercase tracking-wider">
                            <span>02 &bull; Technical Skills</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0DCE2] tracking-tight">
                            Skills &amp; Technical{" "}
                            <span className="font-editorial italic font-normal text-[#D6A19A]">
                                Expertise
                            </span>
                        </h2>

                        <p className="text-sm sm:text-base text-[#C2AEB5] leading-relaxed">
                            Technologies and tools I use to develop web
                            applications, build backend functionality,
                            work with databases, and manage software projects.
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-1.5 self-start md:self-end">
                        <button
                            type="button"
                            onClick={() => setActiveCategory("all")}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                                activeCategory === "all"
                                    ? "bg-[#33232B] text-[#F0DCE2] border border-[#84445C] font-semibold"
                                    : "bg-[#21191D] text-[#A18D96] border border-[#49323C] hover:text-[#F0DCE2] hover:bg-[#291D23]"
                            }`}
                        >
                            All Categories
                        </button>

                        {skillCategories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                                    activeCategory === category.id
                                        ? "bg-[#33232B] text-[#F0DCE2] border border-[#84445C] font-semibold"
                                        : "bg-[#21191D] text-[#A18D96] border border-[#49323C] hover:text-[#F0DCE2] hover:bg-[#291D23]"
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.1
                            }}
                            className="rounded-xl bg-[#291D23] border border-[#49323C] p-6 sm:p-7 space-y-6 transition-colors hover:border-[#84445C]/80"
                        >
                            {/* Category Header */}
                            <div className="flex items-start justify-between pb-4 border-b border-[#49323C]">
                                <div>
                                    <h3 className="text-xl font-bold text-[#F0DCE2] tracking-tight">
                                        {category.title}
                                    </h3>

                                    <p className="text-xs text-[#A18D96] mt-1">
                                        {category.description}
                                    </p>
                                </div>

                                <span className="text-[11px] font-mono text-[#BB786D] bg-[#21191D] px-2.5 py-1 rounded border border-[#49323C] whitespace-nowrap">
                                    {category.skills.length} Skills
                                </span>
                            </div>

                            {/* Individual Skills */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="p-3 rounded-lg bg-[#21191D] border border-[#49323C]/70 flex items-center justify-between gap-2 text-xs transition-colors hover:border-[#84445C]/60"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#BB786D] shrink-0" />

                                            <span className="font-medium text-[#F0DCE2]">
                                                {skill.name}
                                            </span>
                                        </div>

                                        <span className="text-[10px] font-mono text-[#A18D96]">
                                            {skill.level >= 90
                                                ? "Advanced"
                                                : skill.level >= 70
                                                  ? "Intermediate"
                                                  : "Learning"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Learning Statement */}
                <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#21191D] border border-[#49323C]">
                    <p className="text-sm text-[#C2AEB5] leading-relaxed">
                        <span className="font-semibold text-[#D6A19A]">
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