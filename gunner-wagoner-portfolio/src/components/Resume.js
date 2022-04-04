import React from "react";

const Resume = () => {
  return (
    <section className="my-5">
      <div className="skills-div">
        <div>
          <h2 className="skills-h2">My Skills: </h2>
          <p className="skills-p">
            HTML, CSS, JavaScript, Bootstrap, Foundation, C#, Object Oriented
            Programming, Web Server, 3rd party APIs, MySQL, Sequelize, Dotenv,
            Heroku, MongoDb, MERN, GraphQL, React
          </p>
        </div>
        <a
          href={require("../assets/Resume2022.pdf")}
          target={"_blank"}
          rel="noreferrer"
        >
          <h2 id="resume">Link to Resume</h2>
        </a>
      </div>
    </section>
  );
};

export default Resume;
