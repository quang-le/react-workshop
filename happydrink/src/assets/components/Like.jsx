import React, {Component} from 'react';

class Like extends Component{
    constructor(props){
        super(props);
        this.state={
            isLiked:false,
            isDisliked: false
        }
    }
    
    liked=()=>{
        this.setState({
            isLiked:!this.state.isLiked,
            isDisliked: this.state.isDisliked? !this.state.isDisliked: this.state.isDisliked
        })
        //console.log('like changed')     
    }

    disliked=()=>{
        this.setState({
            isDisliked:!this.state.isDisliked,
            isLiked:this.state.isLiked? !this.state.isLiked:this.state.isLiked
        })  
        //console.log('dislike changed');
    }

    // thumbSwitch=(state, button, iconOn, iconOff)=>{
    //     button=state? <i className = {iconOn}></i> : <i className ={iconOff}></i>
    //     console.log('icon switch');
    //     console.log(state);
    // };
    render(){

        // let thumbUp= <i className="fas fa-thumbs-up"></i>
        // let thumbDown= <i className="far fa-thumbs-down"></i>
        
        // this.thumbSwitch(this.state.isLiked, thumbUp,"fas fa-thumbs-up","far fa-thumbs-up" );
        // this.thumbSwitch(this.state.isDisliked, thumbDown,"fas fa-thumbs-down","far fa-thumbs-down" );
        let iconLike = this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up";
        let iconDislike=this.state.isDisliked ? "fas fa-thumbs-down" : "far fa-thumbs-down";
        return(

            <div>
                <div className="like">
                    <a onClick={this.liked}>
                        <i className = {iconLike}></i>
                        {this.state.count}
                    </a>
                </div>
                <div className="dislike">
                    <a onClick={this.disliked}>
                        <i className = {iconDislike}></i>
                        {this.state.count}
                    </a>
                </div>
            </div>
        )
    }
}
export default Like;