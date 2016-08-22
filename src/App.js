import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './containers/SearchContainer';

import QueryContainer from './containers/QueryContainer';

import store from './stores/store'
import { Provider } from 'react-redux';

//Provider rend accessible Store a tous les etages dans l'app - doit etre a
// la racine

class App extends Component {
  render() {
    console.log('App: ', App);
    return (
      <Provider store={ store }>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>



          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <SearchContainer />
            <QueryContainer />
          </div>
        </div>
      </Provider>

    );
  }
}

export default App;
