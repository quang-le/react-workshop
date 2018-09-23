import React,{Component} from 'react';

class Bar extends Component{
    render(){
        return(
            <div className="pub">
                <h2>{this.props.barName.name}</h2>
                <article>{this.props.barName.description}</article>
            </div>
        )
    }
};
export default Bar;