import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../css/App.css';
import Pub from './establishments/pubs';
import {establishments} from'./establishments/fixtures';

class App extends Component {
  constructor (props){
    super(props);
    this.state={
      pseudo:"Inconnu"
    }
  };
  randomPseudo=()=>{
    const letters="DANSTONCUL"
    let size=Math.floor(Math.random()*7)+4
    let randomPseudo=""
    for(let i=0; i < size; i++){
      randomPseudo+=letters.charAt(Math.floor(Math.random()*letters.length));
    }
    this.setState({
      pseudo:randomPseudo
    })
  }

  render() {
    const listEstablishments=establishments.map((establishment)=>{
      return (
        <Pub
        key={establishment.id}
        pub={establishment}
        />
        
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello {this.state.pseudo}! Welcome to {this.props.title}</h1>
        </header>
        <div className="App-intro">
          <p> <a onClick={this.randomPseudo}>Changer le pseudo?</a></p>
          <section>
            {listEstablishments}
          </section>
          
        </div>
      </div>
    );
  }
}
export default App;
