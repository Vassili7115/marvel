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

    if (this.props.characters === null) return <LinearProgress className="loader" />
    return(
        <div>
        <Grid container>
          <Grid item xs={12}>
            <h1 className="character-title">Characters</h1>
          </Grid>
            {characters.map((character) =>
          <Grid className="card-container" item key={character.id}>
            <img className="picture-card" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
            <p className="text-card">{character.name.replace('(','').replace(')','')}</p>
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