import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2 } from 'lucide-react';
import { education, projects } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="education"
      className="py-28 bg-[#191316] relative border-t border-[#49323C]/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Education */}
        <div>
          <div className="mb-12 pb-6 border-b border-[#49323C] space-y-3">
            <div className="text-xs font-mono text-[#BB786D] uppercase tracking-wider">
              04 &bull; Academic Background
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0DCE2] tracking-tight">
              Education &amp;{' '}
              <span className="font-editorial italic font-normal text-[#D6A19A]">
                Learning
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#C2AEB5] leading-relaxed max-w-2xl">
              My academic background and ongoing journey in computer science
              and software development.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-xl bg-[#291D23] border border-[#49323C] p-6 sm:p-8 transition-colors hover:border-[#84445C]"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#21191D] border border-[#49323C]">
                <GraduationCap className="w-6 h-6 text-[#D6A19A]" />
              </div>

              <div className="flex-1 space-y-3">
                <span className="text-[11px] font-mono text-[#BB786D] uppercase tracking-wider">
                  Currently Pursuing
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F0DCE2]">
                  {education.degree}
                </h3>

                <p className="text-sm text-[#D6A19A] font-medium">
                  {education.institution}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-[#A18D96]">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#BB786D]" />
                    Bengaluru, Karnataka
                  </span>

                  <span>Visvesvaraya Technological University (VTU)</span>
                </div>

                <p className="text-sm text-[#C2AEB5] leading-relaxed">
                  {education.details}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Highlights */}
        <div id="achievements">
          <div className="mb-12 pb-6 border-b border-[#49323C] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#BB786D] uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>05 &bull; Project Highlights</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0DCE2] tracking-tight">
              Work &amp;{' '}
              <span className="font-editorial italic font-normal text-[#D6A19A]">
                Projects
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#C2AEB5] leading-relaxed max-w-2xl">
              Practical software projects where I apply my programming,
              web development, and database skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-xl bg-[#291D23] border border-[#49323C] p-6 sm:p-7 space-y-4 transition-colors hover:border-[#84445C]"
              >
                <span className="text-[11px] font-mono text-[#BB786D] uppercase tracking-wider">
                  {project.category || 'Software Project'}
                </span>

                <h3 className="text-xl font-bold text-[#F0DCE2]">
                  {project.title}
                </h3>

                <p className="text-sm text-[#C2AEB5] leading-relaxed">
                  {project.description}
                </p>

                {project.highlights?.length > 0 && (
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-xs text-[#C2AEB5]"
                      >
                        <span className="text-[#BB786D]">&bull;</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#21191D] border border-[#49323C] text-[10px] font-mono text-[#A18D96]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#D6A19A] hover:text-[#F0DCE2] transition-colors pt-2"
                  >
                    View source code
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}