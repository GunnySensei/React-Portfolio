import React, { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [navTabs] = useState([
    {
      name: "about",
      description: "about the developer",
    },
    {
      name: "contact",
      description: "contact the developer",
    },
    {
      name: "projects",
      description: "a grid of the developer's projects",
    },
    {
      name: "resume",
      description: "check out the developer's history and skills",
    },
  ]);
  const [currentNavTab, setCurrentNavTab] = useState(navTabs[0]);

  return (
    <div className="App">
      <header className="App-header">
        <Nav
          navTabs={navTabs}
          setCurrentNavTab={setCurrentNavTab}
          currentNavTab={currentNavTab}
        />
      </header>
      <main>
        {currentNavTab === "contact" ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : currentNavTab === "projects" ? (
          <>
            <Portfolio></Portfolio>
          </>
        ) : currentNavTab === "resume" ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <>
            <About></About>
          </>
        )}
      </main>
      <footer>
        <div className="social-links">
          <a
            href="https://github.com/GunnySensei"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={require("./assets/GitHub-Mark-Light-120px-plus.png")}
              alt="GitHub logo"
              className="social-logo"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/gunther-wagoner/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={require("./assets/LI-In-Bug.png")}
              alt="LinkedIn Logo"
              className="social-logo"
            ></img>
          </a>
          <a
            href="https://twitter.com/gunner4228"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={require("./assets/2021 Twitter logo - blue.png")}
              alt="Twitter logo"
              className="social-logo"
            ></img>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
