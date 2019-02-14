import { connect } from 'react-redux';
import { getList } from '../../store/actions/listActions';
import DisplayComicsPresentational from '../presentational/DisplayComicsPresentational';


const mapStateToProps = state => ({
  comics: state.fetchComics.comics,
});

const mapDispatchToProps = dispatch => ({ getList: option => dispatch(getList(option)) });

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComicsPresentational);
