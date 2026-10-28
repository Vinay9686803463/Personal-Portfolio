import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowUp,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    globalThis.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="bg-[#0B1220] border-t border-[#26364D] pt-24 pb-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Contact Banner */}
        <div className="border border-[#26364D] bg-[#0F192B] p-8 sm:p-12 mb-20 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#60A5FA] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#60A5FA]" />
                <span>05 &bull; Contact &amp; Collaboration</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F1F5F9] tracking-tight">
                Let's build something meaningful.
              </h3>

              <p className="text-sm sm:text-base text-[#A7B5C9] max-w-xl leading-relaxed">
                I'm a Computer Science student interested in web development,
                backend systems, and building practical software projects.
                Feel free to contact me to discuss projects or collaboration.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#60A5FA] text-[#0B1220] hover:bg-[#A5D8FF] active:translate-y-[1px] transition-all duration-200">
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-4 border border-[#26364D] bg-[#0B1220] p-6 space-y-4">
              <div className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider">
                Direct Channels
              </div>

              <div className="space-y-3 text-xs text-[#A7B5C9]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Bengaluru, Karnataka
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F1F5F9] transition-colors"
                  >
                    github.com/Vinay9686803463
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F1F5F9] transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#26364D] text-xs">

          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-[#F0DCE2] tracking-tight">
                Vinay Sollapure<span className="text-[#BB786D]">.</span>
              </span>
            </div>

            <p className="text-xs text-[#A18D96] leading-relaxed max-w-sm">
              B.Tech Computer Science student building web applications
              and practical software projects using modern development tools.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#F0DCE2] uppercase tracking-wider block font-semibold">
              Index
            </span>

            <ul className="space-y-1.5 text-[#C2AEB5]">
              <li>
                <a href="#about" className="hover:text-[#F0DCE2] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F0DCE2] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F0DCE2] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#F0DCE2] transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F0DCE2] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Profiles and Back to Top */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#F1F5F9] uppercase tracking-wider block mb-2">
                Profiles
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 border border-[#26364D] text-[#A7B5C9] hover:text-[#F1F5F9] hover:border-[#60A5FA]/70 transition-colors"
                  title="GitHub"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 border border-[#26364D] text-[#A7B5C9] hover:text-[#F1F5F9] hover:border-[#60A5FA]/70 transition-colors"
                  title="LinkedIn"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-1.5 border border-[#26364D] text-[#A7B5C9] hover:text-[#F1F5F9] hover:border-[#60A5FA]/70 transition-colors"
                  title="Email"
                  aria-label="Send email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
            type="button"
              onClick={scrollToTop}
              className="px-3 py-1.5 border border-[#26364D] text-[#A7B5C9] hover:text-[#F1F5F9] hover:border-[#60A5FA]/70 active:translate-y-[1px] text-xs font-mono flex items-center gap-1.5 self-start transition-all duration-200"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7B5C9] gap-4 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Vinay Sollapure
            &bull; All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}