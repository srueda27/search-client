import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";

import history from "../history";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <Router history={history}>
        <div>
          <Header />
        </div>
      </Router>
    </div>
  );
}

export default App;