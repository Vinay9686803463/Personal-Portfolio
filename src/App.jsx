
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";

export default function App() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const openChat = () => setIsChatOpen(true);
    const closeChat = () => setIsChatOpen(false);
    const toggleChat = () => setIsChatOpen((prev) => !prev);

    return (
        <div className="min-h-screen bg-[#050711] text-[#F4F5FA] font-sans antialiased">
            <Navbar onOpenChat={openChat} />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
            </main>

            <Footer />
            <ChatWidget isOpen={isChatOpen} onOpen={openChat} onClose={closeChat} onToggle={toggleChat} />
        </div>
    );
}
