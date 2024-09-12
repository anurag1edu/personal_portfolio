import React, { useRef, useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import myimg from "../Images/myimg.png";
import "../FirstSection/FirstSection.css";
import ThemeContext from "../Darktheme/ThemeContext";
import ParticlesComponent from "../particles/ParticlesComponent";


const FirstSection = () => {
  const { darkMode } = useContext(ThemeContext);
  const imgRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animation in ms
      easing: "ease-in-out", // Easing function for animation
      once: true, // Whether animation should happen only once
    });

    // Hover effect for the image
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
    <div className="firstsectionpart">
    <ParticlesComponent id="tsparticles"  /> 
      <div className={`firstSection ${darkMode ? "dark" : ""}`}>
        <div className="firstsectionContent" data-aos="fade-up">
          <h1>Hi There <span className="wave">👋</span></h1>
          <h1>
            I am <span>Anurag Kumar</span>
          </h1>
          <div>
            <p>
              I am into {" "}
              <ReactTyped style={{ paddingLeft: "0.2rem" }}
                strings={[
                  "Web Development",
                  "Data Analyst",
                  "Frontend ",
                  "Backend ",
                  "ML Development",
                  "Tech Writing",
                  "Blogging"
                  
                ]}
                loop
                backSpeed={20}
                typeSpeed={100}
                showCursor={true}
              />
            </p>
          </div>
        </div>

        <div className="firstsectionImg" data-aos="zoom-in">
          <img src={myimg} alt="Profile" ref={imgRef} />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;






