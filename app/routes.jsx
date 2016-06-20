import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

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

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById("app"));
