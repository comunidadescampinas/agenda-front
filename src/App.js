import React, { Component } from 'react';
import './App.css';

import ListaEventos from './components/lista-eventos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Agenda Tech RMC</h2>
        </div>
        <div className="Container-eventos">
          <ListaEventos/>
        </div>
      </div>
    );
  }
}

export default App;
