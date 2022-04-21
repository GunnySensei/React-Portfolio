import React, { useState } from "react";

const ProjectList = ({ project }) => {
  const [projects] = useState([
    {
      name: "Dedly",
      path: "../assets/dedly.gif",
      repo: "https://github.com/GunnySensei/project_dEd",
      site: "https://project-ded.herokuapp.com/",
    },
    {
      name: "SeeVee",
      path: "../assets/SeeVee.gif",
      repo: "https://github.com/GunnySensei/SeeVee",
      site: "https://see-vee-bnh.herokuapp.com/",
    },
    {
      name: "Toggle",
      path: "../assets/Toggle.gif",
      repo: "https://github.com/GunnySensei/Toggle-Tech-Blog",
      site: "https://toggle-tech-blog.herokuapp.com/",
    },
    {
      name: "Weather",
      path: "../assets/Weather.gif",
      repo: "https://github.com/GunnySensei/weather-dashboard",
      site: "https://gunnysensei.github.io/weather-dashboard/",
    },
    {
      name: "Brewhaus",
      path: "../assets/Brewhaus.gif",
      repo: "https://github.com/GunnySensei/Brewhaus",
      site: "https://jaredtrp.github.io/project_cheese",
    },
    {
      name: "PNWPWA",
      path: "../assets/PNWPWA.gif",
      repo: "https://github.com/GunnySensei/pnw-pwa",
      site: "https://pnw-pwa.herokuapp.com/",
    },
    {
      name: "PhotoPort",
      path: "../assets/PhotoPort.gif",
      repo: "https://github.com/GunnySensei/photo-port",
      site: "https://photo-port-portfolio.herokuapp.com/",
    },
    {
      name: "NoteTaker",
      path: "../assets/NoteTaker.gif",
      repo: "https://github.com/GunnySensei/NoteTaker",
      site: "https://serene-inlet-66143.herokuapp.com/",
    },
  ]);
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const toggleModal = (image, i) => {
  //     setCurrentProject({ ...image, index: i });
  //     setIsModalOpen(!isModalOpen);
  //   };

  return (
    <div className="project-list">
      {projects.map((image, i) => (
        <div className="projectCard">
          <a
            className="project-title"
            href={`${image.site}`}
            target={"_blank"}
            rel="noreferrer"
          >
            <h3>{image.name}</h3>
          </a>
          <a href={`${image.repo}`} target={"_blank"} rel="noreferrer">
            <img
              src={require(`../assets/${image.name}.gif`)}
              alt={image.name}
              className="img-thumbnail mx-1 col-6"
              // onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
