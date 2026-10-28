
export const personalInfo = {
    name: "Vinay Sollapure",
    title: "B.Tech CSE Student & Web Developer",
    location: "Bengaluru, Karnataka",
    email: "vinayssollapure@gmail.com",

    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Flask",
        "SQL",
        "Git",
        "GitHub"
    ],

    socials: {
        github: "https://github.com/Vinay9686803463",
        linkedin: "https://www.linkedin.com/in/vinay-sollapure-94474b2a4/"
    }
};

export const projects = [
    {
        id: "smart-attendance",
        title: "Smart Attendance System",
        category: "Web Development",
        description:
            "A student attendance management system built with Flask, Python, OpenCV, and SQL. The project focuses on managing attendance records and supporting attendance-related workflows.",
        techStack: [
            "Python",
            "Flask",
            "OpenCV",
            "SQL",
            "SQLAlchemy"
        ],
        highlights: [
            "Attendance management for students and faculty.",
            "Face recognition and QR-code-based attendance features.",
            "Attendance records and percentage tracking."
        ],
        githubUrl:
            "https://github.com/Vinay9686803463/smart-attendance-system"
    },
    {
        id: "student-support-ai",
        title: "Student Support AI",
        category: "Student Support",
        description:
            "An academic support platform for VTU CSE students, built with Flask, JavaScript, and Supabase PostgreSQL to organize study resources and support learning.",
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Flask",
            "Supabase",
            "PostgreSQL"
        ],
        highlights: [
            "Student dashboard with semester-focused information.",
            "Academic notes, subjects, important questions, and resources.",
            "Database integration for student support features."
        ],
        githubUrl:
            "https://github.com/Vinay9686803463/student-support-ai"
    }
];

export const experienceTimeline = [];


export const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Aditya College of Engineering and Technology, Bengaluru",
    location: "Bengaluru, Karnataka",
    university: "Visvesvaraya Technological University (VTU)",
    status: "Pursuing",
    details:
        "Currently pursuing a B.Tech in Computer Science and Engineering, with an interest in web development, backend systems, and practical software projects."
};

export const chatbotPresets = [
  "Skills",
  "Projects",
  "Education",
  "Contact"
];

export function queryChatbotResponse(query) {
  const text = query.trim().toLowerCase();

  if (text.includes("skill")) {
    return `My skills include ${personalInfo.skills.join(", ")}.`;
  }

  if (text.includes("project")) {
    return projects
      .map(
        (project) =>
          `${project.title}: ${project.description}`
      )
      .join("\n\n");
  }

  if (
    text.includes("education") ||
    text.includes("college") ||
    text.includes("degree")
  ) {
    return `${education.degree} at ${education.institution}.`;
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("github") ||
    text.includes("linkedin")
  ) {
    return `Email: ${personalInfo.email}\nGitHub: ${personalInfo.socials.github}\nLinkedIn: ${personalInfo.socials.linkedin}`;
  }

  return "I can help with skills, projects, education, and contact information. Try asking about one of these topics.";
}


export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive and interactive web interfaces",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Server-side application development",
    skills: [
      { name: "Python" },
      { name: "Flask" }
    ]
  },
  {
    id: "database",
    title: "Database",
    description: "Database technologies and data management",
    skills: [
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "Supabase" }
    ]
  },
  {
    id: "tools",
    title: "Development Tools",
    description: "Version control and project collaboration",
    skills: [
      { name: "Git" },
      { name: "GitHub" }
    ]
  }
];
