import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/displayComics.scss';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import option from '../../constant/apiOptions';

export default class DisplayComicsPresentational extends Component {
  componentDidMount() {
    const { getList } = this.props;
    getList(option.comics);
  }


  // handlePrevious = () => {
  //   const { getList, offset, decrement } = this.props;
  //   getList(option.comics, offset - 20);
  //   decrement();
  // }

  // handleNext = () => {
  //   const { getList, offset, increment } = this.props;
  //   getList(option.comics, offset + 20);
  //   increment();
  // }

  render() {
    const { getList, list, offset, total, loading } = this.props;

    // regex to delete text between parentheses
    const parenthese = /\(.+\)/g;


    if (loading) return <LinearProgress />;

    return (
      <div>
        <Grid container className="container-display-comics">
          <Grid className="container-comics-picture" item xs={12}>
            <img className="comics-picture" src="/images/background-characters.jpg" alt="comics pictures" />
            <h1 className="comics-title">Comics</h1>
          </Grid>
          {list.map(comic => (
            <Grid item xs={7} sm={4} md={3} lg={2} xl={1} className="comics-card" key={comic.id}>
              <img className="comics-cover" src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title} />
              <p className="comics-cover-title">{comic.title.split(parenthese)}</p>
            </Grid>
          ))}
        </Grid>
        <Grid className="container-button-pagination">
          {offset > 0 && (
            <button className="button-pagination" type="button" onClick={() => getList(option.comics, offset - 20)}>
              <img src="/images/left-arrow-red.svg" alt="left arrow" />
            </button>
          )}
          <p>
            {`${offset / 20 + 1}/${Math.round(total / 20) + 1}`}
          </p>
          {offset <= total - 11 && (
            <button className="button-pagination" type="button" onClick={() => getList(option.comics, offset + 20)}>
              <img src="/images/right-arrow-red.svg" alt="right arrow" />
            </button>
          )}
        </Grid>
      </div>
    );
  }
}


DisplayComicsPresentational.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        name: PropTypes.string,
      }),
    }),
  ),
  getList: PropTypes.func,
  increment: PropTypes.func,
  decrement: PropTypes.func,
}.isRequired;
