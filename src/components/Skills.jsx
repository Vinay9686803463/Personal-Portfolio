import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";

export default function Skills() {
    const shouldReduceMotion = useReducedMotion();
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredCategories =
        activeCategory === "all"
            ? skillCategories
            : skillCategories.filter((category) => category.id === activeCategory);

    const tabs = [
        { id: "all", label: "All" },
        ...skillCategories.map((category) => ({ id: category.id, label: category.title }))
    ];

    return (
        <section id="skills" className="relative border-b border-white/[0.07] bg-[#050711] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                            02 — Technical Skills
                        </p>
                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Skills & Technical Expertise
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                            Technologies and tools I use to develop web applications, build backend
                            functionality, work with databases, and manage software projects.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveCategory(tab.id)}
                                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                                    activeCategory === tab.id
                                        ? "border border-violet-400/40 bg-violet-400/[0.08] text-white"
                                        : "border border-white/[0.09] text-slate-400 hover:text-white"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {filteredCategories.map((category, index) => (
                        <motion.article
                            key={category.id}
                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.4,
                                delay: shouldReduceMotion ? 0 : index * 0.05,
                                ease: "easeOut"
                            }}
                            className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#10121f] p-6 transition-colors hover:border-violet-400/40 sm:p-7"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="mb-5 flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-medium text-white">{category.title}</h3>
                                    <p className="mt-1 text-sm text-slate-400">{category.description}</p>
                                </div>
                                <span className="rounded-md border border-white/[0.09] px-2 py-0.5 text-xs text-slate-400">
                                    {category.skills.length}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 rounded-md border border-white/[0.07] bg-white/[0.01] px-3 py-2 text-sm text-slate-200 transition-colors hover:border-violet-400/40 hover:text-white"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#10121f] px-6 py-5 sm:px-7">
                    <p className="text-sm text-slate-400">
                        <span className="text-violet-300">Continuous learning:</span> I continue to
                        improve my programming and problem-solving skills by building practical projects
                        and exploring new development tools.
                    </p>
                </div>
            </div>
        </section>
    );
}
