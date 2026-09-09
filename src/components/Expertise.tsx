import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faMicroscope, faTrophy } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const clinicalSkills = [
    "BLS Certification",
    "CPR/BLS Instruction",
    "Suturing Technique",
    "Patient Transport & Care",
    "Patient Dispatch & Coordination",
    "Cadaveric Dissection",
];

const researchSkills = [
    "Anatomage Virtual Cadaver Table",
    "SynDaver Synthetic Cadaver",
    "Medical Simulation",
    "Orthopaedic Research",
    "Data Entry & Analysis",
    "Science Outreach & Education",
];

const leadershipSkills = [
    "Cybersecurity (NCL Competitor)",
    "Cryptography & Forensics",
    "Network Traffic Analysis",
    "NSTEMHS Chapter President",
    "Team Leadership",
    "Public Speaking & Teaching",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills &amp; Certifications</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faHospital} size="3x"/>
                    <h3>Clinical &amp; Patient Care</h3>
                    <p>Red Cross–certified in Basic Life Support. I instruct CPR and suturing sessions, transport and coordinate patient care across hospital departments, and have assisted in cadaveric dissection for orthopaedic research.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {clinicalSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicroscope} size="3x"/>
                    <h3>Research &amp; Medical Education</h3>
                    <p>Operate advanced simulation equipment including the Anatomage virtual cadaver table and SynDaver synthetic cadaver. Performed data analysis supporting ongoing orthopaedic research and conduct science outreach to middle school students.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {researchSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTrophy} size="3x"/>
                    <h3>Leadership &amp; Competitions</h3>
                    <p>President of the STEM Honor Society chapter (2025). Competed in the National Cyber League earning a Gold Award in Fall 2025, covering cryptography, forensics, network analysis, and web exploitation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {leadershipSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
