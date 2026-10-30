import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Mail, Github, Code2, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const navItems = [
    { label: "Home", href: "#about" },
    { label: "About", href: "#about-details" },
    { label: "Services", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
];

export default function Navbar() {
    useReducedMotion();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    
useEffect(() => {
    const handleScroll = () => {
        setScrolled(globalThis.scrollY > 20);

        const atBottom =
            globalThis.innerHeight + globalThis.scrollY >=
            document.documentElement.scrollHeight - 10;

        if (atBottom) {
            setActiveSection("contact");
            return;
        }

        let currentSection = "about";

        for (const item of navItems) {
            const sectionId = item.href.substring(1);
            const section = document.getElementById(sectionId);

            if (section && section.getBoundingClientRect().top <= 160) {
                currentSection = sectionId;
            }
        }

        setActiveSection(currentSection);
    };

    handleScroll();

    globalThis.addEventListener("scroll", handleScroll, { passive: true });
    globalThis.addEventListener("resize", handleScroll);

    return () => {
        globalThis.removeEventListener("scroll", handleScroll);
        globalThis.removeEventListener("resize", handleScroll);
    };
}, []);


    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
            <div
                className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/[0.06] px-6 py-2.5 transition-all duration-300 sm:px-8 ${
                    scrolled
                        ? "bg-[#070710]/95 backdrop-blur"
                        : "bg-[#070710]/90 backdrop-blur"
                }`}
            >
                <a href="#about" onClick={closeMobileMenu} className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/40 bg-violet-400/[0.12]">
                        <Code2 size={16} className="text-violet-300" />
                    </span>
                    <span className="text-sm font-medium tracking-tight text-white">
                        Vinay<span className="text-violet-400">.</span>dev
                    </span>
                </a>

                <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
                    {navItems.map((item) => {
                        const sectionId = item.href.substring(1);
                        const isActive = activeSection === sectionId;

                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                aria-current={isActive ? "location" : undefined}
                                className={`relative px-3 py-2 text-sm transition-colors ${
                                    isActive
                                        ? "text-white"
                                        : "text-slate-400 hover:text-white"
                                }`}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-violet-400" />
                                )}
                            </a>
                        );
                    })}
                </nav>

                <div className="hidden items-center gap-2 lg:flex">
                    <a
                        href={personalInfo.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="p-2 text-slate-400 transition-colors hover:text-white"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        aria-label="Email"
                        className="p-2 text-slate-400 transition-colors hover:text-white"
                    >
                        <Mail size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-2 text-sm font-medium text-white transition-all hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.9)]"
                    >
                        Hire Me
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setMobileMenuOpen((previous) => !previous)}
                    className="p-2 text-slate-300 md:hidden"
                    aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mx-auto mt-2 max-w-7xl rounded-lg border border-white/[0.08] bg-[#050711]/95 px-4 py-4 backdrop-blur md:hidden"
                    >
                        <nav className="flex flex-col">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="px-2 py-2 text-sm text-slate-300 hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-3">
                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                            >
                                <Github size={16} />
                                GitHub
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                            >
                                <Mail size={16} />
                                Email
                            </a>
                            <a
                                href="#contact"
                                onClick={closeMobileMenu}
                                className="ml-auto inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white"
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
