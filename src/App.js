import React from 'react';
import './App.css';
import GetNote from './Note';
import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route } from 'react-router-dom';

const App = ({items, index}) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <GetNote items={items} index={index} />} />
      </Switch>
    </HashRouter>
  );
}

const mapToProps = ({items, index}) => ({items, index});
export default connect(mapToProps)(App)

