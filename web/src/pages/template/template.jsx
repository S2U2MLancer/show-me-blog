/* eslint-disable react/prop-types */
import React from 'react';

const Template = ({ children }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-3">Left Navigator</div>
      <div className="col-md-9">
        {children}
      </div>
    </div>
  </div>
);

export default Template;
