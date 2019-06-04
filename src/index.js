import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CreatePage from './CreatePage'
import { register } from './serviceWorker'
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/create" component={CreatePage} />
  </Router>,
  document.getElementById('root')
);

register();
