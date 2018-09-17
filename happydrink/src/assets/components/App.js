import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../css/App.css';
import {establishments} from'./establishments/fixtures';

class App extends Component {
  render() {
    const listEstablishments=establishments.map((establishment)=>{
      return (
        <li
        key={establishment.id}
        className="establishment">
          <h3>{establishment.name}</h3>
          {establishment.description}
        </li>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.title}</h1>
        </header>
        <p className="App-intro">
          {listEstablishments}
        </p>
      </div>
    );
  }
}

export default App;
