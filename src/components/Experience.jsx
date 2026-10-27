import { motion } from 'framer-motion';
import { 
  MapPin, 
  Trophy
} from 'lucide-react';
import { experienceTimeline, education } from '../data/portfolioData';

const achievements = [
  {
    title: "AdiBot RAG Campus Assistant",
    category: "AI Engineering",
    period: "2026",
    summary: "Engineered and delivered an intelligent campus assistant using Retrieval-Augmented Generation (RAG) and Gemini API, serving accurate student and faculty query responses.",
    tags: ["Gemini API", "Python RAG", "React.js"]
  },
  {
    title: "Saiket Systems Frontend Engineering",
    category: "Industry Internship",
    period: "2026",
    summary: "Built modular, accessible UI architectures and reusable components with React.js, optimizing load performance and cross-browser stability for client deployments.",
    tags: ["React.js", "Component Architecture", "UI Optimization"]
  },
  {
    title: "Full-Stack Development Certification",
    category: "Software Track",
    period: "2026",
    summary: "Completed comprehensive software engineering track at NxtWave Academy, mastering data structures, RESTful APIs, modern JavaScript paradigms, and relational databases.",
    tags: ["Data Structures", "REST APIs", "Modern JS"]
  },
  {
    title: "Production Web Applications on Vercel",
    category: "Deployments",
    period: "2025 - 2026",
    summary: "Authored and launched multiple live platforms including StyleSphere E-Commerce and FloodGuard AI with end-to-end responsiveness and high visual fidelity.",
    tags: ["Vercel", "Bootstrap", "Production Deploy"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#191316] relative border-t border-[#49323C]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ================= Part 1: Experience & Education Timeline ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#49323C] gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#BB786D] uppercase tracking-wider">
                <span>03 &bull; Chronology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0DCE2] tracking-tight">
                Experience &amp; <span className="font-editorial italic font-normal text-[#D6A19A]">Education</span>
              </h2>
              <p className="text-sm sm:text-base text-[#C2AEB5] leading-relaxed">
                Chronological record of software engineering internships, institutional academics, and hands-on technical training.
              </p>
            </div>
            <span className="text-xs font-mono text-[#A18D96] bg-[#21191D] px-3 py-1.5 rounded-lg border border-[#49323C] self-start md:self-end">
              2025 &ndash; Present
            </span>
          </div>

          {/* Timeline Stream */}
          <div className="relative border-l border-[#49323C] ml-3 sm:ml-6 md:ml-36 space-y-10">

            {/* Experience Items */}
            {experienceTimeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Timeline Pip Node */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#191316] border-2 border-[#BB786D] group-hover:bg-[#84445C] transition-colors" />

                {/* Date tag floating left on desktop */}
                <div className="md:absolute md:-left-36 md:top-1.5 text-xs font-mono text-[#BB786D] font-semibold mb-2 md:mb-0">
                  {item.period}
                </div>

                {/* Card Container */}
                <div className="rounded-xl bg-[#291D23] border border-[#49323C] p-6 sm:p-7 space-y-4 transition-colors hover:border-[#84445C]">
                  
                  <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-[#49323C]/70">
                    <div>
                      <h3 className="text-xl font-bold text-[#F0DCE2] tracking-tight">
                        {item.role}
                      </h3>
                      <div className="text-sm text-[#C2AEB5] font-medium flex items-center gap-2 mt-1">
                        <span className="text-[#D6A19A]">{item.company}</span>
                        <span className="text-[#49323C]">&bull;</span>
                        <span className="text-xs font-mono text-[#A18D96] bg-[#21191D] px-2 py-0.5 rounded border border-[#49323C]">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-[#A18D96] font-mono flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#BB786D]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C2AEB5] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A18D96] block">
                      Core Responsibilities &amp; Impact:
                    </span>
                    <ul className="space-y-1.5">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-[#C2AEB5] flex items-start gap-2">
                          <span className="text-[#BB786D] mt-0.5">&bull;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}

            {/* Institutional Education Node */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="relative pl-6 sm:pl-8 group pt-2"
            >
              <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-[#191316] border-2 border-[#84445C] group-hover:bg-[#BB786D] transition-colors" />

              <div className="md:absolute md:-left-36 md:top-3.5 text-xs font-mono text-[#D6A19A] font-semibold mb-2 md:mb-0">
                {education.duration}
              </div>

              <div className="rounded-xl bg-[#291D23] border border-[#49323C] p-6 sm:p-7 space-y-4 transition-colors hover:border-[#84445C]">
                <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-[#49323C]/70">
                  <div>
                    <span className="text-[11px] font-mono text-[#BB786D] uppercase tracking-wider block mb-1">
                      Academic Degree
                    </span>
                    <h3 className="text-xl font-bold text-[#F0DCE2] tracking-tight">
                      {education.degree}
                    </h3>
                    <div className="text-sm font-medium text-[#C2AEB5] mt-1">
                      {education.institution}
                    </div>
                  </div>

                  <div className="text-xs text-[#A18D96] font-mono flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#BB786D]" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#C2AEB5] leading-relaxed">
                  {education.details}
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ================= Part 2: Key Achievements & Accomplishments ================= */}
        <div id="achievements" className="pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#49323C] gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#BB786D] uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 text-[#BB786D]" />
                <span>04 &bull; Verified Milestones</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0DCE2] tracking-tight">
                Key <span className="font-editorial italic font-normal text-[#D6A19A]">Achievements</span>
              </h2>
              <p className="text-sm sm:text-base text-[#C2AEB5] leading-relaxed">
                Demonstrated outcomes across AI implementation, real-world software internships, and production deployments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-xl bg-[#291D23] border border-[#49323C] p-6 space-y-4 transition-colors hover:border-[#84445C]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[#BB786D] bg-[#21191D] px-2.5 py-1 rounded border border-[#49323C]">
                    {ach.category}
                  </span>
                  <span className="text-xs font-mono text-[#A18D96]">
                    {ach.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#F0DCE2]">
                    {ach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C2AEB5] leading-relaxed">
                    {ach.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#49323C]/60">
                  {ach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#21191D] border border-[#49323C] text-[10px] font-mono text-[#A18D96]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
