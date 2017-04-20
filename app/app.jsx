import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LoginLayout from './components/layouts/login-layout';
// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/login" component={LoginLayout} >
      <IndexRoute component={Login}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
