import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Code2, Sparkles } from "lucide-react";

const highlights = [
    { icon: BookOpen, text: "Computer Science Student" },
    { icon: Code2, text: "Web Development Enthusiast" },
    { icon: Sparkles, text: "Always Learning" }
];

export default function About() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="about-details"
            className="relative scroll-mt-28 border-b border-white/[0.07] bg-[#050711] py-16 sm:py-20"
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
                        Get to Know Me
                    </h2>

                    <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                        <p>
                            I'm a third-year B.Tech student in Computer Science and Engineering at Aditya College of Engineering and Technology, Bengaluru. I'm interested in web development, backend systems, and building practical software projects.
                        </p>
                        <p>
                            I enjoy exploring new technologies, strengthening my programming and problem-solving skills, and turning ideas into functional applications. My goal is to continue growing as a developer while gaining hands-on experience through meaningful projects and collaboration.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {highlights.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.text}
                                    className="inline-flex items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.01] px-3 py-1.5 text-sm text-slate-300"
                                >
                                    <Icon size={16} className="text-violet-300" />
                                    <span>{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
