import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import DisplayCharactersContainer from './components/containers/DisplayCharactersContainer';
import DisplayComicsContainer from './components/containers/DisplayComicsContainer';
import Page404 from './components/Page404';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/characters" component={DisplayCharactersContainer}/>
            <Route path="/comics" component={DisplayComicsContainer}/>
            <Route component={Page404}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
