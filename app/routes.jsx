import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<Router children={routes} history={createHistory()} />, document.getElementById("app"));
