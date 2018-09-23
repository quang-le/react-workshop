import React, { Component } from 'react';
import Bar from './Bar';
import Form from './Form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        barList:[
          {
            name:"Parachute",
            description:"contre-pète",
          },
          {
            name:"A pieds par la Chine",
            description:"calembour"
          },
          {
            name:"Les mites de mes Habits",
            description:"nan, mais sérieux??"
          }
        ]
      }
    }
  addBar=(bar)=>{
    let barChanger=this.state.barList;
    barChanger.push(bar);
    this.setState({
      barList:barChanger
    })
  }  

  render() {
    let barsArray=this.state.barList.map((barItem, index)=>{
      return (
        <div className="bar" key={"bar"+index}>
          <Bar barName={barItem}/>
        </div>
      )
    })
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Is this shit working?</h1>
        </header>
        <div className="App-intro">
          {barsArray}
        </div>
        <Form addBar={this.addBar.bind(this)}/>
      </div>
    );
  }
}


export default App;
