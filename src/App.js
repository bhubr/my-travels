import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import TravelList from './TravelList';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <TravelList />
      </div>
    );
  }
}

export default App;
