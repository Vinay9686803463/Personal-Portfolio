import { motion, useReducedMotion } from "framer-motion";

export default function About() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="about-details"
            className="relative scroll-mt-28 border-b border-white/[0.07] bg-[#0D1018] py-16 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <motion.div
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
                    className="w-full"
                >
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        ABOUT ME
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        Building Practical Solutions Through Code
                    </h2>

                    <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                        <p>
                            I'm Vinay Sollapure, a third-year B.Tech Computer Science and Engineering student at Aditya College of Engineering and Technology, Bengaluru.
                        </p>
                        <p>
                            I'm interested in full-stack development, building responsive web applications, developing backend functionality and working with databases.
                        </p>
                        <p>
                            I enjoy exploring new technologies, improving my programming and problem-solving skills, and turning ideas into functional applications. My goal is to grow as a developer through meaningful projects and practical experience.
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {[
                            "Full-Stack Development",
                            "Backend & Database Development",
                            "Continuous Learning"
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-sm text-slate-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
