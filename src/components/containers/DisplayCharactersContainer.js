import { connect } from 'react-redux';
import { getList } from '../../store/actions/listActions';
import DisplayCharactersPresentational from '../presentational/DisplayCharactersPresentational';

const mapStateToProps = state => ({
  characters: state.fetchCharacters.characters,
});

const mapDispatchToProps = dispatch => ({ getList: option => dispatch(getList(option)) });

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCharactersPresentational);
