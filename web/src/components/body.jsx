import React from 'react';
import { connect } from 'react-redux';
import { getIndexInfo } from '../actions/getIndexInfo';

class BodyElement extends React.Component {
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

const mapStateToProps = state => ({
  body: state.index,
});

const mapDispatchToProps = dispatch => ({
  getIndexInfoEvent: (id) => {
    dispatch(getIndexInfo(id));
  },
});

const Body = connect(mapStateToProps, mapDispatchToProps)(BodyElement);
export default Body;
