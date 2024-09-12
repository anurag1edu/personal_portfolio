
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Timeline/Timeline.css";
import { colors } from '@mui/material';
import icons from "../Images/work.png"
// import computer from "../Images/computer.avif";
import mern from "../Images/mern.png"
import thirdeye from "../Images/thirdeye.png"
import computer from "../Images/picture.jpg"
import datad from "../Images/data.png"
import datascience from "../Images/workes.png"

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
     // Whether animation should happen only once
    });
  }, []);

  const timelineData = [
    {
      year:"2024 JULY , Secure one of the tech giants company as a software developer.",
      bgColor: "linear-gradient(to right, #00c6ff, #0072ff)",
      animation: "fade-up",
      
    
    },
    {
      year:"2024 MAR-MAY , Started Working  as a  Data Junior AI Intern in Third eye.",
      bgColor: "linear-gradient(to right, #00c6ff, #0072ff)",
      animation: "fade-up",
      
      image:thirdeye,
    },
  
    {
      year: "2023 , Build data science projects , Explore new Technoloiges , resume building and started applying for internship",
      description:
        "",
      bgColor: "linear-gradient(to right, #ff758c, #ff7eb3)",
      animation: "fade-right",
      image:datascience,
    },
    {
      year: " 2022 , Build Projects based on MERN and Started exploring Data science Life cycle",
      description:
        "",
      bgColor: "linear-gradient(to right, #ff9a9e, #fecfef)",
      animation: "fade-left",
      image:datad
    },
    {
      year: "2021 ,  Started Programming and Development",
      description:
        "",
      bgColor: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
      animation: "fade-right",
      image:icons,
    },
    {
      year: "2020 , Commencement",
      description: "Beginning my Engineering journey as a computer science student with specialization in Data Science.",
      bgColor: "linear-gradient(to right, #84fab0, #8fd3f4)",
      animation: "fade-up",
      image: computer,
    },
  ];

  return (
    <div>
      <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
        <h1 style={{color:"#4681f4"}}>Timeline</h1>
        <hr className="headline-hr"  style={{position:"relative" , backgroundColor:"#4681f4" , height:"0.2rem"}}></hr>
      </div>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`container ${index % 2 === 0 ? 'left' : 'right'}`}
            data-aos={item.animation}
          >
            <div className="content" style={{ backgroundColor: item.bgColor  , color:"black",  }}>
              <h2>{item.year}</h2>
              <p>{item.description}</p>
              {item.image && <img src={item.image} alt={`${item.year} illustration`} style={{ width: "100%", marginTop: "1rem" }} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
