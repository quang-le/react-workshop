import React, { Component } from 'react';
import Like from '../Like';
import Fav from '../Fav';

class Pub extends Component{
    render(){      
     return (
         <div 
         className="pub">
            <h3>{this.props.pub.name}</h3>
            {this.props.pub.description}
            <Like/>
            <Fav/>
         </div>
              )
    }
}
export default Pub;
