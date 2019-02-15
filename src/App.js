import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './components/Home.js';
import DisplayCharactersContainer from './components/containers/DisplayCharactersContainer';
import DisplayComicsContainer from './components/containers/DisplayComicsContainer';
import DisplaySeriesContainer from './components/containers/DisplaySeriesContainer';
import Page404 from './components/Page404.js';


const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters" component={DisplayCharactersContainer} />
        <Route path="/comics" component={DisplayComicsContainer} />
        <Route path="/series" component={DisplaySeriesContainer} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default (App);
