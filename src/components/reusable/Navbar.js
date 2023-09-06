import React from "react";
import "../../App.css";
import { teamData } from "../data/TeamData";

function Navbar(props) {
  function isActive(page) {
    if (props.activePage === page) return true;
    return false;
  }

  return (
    <div className="col-3" id="NavBar">
      <div className="nav flex-column nav-pills">
        <a
          href="http://127.0.0.1:3000/home"
          className={isActive("Pocetna") ? "nav-link active" : "nav-link"}
        >
          Pocetna
        </a>
        {teamData.map((team, index) => {
          return (
            <a
              href={"http://127.0.0.1:3000/tim/" + index}
              key={index + team.name}
              className={isActive(team.name) ? "nav-link active" : "nav-link"}
            >
              {team.name}
              <img
                width="40px"
                height="40px"
                src={"http://localhost:3000/" + team.logo}
              ></img>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
