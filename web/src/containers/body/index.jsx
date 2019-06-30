import { connect } from 'react-redux';
import { getIndexInfoAction } from '../../actions/getIndexInfoAction';
import BodyElement from '../../components/body';

const mapStateToProps = state => ({
  body: state.getIndexInfoReducer,
});

const mapDispatchToProps = dispatch => ({
  getIndexInfoEvent: (id) => {
    dispatch(getIndexInfoAction(id));
  },
});

const Body = connect(mapStateToProps, mapDispatchToProps)(BodyElement);
export default Body;
