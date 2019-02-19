import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/displaySeries.scss';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import option from '../../constant/apiOptions';

export default class DisplaySeriesPresentational extends Component {
  componentDidMount() {
    const { getList } = this.props;
    getList(option.series);
  }

  // handlePrevious = () => {
  //   const { getList, offset, decrement } = this.props;
  //   getList(option.series, offset - 20);
  //   decrement();
  // }

  // handleNext = () => {
  //   const { getList, offset, increment } = this.props;
  //   getList(option.series, offset + 20);
  //   increment();
  // }

  render() {
    const { getList, list, offset, total } = this.props;

    // regex to delete text between parentheses
    const parenthese = /\(.+\)/g;

    configureAnchors({ offset: -50, scrollDuration: 600 });

    if (list === null) return <LinearProgress />;

    return (
      <div>
        <ScrollableAnchor id="goToTop"><div></div></ScrollableAnchor>
        <Grid container className="container-display-series">
          <Grid className="container-series-picture" item xs={12}>
            <img className="series-picture" src="/images/background-characters.jpg" alt="series pictures" />
            <h1 className="series-title">series</h1>
          </Grid>
          {list.map(serie => (
            <Grid item xs={4} md={3} className="series-card" key={serie.id}>
              <img className="series-cover" src={`${serie.thumbnail.path}/portrait_uncanny.${serie.thumbnail.extension}`} alt={serie.title} />
              <p className="series-cover-title">{serie.title.split(parenthese)}</p>
            </Grid>
          ))}
        </Grid>
        <Grid className="container-button-pagination">
          <p>
            {`${offset / 20 + 1}/${Math.round(total / 20) + 1}`}
          </p>
          {offset > 0 && (
            <a href="#goToTop">
              <button className="button-pagination" type="button" onClick={() => getList(option.characters, offset - 20)}>
                <img src="/images/left-arrow.svg" alt="left arrow" />
              </button>
            </a>
          )}
          {offset <= total - 11 && (
            <a href="#goToTop">
              <button className="button-pagination" type="button" onClick={() => getList(option.characters, offset + 20)}>
                <img src="/images/right-arrow.svg" alt="right arrow" />
              </button>
            </a>
          )}
        </Grid>
      </div>
    );
  }
}

DisplaySeriesPresentational.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
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
