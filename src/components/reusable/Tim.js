import React, { useState } from "react";
import Navbar from "../reusable/Navbar";
import Player from "./Player";

function Tim(props) {
  const [tim, setTim] = useState(props.tim);

  const showPlayers = (players) => {
    if (players != undefined) {
      return players.map((player, index) => {
        return <Player key={player.name + index} player={player} />;
      });
    }
  };

  return (
    <div className="d-flex">
      <Navbar activePage={tim.name} />
      <div className="col-9">
        <h1 align="center">{tim.name}</h1>
        <div className="row justify-content-between">
          {showPlayers(tim.players)}
        </div>
      </div>
    </div>
  );
}

export default Tim;
