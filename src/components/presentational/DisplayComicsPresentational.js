import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import '../../stylesheets/DisplayComicsContainer.scss';

import option from '../../constant/apiOptions';

export default class DisplayComicsPresentational extends Component {

  componentDidMount() {
    const { getList } = this.props;
    getList(option.comics);
  }

  render() {
    const { comics } = this.props;

    // regex to delete text between parentheses
    const parenthese = /\(.+\)/g;

    if (comics === null) return <LinearProgress />

    return (
      <div>
        <Grid container className="container-display-comics">
          <Grid className="container-comics-picture" item xs={12}>
            <img className="comics-picture" src="/images/background-characters.jpg" alt="comics pictures" />
            <h1 className="comics-title">Comics</h1>
          </Grid> 
            {comics.map(comic => 
            <Grid item xs={4} md={3} lg={2} className="comics-card" key={comic.id}>
            <img className="comics-cover" src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title}/>
                <p className="comics-cover-title">{comic.title.split(parenthese)}</p>
            </Grid>
            )}
        </Grid>
      </div>
    );
  }
};


  DisplayComicsPresentational.propTypes = {
  comics: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
),
  getList: PropTypes.func.isRequired,
};
