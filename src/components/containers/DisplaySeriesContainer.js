import { connect } from 'react-redux';
import { getList } from '../../store/actions/listActions';
import DisplaySeriesPresentational from '../presentational/DisplaySeriesPresentational';
import { increment, decrement } from '../../store/actions/counterActions';

const mapStateToProps = state => ({
  list: state.list.series,
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
export default connect(mapStateToProps, mapDispatchToProps)(DisplaySeriesPresentational);
