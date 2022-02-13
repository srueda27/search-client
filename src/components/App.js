import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import PhotosList from "./photos/PhotosList"

import history from "../history";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={PhotosList} />
        </div>
      </Router>
    </div>
  );
}

export default App;