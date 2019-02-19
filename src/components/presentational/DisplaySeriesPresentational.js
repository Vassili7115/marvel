import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/displaySeries.scss';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

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
    const { getList, list, offset, total, loading } = this.props;

    // regex to delete text between parentheses
    const parenthese = /\(.+\)/g;


    if (loading) return <LinearProgress />;

    return (
      <div>
        <Grid container className="container-display-series">
          <Grid className="container-series-picture" item xs={12}>
            <img className="series-picture" src="/images/background-characters.jpg" alt="series pictures" />
            <h1 className="series-title">series</h1>
          </Grid>
          {list.map(serie => (
            <Grid item xs={7} sm={4} md={3} lg={2} xl={1} className="series-card" key={serie.id}>
              <img className="series-cover" src={`${serie.thumbnail.path}/portrait_uncanny.${serie.thumbnail.extension}`} alt={serie.title} />
              <p className="series-cover-title">{serie.title.split(parenthese)}</p>
            </Grid>
          ))}
        </Grid>
        <Grid className="container-button-pagination">

          {offset > 0 && (
            <button className="button-pagination" type="button" onClick={() => getList(option.series, offset - 20)}>
              <img src="/images/left-arrow-red.svg" alt="left arrow" />
            </button>
          )}
          <p>
            {`${offset / 20 + 1}/${Math.round(total / 20) + 1}`}
          </p>
          {offset <= total - 11 && (
            <button className="button-pagination" type="button" onClick={() => getList(option.series, offset + 20)}>
              <img src="/images/right-arrow-red.svg" alt="right arrow" />
            </button>
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
