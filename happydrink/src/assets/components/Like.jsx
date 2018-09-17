import React, {Component} from 'react';

class Like extends Component{
    constructor(props){
        super(props);
        this.state={
            liked:false,
            count:0
        }
    }
    
    
    thumb=()=>{
        this.setState({
            liked:true,
            count:this.state.count+1
        });
        
         
    }
    render(){
        return(
            <div className="like">
                <a onClick={this.thumb}>{this.props.like}{this.state.count}</a>
            </div>
        )
    }
}
export default Like;