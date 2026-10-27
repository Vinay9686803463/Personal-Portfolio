import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ArrowUpRight,
  CheckCircle2, 
  Terminal,
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & GenAI', 'AI & Web Platform', 'GenAI Application', 'Frontend Web'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Separate flagship project from secondary projects for varied editorial layout
  const flagshipProject = projects.find(p => p.id === 'adibot');
  const otherProjects = filteredProjects.filter(p => activeFilter === 'All' ? p.id !== 'adibot' : true);

  return (
    <section id="projects" className="py-28 bg-[#191316] relative border-t border-[#49323C]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#49323C] gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#BB786D] uppercase tracking-wider">
              <span>01 &bull; Technical Index</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0DCE2] tracking-tight">
              Selected <span className="font-editorial italic font-normal text-[#D6A19A]">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-[#C2AEB5] leading-relaxed">
              Real-world systems engineered across generative AI, responsive frontend architectures, and data-driven web applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#33232B] text-[#F0DCE2] border border-[#84445C] font-semibold'
                    : 'bg-[#21191D] text-[#A18D96] border border-[#49323C] hover:text-[#F0DCE2] hover:bg-[#291D23]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Feature Display: AdiBot (When 'All' or 'AI & GenAI' active) */}
        {flagshipProject && (activeFilter === 'All' || activeFilter === 'AI & GenAI') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 rounded-2xl bg-[#291D23] border border-[#49323C] p-6 sm:p-10 space-y-6 transition-all hover:border-[#84445C]/80"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#49323C]/70">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded bg-[#33232B] text-[#BB786D] border border-[#49323C] text-[11px] font-mono uppercase tracking-wider font-semibold">
                  Flagship Architectural Work
                </span>
                <span className="text-xs font-mono text-[#A18D96]">AI &bull; RAG &bull; Gemini API</span>
              </div>
              <span className="text-xs font-mono text-[#D6A19A] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BB786D] animate-pulse" />
                Verified Campus Assistant
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F0DCE2] tracking-tight">
                  {flagshipProject.title}
                </h3>
                <p className="text-[#C2AEB5] text-sm sm:text-base leading-relaxed">
                  {flagshipProject.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A18D96] block">
                    Engineering Milestones &amp; Outcomes:
                  </span>
                  <ul className="space-y-2">
                    {flagshipProject.highlights.map((h, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#C2AEB5] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#BB786D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Specifications Panel */}
              <div className="lg:col-span-5 rounded-xl bg-[#21191D] border border-[#49323C] p-5 space-y-4">
                <div className="text-xs font-mono text-[#F0DCE2] font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#BB786D]" />
                  Pipeline Architecture
                </div>
                
                <div className="space-y-2 text-xs text-[#A18D96] font-mono">
                  <div className="p-2 rounded bg-[#291D23] border border-[#49323C]/50 flex justify-between">
                    <span>Frontend Interface:</span>
                    <span className="text-[#F0DCE2]">React.js SPA</span>
                  </div>
                  <div className="p-2 rounded bg-[#291D23] border border-[#49323C]/50 flex justify-between">
                    <span>Context Retrieval:</span>
                    <span className="text-[#F0DCE2]">Python RAG Pipeline</span>
                  </div>
                  <div className="p-2 rounded bg-[#291D23] border border-[#49323C]/50 flex justify-between">
                    <span>Inference Engine:</span>
                    <span className="text-[#F0DCE2]">Gemini 1.5 Flash</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {flagshipProject.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#33232B] border border-[#49323C] text-[11px] font-mono text-[#C2AEB5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-lg bg-[#33232B] hover:bg-[#84445C]/30 text-[#F0DCE2] border border-[#49323C] hover:border-[#84445C] text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4 text-[#BB786D]" />
                    <span>View Repository Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C2AEB5]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-xl bg-[#291D23] border border-[#49323C] p-6 flex flex-col justify-between space-y-5 transition-all duration-200 hover:border-[#84445C]"
            >
              <div className="space-y-4">
                {/* Card Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#21191D] border border-[#49323C] text-[11px] font-mono text-[#BB786D]">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#A18D96]">
                    Production
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#F0DCE2] tracking-tight group-hover:text-[#D6A19A] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C2AEB5] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-2 border-t border-[#49323C]/60 space-y-1.5">
                  {(project.highlights ?? []).slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-[#A18D96] flex items-start gap-2">
                      <span className="text-[#BB786D]">&bull;</span>
                      <span className="line-clamp-2">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech & Links */}
              <div className="pt-4 border-t border-[#49323C]/60 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#21191D] border border-[#49323C] text-[10px] font-mono text-[#C2AEB5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 rounded-lg bg-[#21191D] hover:bg-[#33232B] text-[#C2AEB5] hover:text-[#F0DCE2] border border-[#49323C] hover:border-[#84445C] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 rounded-lg bg-[#33232B] hover:bg-[#84445C]/30 text-[#F0DCE2] border border-[#BB786D]/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#BB786D]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
