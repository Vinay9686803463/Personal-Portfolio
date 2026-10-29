import { motion, useReducedMotion } from "framer-motion";

const HtmlIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#E34F26" />
        <path d="M12 4H19L18.5 9H12V4Z" fill="#EF652A" />
        <path d="M12 13H16L15.5 17L12 18.2L8.5 17L8.25 15H10.5L10.6 15.8L12 16.2L13.4 15.8L13.6 14H8.1L7.6 9H12V13Z" fill="#FFFFFF" />
    </svg>
);

const CssIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#1572B6" />
        <path d="M12 4H18.5L18 9H12V4Z" fill="#33A9DC" />
        <path d="M12 13H16L15.5 17L12 18.2L8.5 17L8.25 15H10.5L10.6 15.8L12 16.2L13.4 15.8L13.6 14H8.1L7.6 9H12V13Z" fill="#FFFFFF" />
    </svg>
);

const JsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="#F7DF1E" />
        <path d="M16.5 16.2C16.8 16.8 17.2 17.2 18 17.2C18.7 17.2 19.1 16.9 19.1 16.4C19.1 15.9 18.8 15.6 18 15.3L17.5 15.1C16.2 14.6 15.4 13.9 15.4 12.7C15.4 11.6 16.3 10.8 17.6 10.8C18.6 10.8 19.3 11.1 19.8 11.9L18.8 12.7C18.6 12.3 18.3 12.1 17.9 12.1C17.5 12.1 17.3 12.3 17.3 12.6C17.3 12.9 17.5 13.1 18.2 13.4L18.7 13.6C20.2 14.2 21 14.9 21 16.3C21 17.8 19.9 18.6 18.1 18.6C16.6 18.6 15.6 18 15 17.1L16.5 16.2ZM9.8 16.3C10 16.8 10.3 17.2 10.9 17.2C11.4 17.2 11.7 17 11.7 16.4V10.9H13.6V16.4C13.6 18 12.6 18.6 11 18.6C9.6 18.6 8.8 17.9 8.5 17L9.8 16.3Z" fill="#000000" />
    </svg>
);

const PythonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.8 2 8 2.4 8 4V6H12V7H5C3 7 2 8 2 10V14C2 16 3 17 5 17H7V15C7 13 8 12 10 12H14C16 12 17 11 17 9V4C17 2.4 15.2 2 13 2H12ZM9 5C9.6 5 10 5.4 10 6C10 6.6 9.6 7 9 7C8.4 7 8 6.6 8 6C8 5.4 8.4 5 9 5Z" fill="#3776AB" />
        <path d="M12 22C14.2 22 16 21.6 16 19.5V17.5H12V16.5H19C21 16.5 22 15.5 22 13.5V9.5C22 7.5 21 6.5 19 6.5H17V8.5C17 10.5 16 11.5 14 11.5H10C8 11.5 7 12.5 7 14.5V19.5C7 21.6 8.8 22 11 22H12ZM15 19C14.4 19 14 18.6 14 18C14 17.4 14.4 17 15 17C15.6 17 16 17.4 16 18C16 18.6 15.6 19 15 19Z" fill="#FFD43B" />
    </svg>
);

const FlaskIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2V7L5 14V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V14L14 7V2H10Z" fill="#000000" />
        <path d="M10 9H14L17 14V20H7V14L10 9Z" fill="#FFFFFF" />
    </svg>
);

const SqlIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791" />
        <path d="M4 6V18C4 19.7 7.6 21 12 21C16.4 21 20 19.7 20 18V6" stroke="#336791" strokeWidth="2" fill="none" />
        <path d="M4 12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12" stroke="#336791" strokeWidth="2" fill="none" />
    </svg>
);

const PostgresIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791" />
        <path d="M4 6V18C4 19.7 7.6 21 12 21C16.4 21 20 19.7 20 18V6" stroke="#336791" strokeWidth="2" fill="none" />
        <path d="M4 12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12" stroke="#336791" strokeWidth="2" fill="none" />
    </svg>
);

const SupabaseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 2L5 12.5H12L10.5 22L19 11.5H12L13.5 2Z" fill="#3ECF8E" />
    </svg>
);

const GitIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5 11.5L12.5 2.5C12.1 2.1 11.5 2.1 11.1 2.5L9.5 4.1L11.7 6.3C12.1 6.1 12.6 6.1 13 6.3C13.4 6.5 13.7 6.9 13.8 7.4C13.9 7.9 13.8 8.4 13.5 8.7C13.2 9.1 12.8 9.3 12.3 9.3C11.8 9.3 11.4 9.1 11.1 8.7C10.8 8.4 10.7 7.9 10.8 7.4L8.7 5.3L3.5 10.5C3.1 10.9 3.1 11.5 3.5 11.9L12.5 20.9C12.9 21.3 13.5 21.3 13.9 20.9L21.5 13.3C21.9 12.9 21.9 12.1 21.5 11.5Z" fill="#F05032" />
    </svg>
);

const GithubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.66 4.87 20.32 8.84 21.63C9.34 21.72 9.5 21.42 9.5 21.16C9.5 20.93 9.49 20.27 9.49 19.52C7 20.04 6.35 19.09 6.19 18.64C6.1 18.41 5.61 17.57 5.19 17.34C4.84 17.16 4.34 16.64 5.18 16.63C5.97 16.62 6.53 17.42 6.68 17.67C7.58 19.02 8.99 18.59 9.52 18.33C9.61 17.66 9.87 17.22 10.16 16.97C7.97 16.72 5.69 15.9 5.69 12.13C5.69 11.06 6.09 10.19 6.7 9.51C6.6 9.26 6.25 8.28 6.8 7C6.8 7 7.49 6.74 9.49 8.02C10.29 7.8 11.15 7.69 12.01 7.69C12.87 7.69 13.73 7.8 14.53 8.02C16.53 6.73 17.22 7 17.22 7C17.77 8.28 17.42 9.26 17.32 9.51C17.93 10.19 18.33 11.05 18.33 12.13C18.33 15.91 16.04 16.72 13.85 16.97C14.22 17.29 14.54 17.92 14.54 18.9C14.54 20.29 14.53 20.84 14.53 21.16C14.53 21.42 14.69 21.73 15.19 21.63C19.14 20.32 22 16.66 22 12.26C22 6.58 17.52 2 12 2Z" fill="#F0F6FC" />
    </svg>
);

const skillData = [
    { name: "HTML", icon: HtmlIcon },
    { name: "CSS", icon: CssIcon },
    { name: "JavaScript", icon: JsIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Flask", icon: FlaskIcon },
    { name: "SQL", icon: SqlIcon },
    { name: "PostgreSQL", icon: PostgresIcon },
    { name: "Supabase", icon: SupabaseIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GithubIcon }
];

export default function Skills() {
    const shouldReduceMotion = useReducedMotion();
    const columns = [
        skillData.slice(0, 3),
        skillData.slice(3, 7),
        skillData.slice(7, 10)
    ];

    return (
        <section id="skills" className="relative border-b border-white/[0.07] bg-[#050711] py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-10">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                        MY SKILLS
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                        Technologies I Master
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {columns.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col gap-4">
                            {column.map((skill, skillIndex) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{
                                            duration: shouldReduceMotion ? 0 : 0.35,
                                            delay: shouldReduceMotion ? 0 : columnIndex * 0.05 + skillIndex * 0.04,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <div className="mb-2 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-6 w-6 items-center justify-center">
                                                    <Icon />
                                                </span>
                                                <span className="text-sm text-[#F4F5FA]">{skill.name}</span>
                                            </div>
                                        </div>
                                        <div className="h-[4px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: "100%" }}
                                                viewport={{ once: true, amount: 0.4 }}
                                                transition={{
                                                    duration: shouldReduceMotion ? 0 : 0.9,
                                                    delay: shouldReduceMotion ? 0 : columnIndex * 0.05 + skillIndex * 0.05,
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
