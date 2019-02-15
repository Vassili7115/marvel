import { connect } from 'react-redux';
import { getList } from '../../store/actions/listActions';
import DisplaySeriesPresentational from '../presentational/DisplaySeriesPresentational';

const mapStateToProps = state => ({
  series: state.fetchSeries.series,
});

const mapDispatchToProps = dispatch => ({ getList: option => dispatch(getList(option)) });

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySeriesPresentational);
