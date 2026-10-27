
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
        description:
            "Attendance management system built with Flask, OpenCV, and SQL.",
        techStack: ["Python", "Flask", "OpenCV", "SQL"],
        githubUrl:
            "https://github.com/Vinay9686803463/smart-attendance-system"
    },
    {
        id: "student-support-ai",
        title: "Student Support AI",
        description:
            "Academic support platform for VTU students with notes, resources, and AI-assisted learning.",
        techStack: ["Flask", "JavaScript", "Supabase", "PostgreSQL"],
        githubUrl:
            "https://github.com/Vinay9686803463/student-support-ai"
    }
];

export const skillCategories = [
    {
        id: "development",
        title: "Development",
        description: "Web development tools and languages",
        skills: personalInfo.skills.map((name) => ({ name }))
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


export const chatbotPresets = ["Skills", "Projects", "Contact"];

export function queryChatbotResponse(query) {
    const text = query.toLowerCase();
    if (text.includes("skill")) {
        return `${personalInfo.name}'s skills include ${personalInfo.skills.join(", ")}.`;
    }
    if (text.includes("project")) {
        return projects.map((project) => `${project.title}: ${project.description}`).join("\n\n");
    }
    return `Contact ${personalInfo.name} at ${personalInfo.email}.`;
}
