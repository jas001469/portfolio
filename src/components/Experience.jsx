import React from "react";
import PeakPalsLogo from "../assets/peakpals.jpg"; // replace with actual path
import ToLetGlobeLogo from "../assets/to_let_globe_logo.jpg"; // replace with actual path
import EdTrellisLogo from "../assets/edfooter1.jpg"; 

const experiences = [
  {
    company: "EdTrellis",
    logo: EdTrellisLogo,
    role: "SDE Intern",
    location: "On-site, Gurgaon",
    duration: "Nov 2025 - Present",
    responsibilities: ["Developed and enhanced core platform features using React, Node.js, Express, and MongoDB."

,"Implemented secure authentication flows, role-based access, and dynamic dashboards.",

"Built and integrated REST APIs for seamless data handling and improved system efficiency."
,
"Collaborated on deployment, testing, and performance optimization for a smooth production experience."]
  },
  {
    company: "PeakPals",
    logo: PeakPalsLogo,
    role: "SDE (AI) Intern",
    location: "On-site, Noida",
    duration: "Sept 2025 – Nov 2025",
    responsibilities: [
      "Worked on integrating and fine-tuning Large Language Models (LLMs) for personalized user experiences.",
      "Developed and optimized AI model pipelines with strong backend integration.",
      "Built and deployed scalable APIs to serve AI-driven features efficiently.",
      "Collaborated with cross-functional teams to deliver and iterate on production-ready AI solutions."
    ]
  },
  {
    company: "To-Let Globe",
    logo: ToLetGlobeLogo,
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "June 2024 – Aug 2024",
    responsibilities: [
      "Built and maintained full-stack features using React, Node.js, and MongoDB.",
      "Implemented authentication, dashboard analytics, and API integrations.",
      "Deployed and optimized performance for production environment."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section relative z-10">
      <h2 className="experience-title">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="exp-card">
              <div className="exp-header">
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-10 h-10 object-contain rounded-md border border-zinc-700 p-1 bg-zinc-900"
                    />
                  )}
                  <h3 className="exp-company">{exp.company}</h3>
                </div>
                <span className="exp-role">{exp.role}</span>
              </div>

              <p className="exp-meta">
                {exp.location} • {exp.duration}
              </p>

              <ul className="exp-list">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
