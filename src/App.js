import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import DisplayCharactersContainer from './components/DisplayCharactersContainer';
import DisplayComicsContainer from './components/DisplayComicsContainer';
import Home from './components/Home';
import Page404 from './components/Page404';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
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

export default App;