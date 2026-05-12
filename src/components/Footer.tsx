import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:ben_luck@icloud.com" aria-label="Email"><EmailIcon/></a>
      </div>
      <p>Benjamin James Luck &middot; Altadena, CA &middot; <a href="mailto:ben_luck@icloud.com">ben_luck@icloud.com</a></p>
    </footer>
  );
}

export default Footer;