import React, {Component} from 'react';

export default class Train extends Component{
    render(){
        return (
            <div className="Train">
               {this.props.train}
            </div>
        );
    }
}