
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    Menu,
    X,
    Bot,
    Mail,
    ArrowUpRight
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";

const navItems = [
    { label: "Home", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const scrollPosition = window.scrollY + 220;

            for (const item of navItems) {
                const sectionId = item.href.substring(1);
                const section = document.getElementById(sectionId);

                if (!section) {
                    continue;
                }

                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (
                    scrollPosition >= top &&
                    scrollPosition < bottom
                ) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const openChatWidget = (event) => {
        event.preventDefault();

        const chatButton = document.getElementById(
            "chat-toggle-btn"
        );

        if (chatButton) {
            chatButton.click();
        }

        setMobileMenuOpen(false);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300"
        >
            <div
                className={`
                    max-w-6xl mx-auto rounded-xl
                    bg-[#21191D]/95 border border-[#49323C]
                    backdrop-blur-md transition-all duration-300
                    ${
                        scrolled
                            ? "py-3 px-5 shadow-xl shadow-black/40"
                            : "py-3.5 px-6"
                    }
                `}
            >
                <div className="flex items-center justify-between">

                    {/* Portfolio Brand */}
                    <a
                        href="#about"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 group"
                    >
                        <span
                            className="w-8 h-8 rounded-lg bg-[#291D23] border border-[#49323C] flex items-center justify-center font-editorial italic text-lg text-[#F0DCE2] group-hover:border-[#84445C] transition-colors"
                        >
                            V
                        </span>

                        <div className="flex flex-col text-left">
                            <span
                                className="font-semibold text-sm tracking-tight text-[#F0DCE2] group-hover:text-[#D6A19A] transition-colors"
                            >
                                {personalInfo.name}

                                <span className="text-[#BB786D]">
                                    .
                                </span>
                            </span>

                            <span
                                className="text-[11px] font-mono text-[#A18D96] uppercase tracking-wider"
                            >
                                B.Tech CSE &bull; Web Developer
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden md:flex items-center gap-1"
                        aria-label="Main navigation"
                    >
                        {navItems.map((item) => {
                            const sectionId = item.href.substring(1);
                            const isActive = activeSection === sectionId;

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                    className={`
                                        relative px-3.5 py-1.5 rounded-lg
                                        text-xs font-medium
                                        transition-all duration-200
                                        ${
                                            isActive
                                                ? "text-[#F0DCE2] bg-[#33232B] font-semibold"
                                                : "text-[#C2AEB5] hover:text-[#F0DCE2] hover:bg-[#291D23]"
                                        }
                                    `}
                                >
                                    {item.label}

                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavTab"
                                            className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#BB786D] rounded-full"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30
                                            }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-3">

                        <a
                            href="#chat-widget"
                            onClick={openChatWidget}
                            className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#291D23] hover:bg-[#33232B] text-[#C2AEB5] hover:text-[#F0DCE2] border border-[#49323C] hover:border-[#84445C] transition-all duration-200 flex items-center gap-2"
                        >
                            <Bot className="w-3.5 h-3.5 text-[#BB786D]" />

                            <span>
                                Ask Assistant
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#84445C] hover:bg-[#96546D] text-[#F0DCE2] border border-[#BB786D]/40 shadow-md shadow-[#522838]/30 transition-all duration-200 flex items-center gap-1.5"
                        >
                            <span>
                                Connect
                            </span>

                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => {
                            setMobileMenuOpen(!mobileMenuOpen);
                        }}
                        className="md:hidden p-2 rounded-lg bg-[#291D23] border border-[#49323C] text-[#C2AEB5] hover:text-[#F0DCE2] focus:outline-none"
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>

                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden max-w-6xl mx-auto mt-2 rounded-xl bg-[#21191D] p-5 border border-[#49323C] shadow-2xl space-y-4"
                    >

                        <nav
                            className="flex flex-col space-y-1"
                            aria-label="Mobile navigation"
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="px-3.5 py-2.5 rounded-lg text-sm text-[#C2AEB5] hover:text-[#F0DCE2] hover:bg-[#291D23] transition-colors font-medium"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Contact Links */}
                        <div className="pt-3 border-t border-[#49323C] flex flex-col gap-2">

                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                                className="w-full text-center py-2.5 rounded-lg bg-[#291D23] text-[#C2AEB5] hover:text-[#F0DCE2] border border-[#49323C] text-xs font-medium"
                            >
                                My GitHub Profile
                            </a>

                            <a
                                href={`mailto:${personalInfo.email}`}
                                onClick={closeMobileMenu}
                                className="w-full text-center py-2.5 rounded-lg bg-[#84445C] hover:bg-[#96546D] text-[#F0DCE2] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                            >
                                <Mail className="w-3.5 h-3.5" />

                                <span>
                                    Email Vinay
                                </span>
                            </a>

                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
