import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Bot, X, Send } from "lucide-react";
import { personalInfo, chatbotPresets, queryChatbotResponse } from "../data/portfolioData";

export default function ChatWidget({ isOpen: controlledIsOpen, onOpen, onClose, onToggle } = {}) {
    const shouldReduceMotion = useReducedMotion();
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : uncontrolledIsOpen;
    const setIsOpen = useCallback((value) => {
        if (controlledIsOpen !== undefined) {
            if (typeof value === "function") {
                const nextValue = value(isOpen);
                if (nextValue && onOpen) onOpen();
                else if (!nextValue && onClose) onClose();
            } else {
                if (value && onOpen) onOpen();
                else if (!value && onClose) onClose();
            }
            if (onToggle && typeof value !== "function") {
                // allow toggle to be driven externally
            }
            return;
        }
        setUncontrolledIsOpen(value);
    }, [controlledIsOpen, isOpen, onOpen, onClose, onToggle]);
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            text: `Hello! I'm ${personalInfo.name}'s Portfolio Assistant. Ask me about skills, projects, education, or contact details.`
        }
    ]);

    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        globalThis.addEventListener("open-portfolio-chat", handleOpenChat);
        return () => globalThis.removeEventListener("open-portfolio-chat", handleOpenChat);
    }, [setIsOpen]);

    const sendMessage = (text = input) => {
        const query = text.trim();
        if (!query) return;

        let reply;
        try {
            reply = queryChatbotResponse(query);
            if (typeof reply !== "string" || !reply.trim()) {
                reply = "I can help with skills, projects, education, and contact information. Try asking about one of these topics.";
            }
        } catch (error) {
            console.error("Portfolio Assistant error:", error);
            reply = "I can help with skills, projects, education, and contact information. Try asking about one of these topics.";
        }

        setMessages((previous) => [
            ...previous,
            { role: "user", text: query },
            { role: "assistant", text: reply }
        ]);
        setInput("");
    };

    return (
        <>
            <button
                id="chat-toggle-btn"
                type="button"
                onClick={() => setIsOpen((previous) => !previous)}
                className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-white transition-colors hover:bg-violet-500"
                aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
                aria-expanded={isOpen}
                aria-controls="portfolio-chat-panel"
            >
                {isOpen ? <X size={18} /> : <Bot size={18} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.section
                        id="portfolio-chat-panel"
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: shouldReduceMotion ? 0.15 : 0.2 }}
                        role="dialog"
                        aria-label="Portfolio Assistant"
                        className="fixed bottom-20 right-4 z-50 flex max-h-[70vh] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-white/[0.1] bg-[#10121f] sm:right-5 sm:w-96"
                    >
                        <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-400/[0.08]">
                                <Bot size={18} className="text-violet-300" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-white">Portfolio Assistant</p>
                                <p className="text-xs text-slate-500">Skills, projects & background</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-white"
                                aria-label="Close chat"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
                            {messages.map((message, index) => (
                                <div
                                    key={`${message.role}-${index}`}
                                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[88%] whitespace-pre-line rounded-lg px-3 py-2 text-sm leading-relaxed ${
                                            message.role === "user"
                                                ? "bg-violet-600 text-white"
                                                : "border border-white/[0.08] text-slate-300"
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}

                            {messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {chatbotPresets.map((preset) => (
                                        <button
                                            key={preset}
                                            type="button"
                                            onClick={() => sendMessage(preset)}
                                            className="rounded-md border border-white/[0.09] px-2.5 py-1 text-xs text-slate-300 hover:border-violet-400/40 hover:text-white"
                                        >
                                            {preset}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                sendMessage();
                            }}
                            className="border-t border-white/[0.08] p-3"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(event) => setInput(event.target.value)}
                                    placeholder="Ask about skills or projects..."
                                    className="flex-1 rounded-md border border-white/[0.09] bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/40 focus:outline-none"
                                    aria-label="Ask the portfolio assistant"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="flex h-9 w-9 items-center justify-center rounded-md bg-violet-600 text-white disabled:opacity-40 hover:bg-violet-500"
                                    aria-label="Send message"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
}
