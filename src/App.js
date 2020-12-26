import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/show/:id">
            <Show />
          </Route>
          <Route exact path="/starred">
            <Starred />
          </Route>
          <Route>this is 404 page</Route>
        </Switch>
      </div>
    );
  }
}

export default App;
