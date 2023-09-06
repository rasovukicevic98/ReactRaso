import React, { useState } from "react";
import "../../App.css";

function Player(props) {
  const [statsHidden, hideStats] = useState(true);

  const showStats = () => {
    if (statsHidden) {
      hideStats(false);
      return;
    }
    hideStats(true);
  };
  return (
    <div className="col-4 ">
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={props.player.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{props.player.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.player.pos}</h6>
          <div className="card-text">
            <p>
              Visina: <i>{props.player.height}</i>
              <br></br>
              Godine: <i>{props.player.age}</i>
            </p>
            <p id="stats" hidden={statsHidden}>
              STATISTIKA:
              <br></br>
              Igrao utakmica: <i>{props.player.stats.GP}</i>
              <br></br>
              Poceo utakmica: <i>{props.player.stats.GS}</i>
              <br></br>
              Minuti u igri: <i>{props.player.stats.MIN}</i>
              <br></br>
              Poeni u igri: <i>{props.player.stats.PTS}</i>
              <br></br>
            </p>
            <hr></hr>
            <button className="btn btn-block" onClick={showStats}>
              Statistika
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
