
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Experience() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="education"
            className="relative border-b border-white/[0.07] bg-[#050711] py-16 sm:py-20"
        >
            <div className="mx-auto px-6 sm:px-10">
                <div className="mb-8 text-center">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        Education
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Academic Background
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {education.map((item, index) => {
                        const isCompleted = item.status?.toLowerCase() === "completed";
                        const isPursuing = item.status?.toLowerCase() === "pursuing";

                        return (
                            <motion.div
                                key={`${item.degree}-${item.institution}`}
                                initial={
                                    shouldReduceMotion
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 10 }
                                }
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                                transition={{
                                    duration: shouldReduceMotion ? 0 : 0.35,
                                    delay: shouldReduceMotion ? 0 : index * 0.1,
                                    ease: "easeOut",
                                }}
                                className="group relative mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-white/[0.08] bg-[#10121f] transition-colors hover:border-violet-400/60"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

                                <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start sm:p-5">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-400/[0.08]">
                                        <GraduationCap
                                            size={22}
                                            className="text-violet-300"
                                        />
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <h3 className="text-lg font-medium text-white sm:text-xl">
                                                    {item.degree}
                                                </h3>

                                                <p className="mt-1 text-sm text-slate-300">
                                                    {item.institution}
                                                </p>
                                            </div>

                                            {isCompleted ? (
                                                <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                                                    {item.status}
                                                </span>
                                            ) : isPursuing ? (
                                                <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-orange-400/25 bg-orange-400/10 px-2.5 py-0.5 text-xs font-medium text-orange-300">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                                                    {item.status}
                                                </span>
                                            ) : (
                                                <span className="w-fit shrink-0 rounded-md border border-white/[0.09] px-2.5 py-1 text-xs text-slate-400">
                                                    {item.status}
                                                </span>
                                            )}
                                        </div>

                                    <p className="mt-3 text-sm text-slate-400">
                                        {item.location}
                                    </p>

                                    <p className="mt-1 text-sm text-violet-300">
                                        {item.university}
                                    </p>

                                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                                        {item.details}
                                    </p>
                                </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
