
// import React, { useState } from 'react';
// import { projectsData } from './Projectdata';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import "../projects/Project.css";

// const Projects = () => {
//   const [category, setCategory] = useState('All');

//   const filteredProjects = category === 'All'
//     ? projectsData
//     : projectsData.filter((project) => project.tags.includes(category));

//   return (
//     <div className="projects-section">
//       <h1 className="section-title">Projects</h1>

//       {/* Filter Buttons */}
//       <div className="filter-container">
//         <button className={`filter-button ${category === 'All' ? 'active' : ''}`} onClick={() => setCategory('All')}>All</button>
//         <button className={`filter-button ${category === 'Frontend' ? 'active' : ''}`} onClick={() => setCategory('Frontend')}>Frontend</button>
//         <button className={`filter-button ${category === 'Backend' ? 'active' : ''}`} onClick={() => setCategory('Backend')}>Backend</button>
//         <button className={`filter-button ${category === 'ML' ? 'active' : ''}`} onClick={() => setCategory('ML')}>Machine Learning</button>
//       </div>

//       {/* Projects */}
//       <div className="projects-container">
//         {filteredProjects.map((project, index) => (
//           <div key={index} className="project-card">
//             <div className="card-image">
//               <img src={project.image} alt={project.title} />
//             </div>
//             <div className="card-content">
//               <h2>{project.title}</h2>
//               <div className="card-links">
//                 {project.youtube && (
//                   <a href={project.youtube} target="_blank" rel="noopener noreferrer">
//                     <YouTubeIcon className="icon youtube-icon" />
//                   </a>
//                 )}
//                 {project.github && (
//                   <a href={project.github} target="_blank" rel="noopener noreferrer">
//                     <GitHubIcon className="icon github-icon" />
//                   </a>
//                 )}
//                 {project.live && (
//                   <a href={project.live} target="_blank" rel="noopener noreferrer">
//                     <VisibilityIcon className="icon live-icon" />
//                   </a>
//                 )}
//               </div>
//             </div>
//             <div className="card-overlay">
//               <p>{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;










import React, { useState , useEffect} from 'react';
import { projectsData } from './Projectdata';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "../projects/Project.css";
import "aos/dist/aos.css";  // Import AOS styles
import AOS from 'aos'; 
const Projects = () => {
  const [category, setCategory] = useState('All');
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with a duration of 1000ms
  }, []);
  const filteredProjects = category === 'All'
    ? projectsData
    : projectsData.filter((project) => project.tags.includes(category));

  return (
    <div className="projects-section" data-aos="fade-up">
      <h1 style={{color:"#4681f4"}} className="section-title">Projects</h1>
      <hr  style={{backgroundColor:"#4681f4"}} className='headline-hr' />

      {/* Filter Buttons */}
      <div className="filter-container" data-aos="fade-up">
        <button className={`filter-button ${category === 'All' ? 'active' : ''}`} onClick={() => setCategory('All')}>All</button>
        <button className={`filter-button ${category === 'Frontend' ? 'active' : ''}`} onClick={() => setCategory('Frontend')}>Frontend</button>
        <button className={`filter-button ${category === 'Backend' ? 'active' : ''}`} onClick={() => setCategory('Backend')}>Backend</button>
        <button className={`filter-button ${category === 'ML' ? 'active' : ''}`} onClick={() => setCategory('ML')}>Machine Learning</button>
      </div>

      {/* Projects */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card" >
          <div className="card-image">
              <img src={project.image} alt={project.title} />
          </div>
          <div className="card-content">
              <h2>{project.title}</h2>
          </div>
          <div className="card-overlay">
              <div className="project-description">
                  <p>{project.description}</p>
              </div>
              <div className="card-links">
                  {project.youtube && (
                      <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                          <YouTubeIcon className="icon youtube-icon" />
                      </a>
                  )}
                  {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GitHubIcon className="icon github-icon" />
                      </a>
                  )}
                  {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <VisibilityIcon className="icon live-icon" />
                      </a>
                  )}
              </div>
          </div>
      </div>
      
        ))}
      </div>
    </div>
  );
};

export default Projects;



