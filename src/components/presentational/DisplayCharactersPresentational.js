
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

  render() {
    const { characters } = this.props;

    // regex to delete text between parentheses
    const parenthese = /\(.+\)/g;

    if (characters === null) return <LinearProgress />;

    return (   
      <div>
        <Grid container className="container-display-characters">
          <Grid className="container-character-picture" item xs={12}>
            <img className="character-picture" src="/images/background-characters.jpg" alt="characters pictures" />
            <h1 className="character-title">Characters</h1>
          </Grid>
            {characters.map(character => 
            <Grid item xs={6} sm={4} md={3} lg={2} xl={1} className="card-container" key={character.id}>
              <img className="picture-card" src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`} alt={character.name}/> 
                <p className="text-card">{character.name.split(parenthese)}</p>
            </Grid>)}
        </Grid>
      </div>
    );
  }
};

DisplayCharactersPresentational.propTypes = {
  characters: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
),
  getList: PropTypes.func.isRequired,
};
