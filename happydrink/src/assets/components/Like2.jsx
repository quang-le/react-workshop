import React, { Component } from 'react';

class Like extends Component {
    constructor(props){
        super(props);
        this.state={
            isLiked: false,
            isDisliked:false,
            countLike:0,
            countDislike:0,
        }
    }
    liker=(like)=>{
        let countDislikePlus=this.state.countDislike+1;
        let countLikePlus=this.state.countLike+1;
        let countDislikeMinus=this.state.countDislike-1;
        let countLikeMinus=this.state.countLike-1
        
        if (like){
            this.setState({
                isLiked: !this.state.isLiked,
                isDisliked:this.state.isDisliked? !this.state.isDisliked : this.state.isDisliked,
                countLike:this.state.isLiked ?  countLikeMinus : countLikePlus,
                countDislike:this.state.isDisliked?(this.state.countDislike===0 ? this.state.countDislike : countDislikeMinus) : this.state.countDislike

            })
        }

        else {
            this.setState({
                isDisliked: !this.state.isDisliked,
                isLiked: this.state.isLiked? !this.state.isLiked : this.state.isLiked,
                countDislike: this.state.isDisliked? countDislikeMinus : countDislikePlus,
                countLike:this.state.isLiked?(this.state.countLike===0 ? this.state.countLike : countLikeMinus) : this.state.countLike
            })
        }
    }

    render() {
        let iconLike=this.state.isLiked? "fas fa-thumbs-up" : "far fa-thumbs-up";
        let iconDislike=this.state.isDisliked?"fas fa-thumbs-down" : "far fa-thumbs-down";

        return (
            <div>
                <div onClick={this.liker.bind(this,true)}>
                    <i className = {iconLike}></i>   
                </div>
                <div>
                    {this.state.countLike}
                </div>
                <div onClick={this.liker.bind(this,false)}>
                    <i className = {iconDislike}></i>
                </div>
                <div>
                    {this.state.countDislike}
                </div>
            </div>
        );
    }
}

export default Like;