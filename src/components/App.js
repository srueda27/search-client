import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import ListPhotos from "./photos/ListPhotos"
import CreatePhoto from "./photos/CreatePhoto";
import ShowPhoto from "./photos/ShowPhoto";

import history from "../history";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px', paddingBottom: '10px' }}>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={ListPhotos} />
          <Route path='/photos/new' exact component={CreatePhoto} />
          <Route path='/photos/show/:id' exact component={ShowPhoto} />
        </div>
      </Router>
    </div>
  );
}

export default App;