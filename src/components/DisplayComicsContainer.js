import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "../store/actions/listActions";

import LinearProgress from '@material-ui/core/LinearProgress';


import Grid from '@material-ui/core/Grid';
import '../stylesheets/displayCharacters.scss'

class DisplayComicsContainer extends Component {

  componentDidMount() {
    this.props.getList();
}

  render() {
    console.log("container :", this.props.characters)
    const { characters } = this.props


    if (characters === null) return <LinearProgress />

    return(
        <div>
          {/* <DisplayCharacters/> */}
        <Grid container className="container-display-characters">
          <Grid item xs={12}>
            <h1 className="character-title">Comics</h1>
          </Grid> 
          {/* {characters.map((character) => <Grid>{character.comics.collectionURI}</Grid>)} */}
          {characters.map((character,index) => <Grid key={index}>{character.comics.items.map((item,index) => <Grid key={index}>{item.name}</Grid>)}</Grid>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComicsContainer);
