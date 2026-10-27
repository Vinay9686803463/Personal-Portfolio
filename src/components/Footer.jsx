import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ArrowUp, 
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#21191D] border-t border-[#49323C] pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Banner Header */}
        <div className="rounded-2xl bg-[#291D23] border border-[#49323C] p-8 sm:p-12 mb-20 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#BB786D] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#84445C]" />
                <span>05 &bull; Inquiries &amp; Collaboration</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F0DCE2] tracking-tight">
                Let's engineer something <span className="font-editorial italic font-normal text-[#D6A19A]">extraordinary</span>.
              </h3>
              
              <p className="text-sm sm:text-base text-[#C2AEB5] max-w-xl leading-relaxed">
                Currently open for software engineering internships, frontend web development roles, and generative AI research projects. Feel free to initiate contact directly.
              </p>

              {/* Direct Actions */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary"
                >
                  <Mail className="w-4 h-4 text-[#F0DCE2]" />
                  <span>{personalInfo.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F0DCE2]" />
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="btn-secondary"
                >
                  <Phone className="w-4 h-4 text-[#BB786D]" />
                  <span>+91 {personalInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="lg:col-span-4 rounded-xl bg-[#21191D] border border-[#49323C] p-6 space-y-4">
              <div className="text-xs font-mono text-[#BB786D] uppercase tracking-wider font-semibold">
                Direct Channels
              </div>
              
              <div className="space-y-3 text-xs text-[#C2AEB5]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#BB786D] shrink-0 mt-0.5" />
                  <span className="leading-snug">{personalInfo.address}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#BB786D] shrink-0" />
                  <a 
                    href={personalInfo.socials.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#F0DCE2] underline decoration-[#49323C] hover:decoration-[#BB786D] transition-colors"
                  >
                    github.com/vishal-s-sollapure
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#BB786D] shrink-0" />
                  <a 
                    href={personalInfo.socials.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#F0DCE2] underline decoration-[#49323C] hover:decoration-[#BB786D] transition-colors"
                  >
                    linkedin.com/in/vishal-s-sollapure-0bb4b2384
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#49323C] text-xs">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-[#F0DCE2] tracking-tight">
                Vishal S Sollapure<span className="text-[#BB786D]">.</span>
              </span>
            </div>
            <p className="text-xs text-[#A18D96] leading-relaxed max-w-sm">
              Full-Stack Web Developer &amp; AI Engineer crafting modern React architectures, RAG pipelines with Gemini API, and production web applications.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#F0DCE2] uppercase tracking-wider block font-semibold">
              Index
            </span>
            <ul className="space-y-1.5 text-[#C2AEB5]">
              <li><a href="#about" className="hover:text-[#F0DCE2] transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-[#F0DCE2] transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-[#F0DCE2] transition-colors">Skills Matrix</a></li>
              <li><a href="#experience" className="hover:text-[#F0DCE2] transition-colors">Experience &amp; Education</a></li>
              <li><a href="#achievements" className="hover:text-[#F0DCE2] transition-colors">Achievements</a></li>
            </ul>
          </div>

          {/* Connect & Back to Top */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#F0DCE2] uppercase tracking-wider block font-semibold mb-2">
                Profiles
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#291D23] border border-[#49323C] text-[#C2AEB5] hover:text-[#F0DCE2] hover:border-[#84445C] transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#291D23] border border-[#49323C] text-[#C2AEB5] hover:text-[#F0DCE2] hover:border-[#84445C] transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-[#291D23] border border-[#49323C] text-[#C2AEB5] hover:text-[#F0DCE2] hover:border-[#84445C] transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-lg bg-[#291D23] hover:bg-[#33232B] border border-[#49323C] text-[#C2AEB5] hover:text-[#F0DCE2] text-xs font-mono flex items-center gap-1.5 self-start transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#BB786D]" />
              <span>Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A18D96] gap-4 font-mono">
          <p>&copy; {new Date().getFullYear()} Vishal S Sollapure &bull; All Rights Reserved.</p>
          <p className="text-[11px] text-[#A18D96]">
            Plum, Dusty Rose &amp; Clay Editorial Design System
          </p>
        </div>

      </div>
    </footer>
  );
}
