import { motion, useReducedMotion } from "framer-motion";

const skillData = [
    { name: "HTML", logo: "/icons/html5.svg" },
    { name: "CSS", logo: "/icons/css3.svg" },
    { name: "JavaScript", logo: "/icons/javascript.svg" },
    { name: "Python", logo: "/icons/python.svg" },
    { name: "Flask", logo: "/icons/flask.svg" },
    { name: "SQL", logo: "/icons/mysql.svg" },
    { name: "Git", logo: "/icons/git.svg" },
    { name: "GitHub", logo: "/icons/github.svg" }
];

export default function Skills() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="skills" className="relative border-b border-white/[0.07] bg-[#050711] py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-10">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                        MY SKILLS
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-[#F4F5FA] sm:text-3xl md:text-4xl">
                        Technologies I Work With
                    </h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                    {skillData.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.3,
                                delay: shouldReduceMotion ? 0 : index * 0.04,
                                ease: "easeOut"
                            }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                                <img
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    className="h-full w-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-xs text-[#F4F5FA] sm:text-sm">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
