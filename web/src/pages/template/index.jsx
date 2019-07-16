/* eslint-disable react/prop-types */
import React from 'react';
import LeftNav from '../../containers/leftNav';

const Template = ({ children }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <LeftNav />
      </div>
      <div className="col-md-8">
        {children}
      </div>
    </div>
  </div>
);

export default Template;
