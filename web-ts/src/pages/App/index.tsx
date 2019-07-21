import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './index.css';
import LeftNav from '../../containers/LeftNav';

const AppElement: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const App = () => (
  <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-3">
          <LeftNav />
        </div>
        <div className="col-md-7">
          <Switch>
            <Route path="/" exact={true} component={AppElement} />
          </Switch>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  </Router>
);

export default App;
