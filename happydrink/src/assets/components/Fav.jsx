import React, {Component} from 'react';

class Fav extends Component{
    constructor(props){
        super(props);
        this.state={
            fav:false,
        }
        this.favicon="far fa-heart";
    }

    favorite=()=>{
        if (this.state.fav===false){
            return this.favicon="far fa-heart";
        }
        else {
            return this.favicon="fas fa-heart"
        }
        
    }

    clicker=()=>{
        if (this.state.fav===false){
            this.setState({
                fav:true})
            }
        else if (this.state.fav===true){
            this.setState({
                fav:false
            })
        }
        this.favorite()
    }

    render(){
        return(
            <div className="fav">
                <a onClick={this.clicker}>
                    <i className={this.favicon}></i>
                </a>
            </div>
        )
    }
}
export default Fav
