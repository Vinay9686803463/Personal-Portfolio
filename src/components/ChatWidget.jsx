import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  User, 
  RotateCcw, 
  ChevronRight,
} from 'lucide-react';
import { chatbotPresets, queryChatbotResponse } from '../data/portfolioData';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello. I am Vishal's portfolio AI concierge. Ask me anything regarding his engineering background, full-stack architectures, or RAG projects (like AdiBot).`
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = queryChatbotResponse(query);
      setMessages((prev) => [...prev, { sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 500);
  };

  const handlePresetClick = (preset) => {
    handleSend(preset);
  };

  const handleClear = () => {
    setMessages([
      {
        sender: 'bot',
        text: `Chat reset. Feel free to ask about projects, tech stack, or internship timelines.`
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Action Trigger Button */}
      {!isOpen && (
        <motion.button
          id="chat-toggle-btn"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group p-3.5 rounded-xl bg-[#291D23] text-[#F0DCE2] border border-[#84445C] shadow-2xl shadow-black/60 transition-colors hover:bg-[#33232B] flex items-center gap-2"
          aria-label="Open AI Assistant"
          title="Open AI Assistant"
        >
          <Bot className="w-5 h-5 text-[#BB786D]" />
          <span className="text-xs font-mono hidden sm:inline text-[#F0DCE2]">Ask AI</span>
        </motion.button>
      )}

      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[92vw] sm:w-[410px] h-[520px] rounded-2xl bg-[#21191D] border border-[#49323C] shadow-2xl shadow-black/80 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#291D23] border-b border-[#49323C] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#33232B] border border-[#49323C] flex items-center justify-center text-[#BB786D]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#F0DCE2] flex items-center gap-1.5">
                    Portfolio Concierge
                  </h3>
                  <p className="text-[10px] font-mono text-[#BB786D] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BB786D] animate-pulse" />
                    Gemini RAG Assistant Active
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  className="p-1.5 rounded-md text-[#A18D96] hover:text-[#F0DCE2] hover:bg-[#33232B] transition-colors"
                  title="Clear Chat"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md text-[#A18D96] hover:text-[#F0DCE2] hover:bg-[#33232B] transition-colors"
                  title="Close Assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs font-sans">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-md bg-[#291D23] border border-[#49323C] flex items-center justify-center text-[#BB786D] shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[84%] p-3.5 rounded-xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#522838] to-[#84445C] text-[#F0DCE2] border border-[#84445C]/50 rounded-tr-none'
                        : 'bg-[#291D23] border border-[#49323C] text-[#C2AEB5] rounded-tl-none space-y-1'
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-md bg-[#33232B] border border-[#49323C] flex items-center justify-center text-[#F0DCE2] shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing State */}
              {isTyping && (
                <div className="flex items-center gap-2 text-[#A18D96] font-mono text-[11px] pl-2">
                  <span className="w-2 h-2 rounded-full bg-[#BB786D] animate-ping" />
                  <span>Synthesizing response...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Suggested Queries */}
            <div className="px-3 py-2 bg-[#191316] border-t border-[#49323C] overflow-x-auto whitespace-nowrap scrollbar-none">
              <div className="flex gap-1.5">
                {chatbotPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePresetClick(preset)}
                    className="px-2.5 py-1 rounded-md bg-[#291D23] hover:bg-[#33232B] border border-[#49323C] text-[11px] text-[#C2AEB5] hover:text-[#F0DCE2] transition-colors shrink-0 flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-[#BB786D]" />
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#291D23] border-t border-[#49323C] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about skills, AdiBot, background..."
                className="flex-1 bg-[#191316] border border-[#49323C] rounded-lg px-3 py-2 text-xs text-[#F0DCE2] placeholder-[#A18D96] focus:outline-none focus:border-[#84445C] transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-lg bg-gradient-to-r from-[#522838] to-[#84445C] text-[#F0DCE2] border border-[#84445C]/50 hover:opacity-95 transition-opacity"
                aria-label="Send Query"
              >
                <Send className="w-3.5 h-3.5 text-[#F0DCE2]" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
