import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/stranice/home/Home";
import Tim from "./components/reusable/Tim";
import { teamData } from "./components/data/TeamData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
    const bgrs = teamData.map((team) => {
      return team.background;
    });
    setBackgrounds([...bgrs]);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home backgrounds={backgrounds} />}
          />
          <Route
            exact
            path="/home"
            render={(props) => {
              return <Home backgrounds={backgrounds} />;
            }}
          />
          <Route
            exact
            path="/tim/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <Tim tim={teamData[id]} />;
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
