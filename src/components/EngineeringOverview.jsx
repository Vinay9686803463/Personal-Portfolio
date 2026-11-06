import { motion, useReducedMotion } from "framer-motion";
import { Code2, Server, Database } from "lucide-react";
import { skillCategories, projects } from "../data/portfolioData";

export default function EngineeringOverview() {
    const shouldReduceMotion = useReducedMotion();
    const totalProjects = projects.length;
    const totalTechnologies = skillCategories.reduce((sum, category) => sum + category.skills.length, 0);

    const cards = [
        {
            icon: Code2,
            title: "Full-Stack Development",
            description: "Building responsive interfaces and reusable components for practical web applications."
        },
        {
            icon: Server,
            title: "Backend Engineering",
            description: "Developing application logic, routes, and backend functionality with Python and Flask."
        },
        {
            icon: Database,
            title: "Database Engineering",
            description: "Working with relational databases, SQL, PostgreSQL, Supabase, and SQLAlchemy."
        }
    ];

    return (
        <section className="border-b border-white/[0.07] bg-[#0D1018] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="mb-10">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        Engineering Overview
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                        Technical Highlights
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                                className="rounded-2xl border border-white/[0.08] bg-[#171924] p-6"
                            >
                                <Icon className="text-violet-300" size={24} />
                                <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{card.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center">
                        <p className="text-2xl font-semibold text-white">{totalProjects}</p>
                        <p className="text-xs text-slate-400">Total Projects</p>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center">
                        <p className="text-2xl font-semibold text-white">{totalTechnologies}</p>
                        <p className="text-xs text-slate-400">Technologies</p>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center">
                        <p className="text-2xl font-semibold text-white">{totalProjects}</p>
                        <p className="text-xs text-slate-400">Academic Projects</p>
                    </div>
                </div>
            </div>
        </section>
    );
}