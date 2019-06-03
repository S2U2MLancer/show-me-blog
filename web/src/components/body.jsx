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
    console.log(this.props);
    // eslint-disable-next-line react/prop-types
    const { indexInfo } = this.props;
    return (
      <div>{indexInfo.content}</div>
    );
  }
}

const mapStateToProps = state => ({
  indexInfo: state.getIndexInfoReducers.indexInfo,
});

const mapDispatchToProps = dispatch => ({
  getIndexInfoEvent: (id) => {
    console.log('getIndexInfoEvent');
    dispatch(getIndexInfo(id));
  },
});

const Body = connect(mapStateToProps, mapDispatchToProps)(BodyElement);
export default Body;
