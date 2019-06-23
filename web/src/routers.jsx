import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Template from './pages/template/template';
import Body from './pages/index/index';


const Routers = () => (
  <Router>
    <Template>
      <Route path="/" exact component={Body} />
    </Template>
  </Router>
);

export default Routers;
