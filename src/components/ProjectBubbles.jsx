// components/ProjectBubbles.js
import React from 'react';
import './ProjectBubbles.css';

const projects = [
  {
    id: 1,
    name: "Notd Project",
    image: "project_icons/notdicon.png",
    link: "/bilbyPage",
    position: { top: "10%", left: "15%" }
  },
  {
    id: 2,
    name: "FileWiz Project",
    image: "project_icons/filewizicon.png",
    link: "/filewizPage",
    position: { top: "12%", left: "45%" }
  },
  {
    id: 3,
    name: "GenDigital Project",
    image: "project_icons/gendicon.png",
    link: "/gendigitalPage",
    position: { top: "60%", left: "5%" }
  },
    {
      id: 4,
      name: "cseed Project",
      image: "project_icons/cseedicon.png",
      link: "/cseedPage",
      position: { top: "10%", left: "80%" }
    },
    {
        id: 5,
        name: "datathon Project",
        image: "project_icons/dubstech.png",
        link: "/datathonPage",
        position: { top: "60%", left: "5%" }
      },
      
      {
        id: 6,
        name: "ergo Project",
        image: "project_icons/leanerStartupsIcon.png",
        link: "/ergoPage",
        position: { top: "60%", left: "5%" }
      }
  ];

const ProjectBubbles = () => {
  return (
<div className="project-bubble-grid">
  {projects.map((project) => (
    <a
      key={project.id}
      href={project.link}
      className="bubble"
    >
      <img src={project.image} alt={project.name} />
    </a>
  ))}
</div>

  );
};

export default ProjectBubbles;
