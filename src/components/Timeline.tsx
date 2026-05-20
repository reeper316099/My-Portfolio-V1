import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline lineColor="#00ff41">

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', color: '#00ff41' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 255, 65, 0.2)' }}
            date="August 2022 – May 2026"
            iconStyle={{ background: '#0d0208', color: '#00ff41' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant to the Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Carlow Center for Medical Innovation</h4>
            <p>
              Teaches CPR and suturing instruction sessions; operates the Anatomage virtual cadaver table and
              SynDaver synthetic cadaver; conducts science outreach presentations.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2024 – June 2025"
            iconStyle={{ background: '#0d0208', color: '#00ff41' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Volunteer — Errand &amp; Escort Dispatcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Huntington Hospital · Pasadena, CA</h4>
            <p>
              Transported patients to and from procedures. Promoted to Dispatcher, coordinating and directing the volunteer team.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Summer 2025"
            iconStyle={{ background: '#0d0208', color: '#00ff41' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Luskin Orthopaedic Institute · Los Angeles, CA</h4>
            <p>
              Performed data analysis in support of ongoing orthopaedic research. Assisted in cadaveric dissection.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Present"
            iconStyle={{ background: '#0d0208', color: '#00ff41' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant Trainer</h3>
            <h4 className="vertical-timeline-element-subtitle">American Red Cross</h4>
            <p>
              Supports BLS and CPR certification instruction. Holds Red Cross Basic Life Support (BLS) Certification.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – May 2026"
            iconStyle={{ background: '#0d0208', color: '#00ff41' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">La Salle College Preparatory</h3>
            <h4 className="vertical-timeline-element-subtitle">Pasadena, CA · Weighted GPA: 3.9</h4>
            <p>
              Carlow Center for Medical Innovation — competitive medical pathway.
              National Honor Society (2025–2026) · California Scholarship Federation (2025–2026).
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – 2023"
            iconStyle={{ background: '#0d0208', color: '#00ff41' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Pasadena City College</h3>
            <h4 className="vertical-timeline-element-subtitle">Concurrent Enrollment</h4>
            <p>
              Human Disease · Medical Terminology · Introduction to Health Sciences
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;