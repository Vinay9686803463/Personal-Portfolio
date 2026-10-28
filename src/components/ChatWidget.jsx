
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

import {
    personalInfo,
    chatbotPresets,
    queryChatbotResponse
} from "../data/portfolioData";

export default function ChatWidget() {
    const shouldReduceMotion = useReducedMotion();
    const [isOpen, setIsOpen] = useState(false);
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

        return () => {
            globalThis.removeEventListener("open-portfolio-chat", handleOpenChat);
        };
    }, []);

    const sendMessage = (text = input) => {
        const query = text.trim();

        if (!query) return;

        let reply;

        try {
            reply = queryChatbotResponse(query);

            if (typeof reply !== "string" || !reply.trim()) {
                reply = "I couldn't find an answer to that. Try asking about my skills, projects, education, or contact details.";
            }
        } catch (error) {
            console.error("Portfolio Assistant error:", error);
            reply = "Sorry, I couldn't process that question. Please try asking about skills, projects, education, or contact details.";
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
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#60A5FA] text-[#0B1220] transition-all duration-200 hover:bg-[#A5D8FF] active:translate-y-[1px]"
                aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
                aria-expanded={isOpen}
                aria-controls="portfolio-chat-panel"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Bot className="w-6 h-6" />
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.section
                        id="portfolio-chat-panel"
                        initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: shouldReduceMotion ? 0.15 : 0.2, ease: "easeOut" }}
                        role="dialog"
                        aria-label="Portfolio Assistant"
                        className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] flex flex-col overflow-hidden bg-[#0F192B] border border-[#26364D]"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 p-4 border-b border-[#26364D]">
                            <div className="flex items-center justify-center w-9 h-9 border border-[#26364D]">
                                <Bot className="w-5 h-5 text-[#A5D8FF]" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h2 className="text-sm font-semibold text-[#F1F5F9]">
                                    Portfolio Assistant
                                </h2>

                                <p className="text-xs text-[#A7B5C9]">
                                    Skills, projects &amp; background
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg text-[#A7B5C9] hover:text-[#F1F5F9] hover:bg-[#111D32] transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3"
                            aria-live="polite"
                        >
                            {messages.map((message, index) => (
                                <motion.div
                                    key={`${message.role}-${index}`}
                                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                                    className={`flex ${
                                        message.role === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[88%] px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${
                                            message.role === "user"
                                                ? "bg-[#60A5FA] text-[#0B1220]"
                                                : "border border-[#26364D] text-[#A7B5C9]"
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}

                            {messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {chatbotPresets.map((preset) => (
                                        <button
                                            key={preset}
                                            type="button"
                                            onClick={() => sendMessage(preset)}
                                            className="px-2.5 py-1 border border-[#26364D] text-xs text-[#A5D8FF] hover:border-[#60A5FA]/70 active:translate-y-[1px] transition-all duration-200"
                                        >
                                            {preset}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Message input */}
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                sendMessage();
                            }}
                            className="p-3 border-t border-[#26364D]"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(event) => setInput(event.target.value)}
                                    placeholder="Ask about skills or projects..."
                                    className="flex-1 min-w-0 bg-[#0B1220] border border-[#26364D] px-3 py-2 text-sm text-[#F1F5F9] placeholder:text-[#A7B5C9]/70 outline-none focus:border-[#60A5FA]"
                                    aria-label="Ask the portfolio assistant"
                                />

                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="p-2 bg-[#60A5FA] text-[#0B1220] disabled:opacity-40 transition-all duration-200 hover:bg-[#A5D8FF] active:translate-y-[1px]"
                                    aria-label="Send message"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>

                            <p className="text-[10px] text-[#A7B5C9]/70 mt-2 px-1">
                                Answers are based on the portfolio's configured information.
                            </p>
                        </form>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
}
