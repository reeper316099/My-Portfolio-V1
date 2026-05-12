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
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="August 2022 – May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant to the Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Carlow Center for Medical Innovation — La Salle College Preparatory · Pasadena, CA</h4>
            <p>
              Teaches CPR and suturing instruction sessions; operates the Anatomage virtual cadaver table and
              SynDaver synthetic cadaver; provides facility tours to prospective students and visitors;
              conducts science outreach presentations at local middle schools.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2024 – June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Volunteer — Errand &amp; Escort Dispatcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Huntington Hospital · Pasadena, CA</h4>
            <p>
              Transported patients to and from procedures and upon discharge across all departments.
              Promoted to Dispatcher, coordinating and directing the volunteer team to assignments in real time.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Summer 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Luskin Orthopaedic Institute · Los Angeles, CA</h4>
            <p>
              Performed data entry and data analysis in support of ongoing orthopaedic research.
              Assisted in cadaveric dissection of the hand to retrieve the scaphoid bone for research purposes.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant Trainer</h3>
            <h4 className="vertical-timeline-element-subtitle">American Red Cross</h4>
            <p>
              Promoted to Assistant Trainer; supports BLS and CPR certification instruction.
              Holds Red Cross Basic Life Support (BLS) Certification.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2023 – April 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Volunteer</h3>
            <h4 className="vertical-timeline-element-subtitle">Santa Teresita Skilled Nursing Facility</h4>
            <p>
              Assisted the Director of Volunteering with patient activities including transport,
              board games, and mail delivery.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">La Salle College Preparatory</h3>
            <h4 className="vertical-timeline-element-subtitle">Pasadena, CA · Weighted GPA: 3.9</h4>
            <p>
              Carlow Center for Medical Innovation — competitive medical pathway.
              National Honor Society (2025–2026) · California Scholarship Federation (2025–2026) ·
              First Honors (Fall 2022 – Spring 2025).
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
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