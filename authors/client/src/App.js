import React from 'react';
import './App.css';
import { Redirect, Router, Link } from "@reach/router";

import NotFound from "./views/NotFound";
import NewAuthor from "./views/NewAuthor";
import Authors from "./views/AllAuthors";
import EditAuthor from "./views/EditAuthor";


function App() {
  return (
    <div className="App">
      <br />
      <h2>Favorite Author</h2>
      <Router>
        <Authors path="/" />
        <NotFound default />
        <NewAuthor path="/author/new" />
        <EditAuthor path="/author/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
