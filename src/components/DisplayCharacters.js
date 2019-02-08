import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "../store/actions/listActions";

import LinearProgress from '@material-ui/core/LinearProgress';

import Grid from '@material-ui/core/Grid';


import '../stylesheets/displayCharacters.scss'

class DisplayCharacters extends Component {

  componentDidMount() {
    this.props.getList();
 }

  render() {
    console.log(this.props.characters)
    const { characters } = this.props
    if (characters === null) return <LinearProgress className="loader" />
    return(
      <div>
        <Grid container>
          <Grid item xs={12}>
            <h1 className="character-title">Characters</h1>
          </Grid>
            {characters.map((character) =>
          <Grid className="card-container" item key={character.id}>
            <img className="picture-card" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
            <p className="text-card">{character.name}</p>
          </Grid>
            )}
            </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.fetch.characters,
  loading: state.fetch
});


export default connect(mapStateToProps, {getList})(DisplayCharacters);