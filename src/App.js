import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import routers from './router/index.js';

class App extends Component {
  render() {
    return (
      <Switch>
          {routers.map((r, key) => <Route component={r.component} exact={!!r.exact} key={key} path={r.path} />)}
      </Switch>
    );
  }
}

export default App;
