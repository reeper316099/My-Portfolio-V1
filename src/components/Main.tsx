import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="mailto:ben_luck@icloud.com" aria-label="Email"><EmailIcon/></a>
          </div>
          <h1>Benjamin James Luck</h1>
          <p>Pre-med Student | Healthcare &amp; Research</p>
          <div className="bio-text">
            College freshman pursuing pre-med at University of Utah. I have built hands-on clinical experience through hospital
            volunteering, orthopaedic research, and medical simulation — and I am passionate about making
            medicine more accessible and understandable for people of all ages.
          </div>
          <div className="resume-btn-wrapper">
            <Button
              variant="contained"
              href="./resume.pdf"
              download
              startIcon={<DownloadIcon />}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
