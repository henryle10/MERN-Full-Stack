import React from 'react';
import { Redirect, Router, Link } from "@reach/router";
import './App.css';

import AllPlayers from "./views/AllPlayers";
import NewPlayer from "./views/NewPlayer";
import PlayerStatus from "./views/PlayerStatus";

function App() {
  return (
    <div className="App container-fluid p-5" style={{ background: "#CCCCCC" }}>
      <div className="form-group row">
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link className="text-primary m-0" to="/players/list"><h1>Manage Players</h1></Link>
          </li>
          <li className="list-inline-item">
            <h1>{"|"}</h1>
          </li>
          <li className="list-inline-item">
            <Link className="text-primary m-0" to="/status/game/1"><h1>Manager Player Status</h1></Link>
          </li>
        </ul>
      </div>

      <Router>
        <Redirect from="/" to="/players/list" noThrow="true" />
        <AllPlayers path="/players/list" />
        <NewPlayer path="/players/addplayer" />
        <PlayerStatus path="/status/game/:id" />
      </Router>
    </div>
  );
}

export default App;
