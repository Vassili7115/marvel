import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "../store/actions/listActions";

import LinearProgress from '@material-ui/core/LinearProgress';
// import DisplayCharacters from './DisplayCharacters'

import Grid from '@material-ui/core/Grid';

import '../stylesheets/displayCharacters.scss'


class DisplayCharactersContainer extends Component {

componentDidMount() {
    this.props.getList();
}

  render() {
    console.log("1 :", this.props.characters)
    const { characters } = this.props


    //regex to delete text between parentheses
    const parenthese = /\(+\)/;

    if (characters === null) return <LinearProgress />
    return(
        <div>
        <Grid container className="container-display-characters">
          <Grid item xs={12}>
            <h1 className="character-title">Characters</h1>
          </Grid>
            {characters.map((character) =>        
          <Grid className="card-container" item key={character.id}>
            <img className="picture-card" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
            <p className="text-card">{character.name.split(parenthese)}</p>
          </Grid>
            )}
            </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.fetch.characters,
});

const mapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch(getList())
    }
  }

export default connect(mapStateToProps, (mapDispatchToProps))(DisplayCharactersContainer);
