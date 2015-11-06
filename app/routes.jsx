import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'home';
import { Router } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

let routes = {
  component: Home,
  childRoutes: [
    { path: '/*', component: Home }
  ]
};

ReactDOM.render(<Router children={routes} history={createHistory()} />, document.getElementById("app"));
