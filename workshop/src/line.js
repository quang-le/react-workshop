import React,{Component} from 'react';
export default class Line extends Component{
    render(){
        return (
            <div className="Line">
                {this.props.lineInfo}
            </div>
        );
    }
}