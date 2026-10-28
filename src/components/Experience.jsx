import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, GraduationCap, Code2 } from 'lucide-react';
import { education, projects } from '../data/portfolioData';

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      id="education"
      className="py-28 bg-[#0B1220] relative border-t border-[#26364D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Education */}
        <div>
          <div className="mb-12 pb-4 border-b border-[#26364D] space-y-2">
            <div className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider">
              04 &bull; Academic Background
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#F1F5F9] tracking-tight">
              Education &amp; Learning
            </h2>

            <p className="text-sm sm:text-base text-[#A7B5C9] leading-relaxed max-w-2xl">
              My academic background and ongoing journey in computer science
              and software development.
            </p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
            className="border-t border-[#26364D] pt-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 border border-[#26364D]">
                <GraduationCap className="w-6 h-6 text-[#A5D8FF]" />
              </div>

              <div className="flex-1 space-y-2">
                <span className="text-[11px] font-mono text-[#A7B5C9] uppercase tracking-wider">
                  Currently Pursuing
                </span>

                <h3 className="text-xl font-semibold text-[#F1F5F9]">
                  {education.degree}
                </h3>

                <p className="text-sm text-[#A5D8FF] font-medium">
                  {education.institution}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-[#A7B5C9]">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#60A5FA]" />
                    Bengaluru, Karnataka
                  </span>

                  <span>Visvesvaraya Technological University (VTU)</span>
                </div>

                <p className="text-sm text-[#A7B5C9] leading-relaxed">
                  {education.details}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Highlights */}
        <div id="achievements">
          <div className="mb-12 pb-4 border-b border-[#26364D] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#60A5FA] uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>05 &bull; Project Highlights</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#F1F5F9] tracking-tight">
              Work &amp; Projects
            </h2>

            <p className="text-sm sm:text-base text-[#A7B5C9] leading-relaxed max-w-2xl">
              Practical software projects where I apply my programming,
              web development, and database skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: shouldReduceMotion ? 0 : index * 0.05, ease: "easeOut" }}
                className="border-t border-[#26364D] pt-6 first:pt-0 space-y-2"
              >
                <span className="text-[11px] font-mono text-[#A7B5C9] border border-[#26364D] px-2 py-0.5">
                  {project.category || 'Software Project'}
                </span>

                <h3 className="text-lg font-semibold text-[#F1F5F9]">
                  {project.title}
                </h3>

                <p className="text-sm text-[#A7B5C9] leading-relaxed">
                  {project.description}
                </p>

                {project.highlights?.length > 0 && (
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-xs text-[#A7B5C9]"
                      >
                        <span className="w-1.5 h-1.5 bg-[#60A5FA] shrink-0 mt-1.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-[#A7B5C9] border border-[#26364D] px-2 py-0.5"
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
                    className="inline-flex items-center gap-2 text-sm text-[#A5D8FF] hover:text-[#F1F5F9] active:translate-y-[1px] transition-all duration-200 pt-1"
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