import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../css/App.css';
import Rebase from 're-base';
import db from '../../Base'
import Form from './Form'
import Bar from './Bar';
import Like from './Like2';
import Fav from './Fav';

var base=Rebase.createClass(db.database());




class App extends Component {
  constructor (props){
    super(props);
    this.state={
      pseudo:"Inconnu",
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
  };
  

  componentDidMount(){
    base.syncState(`/`,{
      context:this,
      state:'barList',
      asArray:true,
    })
    console.log(this.state.barList);
  }
  

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
  addBar=(bar)=>{
    let barChanger=this.state.barList;
    barChanger.push(bar);
    this.setState({
      barList:barChanger
    })
  } 

  // dbSync=()=>{
  //   this.setState({ 
  //     barList:this.state.barList
  //   })
  // }

  render() {

    let barsArray=this.state.barList.map((barItem, index)=>{
      return (
        <div className="bar" key={"bar"+index}>
          <Bar barName={barItem}/>
          <Like/>
          <Fav/>
        </div>
      )
    });

    return (
      <div className="App" onLoad={this.dbSync}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello {this.state.pseudo}! Welcome to {this.props.title}</h1>
        </header>
        <div className="App-intro">
          <p> <a onClick={this.randomPseudo}>Changer le pseudo?</a></p>
          {barsArray}
        </div>
        <div className="Form">
          <Form addBar={this.addBar.bind(this)}/> 
        </div>
        
      </div>
    );
  }
}
export default App;
