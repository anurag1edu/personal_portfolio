






import React from 'react';
import "../Skills/Skills.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", url: "https://cplusplus.com/" },
      { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", url: "https://www.oracle.com/java/" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", url: "https://www.python.org/" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      {
        name:"Sql" , src: 
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            url:"https://en.wikipedia.org/wiki/SQL"
          
      }
    ]
  },
  {
    category: "Libraries, Frameworks & SDK",
    skills: [
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", url: "https://reactjs.org/" },
      { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", url: "https://expressjs.com/" },
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", url: "https://nodejs.org/" },
      { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", url: "https://firebase.google.com/" },
      { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com/" },
      { name: "NestJS", src: 
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
          , url: "https://nestjs.com/" },
      { name: "Mongoose", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg", url: "https://mongoosejs.com/" },
      { name: "Material-UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg", url: "https://mui.com/" },


      { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com/en/3.0.x/" }

    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", url: "https://www.mongodb.com/" },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", url: "https://www.mysql.com/" }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", url: "https://git-scm.com/" },
      { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", url: "https://github.com/" },
      { name: "GitLab", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg", url: "https://gitlab.com/" },
      { name: "Anaconda", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg", url: "https://www.anaconda.com/" },
      { name: "Android Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", url: "https://developer.android.com/studio" },
      { name: "Canva", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", url: "https://www.canva.com/" },
      { name: "Kaggle", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original-wordmark.svg", url: "https://www.kaggle.com/" },
      { name: "Netlify", src: 
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
          , url: "https://www.netlify.com/" },
      { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", url: "https://www.postman.com/" },
      { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg", url: "https://vercel.com/" },
      {
        name:"Swagger" , src:
       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"  , url:"https://swagger.io/docs/specification/2-0/what-is-swagger/"
      
      }
      ,{
        name:"Jupyter" , src : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" , url:"https://jupyter.org/"
      }
    ]
  },
  {
    category: "Cloud Platform",
    skills: [
      { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com/" },
      { name: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", url: "https://cloud.google.com/" }
    ]
  },
  {
    category: "IDE",
    skills: [
      { name: "PyCharm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg", url: "https://www.jetbrains.com/pycharm/" },
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/" },


      { name: "Eclipse", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg", url: "https://www.eclipse.org/home/whatis/" }
    ]
  }
];

const Skills = () => {
  return (
    <div className='skillsection'>
      <div className='headline'>
      <h1  style={{color:"#4681f4" , paddingTop:"6rem"}}data-aos="fade-up">Skills</h1>
      </div>
      <hr className='headline-hr'  style={{backgroundColor:"#4681f4"}}/>
      {skillsData.map((category, index) => (
        <div key={index} className='skills_content'>
          <div className='category-title'>
            <p data-aos="fade-right">{category.category}</p>
          </div>
          <div className='skills-list'>
            {category.skills.map((skill, i) => (
              <a key={i} href={skill.url} target="_blank" rel="noopener noreferrer" className='skill-item' data-aos="zoom-in"style={{ 
                transform: "scale(1)", 
                transition: "transform 0.3s ease, border-color 0.3s ease" 
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
                <img src={skill.src} alt={skill.name} />
                <p>{skill.name}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
