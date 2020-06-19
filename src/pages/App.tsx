import React from 'react';
import { Switch, Route, Router } from "react-router-dom";
import { history } from '../utils/history';
import { Dashboard } from './index';
import '../styles/App.less';

export const App = (): JSX.Element => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={Dashboard} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
