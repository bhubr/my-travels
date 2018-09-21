import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Travel
          destination="Macchu Picchu"
          country="Pérou"
          photo="https://images.national-tours.fr/(Image)-image-Perou-Machu-Picchu-71-fo_105089842-09032017.jpg"
          distance="10047" />
        <Travel
          destination="Taj Mahal"
          country="Inde"
          photo="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-0-20151104113424.jpg"
          distance="6762" />
      </div>
    );
  }
}

export default App;
