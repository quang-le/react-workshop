import React, {Component} from 'react';
import Network from './network';
import Prediction from './predictions';

export default class Page extends Component{
    render(){
        return(
            <div className="Page">
                <Network/>
                <Prediction/>
            </div>
    
        )
    }
}