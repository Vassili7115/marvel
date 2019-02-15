import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/displaySeries.scss';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import option from '../../constant/apiOptions';

export default class DisplaySeriesPresentational extends Component {
  componentDidMount() {
    const { getList } = this.props;
    const offset = 40;
    getList(option.series, offset);
  }

  render() {
    const { series } = this.props;

    // regex to delete text between parentheses
    const parenthese = /\(.+\)/g;

    if (series === null) return <LinearProgress />;

    return (
      <div>
        <Grid container className="container-display-series">
          <Grid className="container-series-picture" item xs={12}>
            <img className="series-picture" src="/images/background-characters.jpg" alt="series pictures" />
            <h1 className="series-title">series</h1>
          </Grid>
          {series.map(serie => (
            <Grid item xs={4} md={3} lg={2} className="series-card" key={serie.id}>
              <img className="series-cover" src={`${serie.thumbnail.path}/portrait_uncanny.${serie.thumbnail.extension}`} alt={serie.title} />
              <p className="series-cover-title">{serie.title.split(parenthese)}</p>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

DisplaySeriesPresentational.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  ),
  getList: PropTypes.func,
}.isRequired;
