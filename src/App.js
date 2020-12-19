import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          This is home page
        </Route>
        <Route>this is 404 page</Route>
      </Switch>
    );
  }
}

export default App;
