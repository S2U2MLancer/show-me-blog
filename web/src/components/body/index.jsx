import React from 'react';

class Body extends React.Component {
  componentWillMount() {
    // eslint-disable-next-line react/prop-types
    const { getIndexInfoEvent } = this.props;
    getIndexInfoEvent('id');
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { body } = this.props;
    return (
      <div>{body.content}</div>
    );
  }
}

export default Body;
