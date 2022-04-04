import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

function Nav(props) {
  const { navTabs = [], setCurrentNavTab, currentNavTab } = props;

  return (
    <div className="header-div">
      <h2>
        <a href="/">Gunner Wagoner</a>
      </h2>
      <nav>
        <ul className="">
          {navTabs.map((category) => (
            <li
              className={
                `${currentNavTab} === ${category.name}` ? "current-nav-tab" : ""
              }
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentNavTab(category.name);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
