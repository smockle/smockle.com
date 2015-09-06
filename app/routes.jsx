import React from 'react';
import App from 'app';
import Home from 'home';
import { Router } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

let routes = {
  component: App,
  childRoutes: [
    { path: '/*', component: Home }
  ]
};

React.render(<Router children={routes} history={createHistory()} />, document.getElementById("app"));
