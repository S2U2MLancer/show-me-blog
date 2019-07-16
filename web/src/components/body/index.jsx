/* eslint-disable react/prop-types */
import React from 'react';

class Body extends React.Component {
  componentWillMount() {
    const { getIndexInfoEvent } = this.props;
    getIndexInfoEvent('id');
  }

  render() {
    const { body } = this.props;
    return (
      <div>{body.content}</div>
    );
  }
}

export default Body;
