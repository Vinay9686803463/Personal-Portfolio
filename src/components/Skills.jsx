
import { motion, useReducedMotion } from "framer-motion";
import {
    SiHtml5,
    SiJavascript,
    SiPython,
    SiFlask,
    SiGit,
    SiGithub
} from "react-icons/si";
import { VscDatabase } from "react-icons/vsc";

const CssLogo = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#1572B6" />
        <path d="M12 4H18.5L18 9H12V4Z" fill="#33A9DC" />
        <path
            d="M12 13H16L15.5 17L12 18.2L8.5 17L8.25 15H10.5L10.6 15.8L12 16.2L13.4 15.8L13.6 14H8.1L7.6 9H12V13Z"
            fill="#FFFFFF"
        />
    </svg>
);

const skills = [
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: CssLogo, color: "#1572B6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "Flask", Icon: SiFlask, color: "#FFFFFF" },
    { name: "SQL", Icon: VscDatabase, color: "#336791" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" }
];

export default function Skills() {
    const shouldReduceMotion = useReducedMotion();
    const columns = [
        skills.slice(0, 3),
        skills.slice(3, 6),
        skills.slice(6, 8)
    ];

    return (
        <section
            id="skills"
            className="relative border-b border-white/[0.07] bg-[#050711] py-16 sm:py-20"
        >
            <div className="mx-auto max-w-6xl px-6 sm:px-10">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                        MY SKILLS
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight text-[#F4F5FA] sm:text-3xl md:text-4xl">
                        Technologies I Work With
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {columns.map((column, columnIndex) => (
                        <div
                            key={columnIndex}
                            className="flex flex-col gap-4"
                        >
                            {column.map((skill, skillIndex) => {
                                const Icon = skill.Icon;

                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={
                                            shouldReduceMotion
                                                ? { opacity: 1, y: 0 }
                                                : { opacity: 0, y: 6 }
                                        }
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{
                                            once: true,
                                            amount: 0.4
                                        }}
                                        transition={{
                                            duration: shouldReduceMotion ? 0 : 0.3,
                                            delay: shouldReduceMotion
                                                ? 0
                                                : columnIndex * 0.05 + skillIndex * 0.04,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <div className="mb-2 flex items-center justify-between gap-3">
                                            <span className="text-sm text-[#F4F5FA]">
                                                {skill.name}
                                            </span>

                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                                                {Icon ? (
                                                    <Icon
                                                        size={22}
                                                        color={skill.color || "#FFFFFF"}
                                                        aria-hidden="true"
                                                    />
                                                ) : null}
                                            </span>
                                        </div>

                                        <div className="h-[4px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: "100%" }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.4
                                                }}
                                                transition={{
                                                    duration: shouldReduceMotion ? 0 : 0.8,
                                                    delay: shouldReduceMotion
                                                        ? 0
                                                        : columnIndex * 0.05 + skillIndex * 0.05,
                                                    ease: "easeOut"
                                                }}
                                                className="h-full rounded-full bg-gradient-to-r from-[#7957F6] to-[#A78BFA]"
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
