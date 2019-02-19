import { connect } from 'react-redux';
import { getList } from '../../store/actions/listActions';
import DisplayComicsPresentational from '../presentational/DisplayComicsPresentational';
import { increment, decrement } from '../../store/actions/counterActions';


const mapStateToProps = state => ({
  loading: state.list.loading,
  list: state.list.comics,
  offset: state.list.offset,
  total: state.list.total,
  limit: state.list.limit,
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  getList: (option, offset, total, limit) => dispatch(getList(option, offset, total, limit)),
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComicsPresentational);
