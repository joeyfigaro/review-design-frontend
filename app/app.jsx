import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LoginLayout from 'LoginLayout';
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
