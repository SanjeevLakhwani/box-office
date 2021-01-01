import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';
import { ThemeProvider } from 'styled-components';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    );
  }
}

export default App;
