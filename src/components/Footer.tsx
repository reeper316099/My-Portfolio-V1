import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="social_icons">
        <a href="https://github.com/reeper316099" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      <p>A portfolio by <a href="https://github.com/reeper316099/My-Portfolio-V1" target="_blank" rel="noreferrer">Benjamin James Luck</a></p>
    </footer>
  );
}

export default Footer;