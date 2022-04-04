import React from "react";

const About = () => {
  return (
    <section className="my-5">
      <h1 id="about-h1">Websites.</h1>
      <h1 id="about-h1">Crafted.</h1>
      <h1 id="about-h1">Personally.</h1>
      <div className="about-div">
        <img
          id="about-pic"
          alt="author holding coffee"
          src={require("../assets/author.jpg")}
        />
        <h4>
          Full stack web developer leveraging an Information Services and
          Education background for a well rounded skill set. Skills in HTML,
          CSS, and JavaScript as well as mature work ethic, passion for
          challenges, and an ever-learning mindset. Self-taught C#, Java and the
          above languages, while continuing education in the University of Texas
          Coding Bootcamp. Successfully led the adaptation to online
          collaboration and learning in a managerial and training role, which
          led to the passion for collaboration in all settings, online and
          face-to-face. Excited to develop responsive websites with the brand’s
          intentions and user friendliness as the guiding factors.
        </h4>
      </div>
    </section>
  );
};

export default About;
