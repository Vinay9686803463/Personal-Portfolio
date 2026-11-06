import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";

export default function Skills() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="skills" className="relative border-b border-white/[0.07] bg-[#0D1018] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="mb-10">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        SKILLS
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                        Technical Skills
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                            className="rounded-2xl border border-white/[0.08] bg-[#171924] p-6"
                        >
                            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{category.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="rounded-md border border-violet-400/30 bg-violet-400/[0.08] px-3 py-1 text-xs text-violet-200"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}