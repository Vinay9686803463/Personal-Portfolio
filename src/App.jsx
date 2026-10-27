
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-background text-textPrimary font-sans antialiased">
            <Navbar />

            <main>
                <Hero />
                <Skills />
                <Projects />
                <Experience />
            </main>

            <Footer />
            <ChatWidget />
        </div>
    );
}
