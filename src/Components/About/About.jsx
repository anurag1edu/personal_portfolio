


import React, { useRef, useEffect, useContext } from "react";
import ThemeContext from "../Darktheme/ThemeContext";
import "../About/About.css";
import myimg from "../Images/myimg.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../Images/img.jpeg"
import PersonIcon from '@mui/icons-material/Person';
const AboutMe = () => {
  const { darkMode } = useContext(ThemeContext);
  const imgRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 

    const handleMouseMove = (e) => {
      const img = imgRef.current;
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (y / rect.height) * 30;
      const rotateY = (x / rect.width) * -30;

      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      const img = imgRef.current;
      img.style.transform = "rotateX(0) rotateY(0)";
    };

    const img = imgRef.current;
    img.addEventListener("mousemove", handleMouseMove);
    img.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      img.removeEventListener("mousemove", handleMouseMove);
      img.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div  className="aboutsection" data-aos="fade-up" style={{ PaddingTop: "9rem",  }}>
    <div style={{ textAlign: "center" }}>
    <h1 style={{color:"#4681f4" , paddingTop:"6rem"}}>About Me </h1>
    <hr className="headline-hr" style={{backgroundColor:"#4681f4"}}></hr>
  

  </div>
      <div data-aos="fade-up" className={`aboutMe ${darkMode ? "dark" : ""}`}>
     
        <div className="aboutMeImg">
          <img src={img} alt="Profile" ref={imgRef} />
        </div>
        <div className="aboutMeContent">
          <div>
            <p style={{color:"#4681f4" , fontWeight:"600" , fontSize:"1.7rem"}}>Hello! I'm Anurag Kumar</p>
          </div>
          <p>
            A passionate web developer with a strong background in data analysis
            and full-stack development. I enjoy creating dynamic, responsive
            websites and web applications that provide seamless user
            experiences. My skills include both frontend and backend
            development, and I love to stay updated with the latest trends in
            technology.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
