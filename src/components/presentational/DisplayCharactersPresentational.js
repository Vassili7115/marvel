import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import '../../stylesheets/displayCharacters.scss';
import LinearProgress from '@material-ui/core/LinearProgress';

import option from '../../constant/apiOptions';

export default class DisplayCharactersPresentational extends Component {
  componentDidMount() {
    const { getList } = this.props;
    getList(option.characters);
  }

  // handlePrevious = () => {
  //   const { getList, offset, decrement } = this.props;
  //   getList(option.characters, offset - 20);
  //   decrement();
  // }

  // handleNext = () => {
  //   const { getList, offset, increment } = this.props;
  //   getList(option.characters, offset + 20 );
  //   increment();
  // }

  render() {
    const { getList, list, offset, total, loading } = this.props;
    // regex to delete text between parentheses
    const parenthese = /\(.+\)/g;


    if (loading) return <LinearProgress />;

    return (
      <div>
        <Grid container className="container-display-characters">
          <Grid className="container-character-picture" item xs={12}>
            <img className="character-picture" src="/images/background-characters.jpg" alt="characters pictures" />
            <h1 className="character-title">Characters</h1>
          </Grid>
          {list.map(character => (
            <Grid item xs={7} sm={4} md={3} lg={2} xl={1} className="characters-card" key={character.id}>
              <img className="picture-card" src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`} alt={character.name} />
              <p className="text-card">{character.name.split(parenthese)}</p>
            </Grid>
          ))}
        </Grid>

        <Grid className="container-button-pagination">
          {offset > 0 && (
            <button className="button-pagination" type="button" onClick={() => getList(option.characters, offset - 20)}>
              <img src="/images/left-arrow-red.svg" alt="left arrow" />
            </button>
          )}
          <p>
            {`${offset / 20 + 1}/${Math.round(total / 20) + 1}`}
          </p>
          {offset <= total - 11 && (
            <button className="button-pagination" type="button" onClick={() => getList(option.characters, offset + 20)}>
              <img src="/images/right-arrow-red.svg" alt="right arrow" />
            </button>
          )}
        </Grid>
      </div>
    );
  }
}

DisplayCharactersPresentational.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
    }),
  ),
  getList: PropTypes.func,
  increment: PropTypes.func,
  decrement: PropTypes.func,
}.isRequired;
