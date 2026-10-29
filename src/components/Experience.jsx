import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Experience() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="education" className="relative border-b border-white/[0.07] bg-[#050711] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="mb-10">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        Education
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Academic Background</h2>
                </div>

                <motion.div
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#10121f]"
                >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
                    <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
                        <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-400/[0.08]">
                            <GraduationCap size={22} className="text-violet-300" />
                        </span>
                        <div className="flex-1">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-medium text-white sm:text-xl">
                                        {education.degree}
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-300">
                                        {education.institution}
                                    </p>
                                </div>
                                <span className="rounded-md border border-white/[0.09] px-2.5 py-1 text-xs text-slate-400">
                                    Currently Pursuing
                                </span>
                            </div>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                                Currently pursuing a B.Tech in Computer Science and Engineering.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
