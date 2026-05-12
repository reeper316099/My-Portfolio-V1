import React from "react";
import '../assets/styles/Project.scss';

const activities = [
  {
    title: "STEM Honor Society (NSTEMHS)",
    role: "President (2025 – May 2026) | Vice President (2023 – 2025)",
    description: "Elected President in 2025 after serving two years as Vice President. Leads chapter events, outreach, and member engagement.",
  },
  {
    title: "National Cyber League (NCL)",
    role: "Competitor — Gold Award Recipient (Fall 2025)",
    description: "Competed in national cybersecurity competitions covering cryptography, digital forensics, network traffic analysis, and web exploitation.",
  },
  {
    title: "Science Olympiad",
    role: "Competitor (2026) — La Salle College Preparatory",
    description: "Competed in Science Olympiad representing La Salle College Preparatory in the 2026 season.",
  },
  {
    title: "National Honor Society",
    role: "Member (2025 – 2026)",
    description: "Inducted into the National Honor Society in recognition of academic achievement, leadership, service, and character.",
  },
  {
    title: "California Scholarship Federation",
    role: "Member (2025 – 2026)",
    description: "Recognized for outstanding academic performance qualifying for the California Scholarship Federation.",
  },
];

const awards = [
  {
    title: "Lifetime Achievement Award",
    org: "Carlow Center for Medical Innovation (2026)",
    description: "Highest recognition awarded by the Carlow Center, honoring sustained excellence and contribution throughout the program.",
  },
  {
    title: "Excellence Award",
    org: "Carlow Center for Medical Innovation (2026)",
    description: "Awarded for outstanding performance and dedication within the Carlow Center for Medical Innovation.",
  },
  {
    title: "Peer Mentor Award",
    org: "Carlow Center for Medical Innovation (2025)",
    description: "Recognized for exceptional mentorship and support of fellow students in the medical innovation program.",
  },
  {
    title: "Heart and Soul Award",
    org: "Carlow Center for Medical Innovation (2024)",
    description: "Awarded for demonstrated passion, commitment, and compassion in healthcare and the program community.",
  },
  {
    title: "Gold Award",
    org: "La Salle College Preparatory (Fall 2025)",
    description: "Received the Gold Award for academic and extracurricular achievement at La Salle College Preparatory.",
  },
  {
    title: "First Honors",
    org: "La Salle College Preparatory (Fall 2022 – Spring 2025)",
    description: "Earned First Honors recognition every semester from Fall 2022 through Spring 2025.",
  },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Activities &amp; Awards</h1>

        <h2 className="subsection-heading">Activities &amp; Leadership</h2>
        <div className="projects-grid">
            {activities.map((item, index) => (
              <div className="project" key={index}>
                  <h2>{item.title}</h2>
                  <p className="project-role"><em>{item.role}</em></p>
                  <p>{item.description}</p>
              </div>
            ))}
        </div>

        <h2 className="subsection-heading">Awards &amp; Recognition</h2>
        <div className="projects-grid">
            {awards.map((item, index) => (
              <div className="project" key={index}>
                  <h2>{item.title}</h2>
                  <p className="project-role"><em>{item.org}</em></p>
                  <p>{item.description}</p>
              </div>
            ))}
        </div>
    </div>
    );
}

export default Project;