import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/App';
import LeftNav from './containers/LeftNav';

const Routers = () => (
  <Router>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          Left Navigator
          <LeftNav />
        </div>
        <div className="col-md-8">
          <Switch>
            <Route path="/" exact={true} component={App} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default Routers;
