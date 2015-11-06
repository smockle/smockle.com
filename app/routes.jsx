import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

import Home from 'home';
import Resume from 'resume';

const routes = [
  { path: '/',
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'resume', component: Resume },
      { path: '*', component: Home }
    ]
  }
];

ReactDOM.render(<Router history={createHistory()} routes={routes} />, document.getElementById("app"));
