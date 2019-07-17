import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './pages/app';

const Routers = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

export default Routers;