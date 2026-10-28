
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

import {
    personalInfo,
    chatbotPresets,
    queryChatbotResponse
} from "../data/portfolioData";

export default function ChatWidget() {
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
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#84445C] text-[#F0DCE2] border border-[#BB786D] shadow-lg hover:bg-[#6F394D] transition-colors"
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
                        initial={{ opacity: 0, y: 18, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 18, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        role="dialog"
                        aria-label="Portfolio Assistant"
                        className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] flex flex-col overflow-hidden rounded-2xl bg-[#21191D] border border-[#49323C] shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 p-4 border-b border-[#49323C] bg-[#291D23]">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#21191D] border border-[#49323C]">
                                <Bot className="w-5 h-5 text-[#D6A19A]" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h2 className="text-sm font-semibold text-[#F0DCE2]">
                                    Portfolio Assistant
                                </h2>

                                <p className="text-xs text-[#A18D96]">
                                    Skills, projects &amp; background
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg text-[#C2AEB5] hover:text-[#F0DCE2] hover:bg-[#49323C]/40 transition-colors"
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
                                <div
                                    key={`${message.role}-${index}`}
                                    className={`flex ${
                                        message.role === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[88%] rounded-xl px-3.5 py-3 text-sm leading-relaxed whitespace-pre-line ${
                                            message.role === "user"
                                                ? "bg-[#84445C] text-[#F0DCE2]"
                                                : "bg-[#291D23] border border-[#49323C] text-[#C2AEB5]"
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
                                            className="px-3 py-1.5 rounded-lg border border-[#49323C] text-xs text-[#D6A19A] hover:bg-[#291D23] transition-colors"
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
                            className="p-3 border-t border-[#49323C] bg-[#291D23]"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(event) => setInput(event.target.value)}
                                    placeholder="Ask about skills or projects..."
                                    className="flex-1 min-w-0 bg-[#21191D] border border-[#49323C] rounded-xl px-3 py-2.5 text-sm text-[#F0DCE2] placeholder:text-[#806C75] outline-none focus:border-[#BB786D]"
                                    aria-label="Ask the portfolio assistant"
                                />

                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="p-3 rounded-xl bg-[#84445C] text-[#F0DCE2] hover:bg-[#6F394D] disabled:opacity-40 transition-colors"
                                    aria-label="Send message"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>

                            <p className="text-[10px] text-[#806C75] mt-2 px-1">
                                Answers are based on the portfolio's configured information.
                            </p>
                        </form>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
}
