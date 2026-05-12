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
          <p>Pre-med Student &middot; Healthcare &amp; Research</p>
          <p className="bio-text">
            High school senior pursuing pre-med at La Salle College Preparatory through the Carlow Center
            for Medical Innovation pathway. I have built hands-on clinical experience through hospital
            volunteering, orthopaedic research, and medical simulation — and I am passionate about making
            medicine more accessible and understandable for people of all ages.
          </p>
          <div className="resume-btn-wrapper">
            <Button
              variant="contained"
              href="./resume.pdf"
              download
              startIcon={<DownloadIcon />}
              sx={{ marginTop: '24px', backgroundColor: '#5000ca', '&:hover': { backgroundColor: '#6a00ff' } }}
            >
              Download Resume
            </Button>
          </div>
          <div className="mobile_social_icons">
            <a href="mailto:ben_luck@icloud.com" aria-label="Email"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;