import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import Services from "../Services/Services";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
     
      <div className="social-links">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anurag-kumar-994b86325/">
          <LinkedInIcon style={{ fontSize: "3rem" }} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/anurag1edu">
          <GitHubIcon style={{ fontSize: "3rem" }} />
        </a>
        <a href="mailto:anuragkumar1edu@gmail.com?Subject=Some%20subject">
          <MailIcon style={{ fontSize: "3rem" }} />
        </a>
        
      </div>
      <div className="footer-copyright">
        ©2024, Anurag Kumar
      </div>
    </div>
  );
};

export default Footer;
