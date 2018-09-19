//NOT WORKING

import React, {Component} from 'react';

class Like extends Component{
    constructor(props){
        super(props);
        this.state={
            isLiked:false,
            isDisliked: false,
            countLike:0,
            countDislike:0,
        }
    }
    // CODE from Bertrand
    // liked=(liked)=>{
    //     if(liked){
    //         this.setState({
    //             isLiked:!this.state.isLiked,
    //             isDisliked: this.state.isDisliked? !this.state.isDisliked: this.state.isDisliked
    //         })
    //         if (!this.state.isLiked){
    //             this.setState({
    //                 countLike:this.state.countLike+1
    //             })
    //         }
    //         else {
    //             this.setState({
    //                 countLike:this.state.countLike-1
    //             })
    //         }   
    //     }else{
    //         this.setState({
    //             isDisliked:!this.state.isDisliked,
    //             isLiked: this.state.isLiked? !this.state.isLiked: this.state.isLiked
    //         })
    //         if (!this.state.isLiked){
    //             this.setState({
    //                 countDislike:this.state.countDislike+1
    //             })
    //         }
    //         else {
    //             this.setState({
    //                 countDislike:this.state.countDislike-1
    //              })
    //         }   
    //     }
    // }

    liked=(state1, otherState, count)=>{
        this.setState({
            state1:!state1,
            otherState: otherState? !otherState: otherState,
        })
        if (!state1){
            this.setState({
                count:count+1
            })
        }
        // else if (!state1 && count<=0){
        //     this.setState({
        //         count:0
        //     })
        //}
        else {
            this.setState({
                count:count-1
            })
        console.log(state1);   
        }   
    }


    //Legacy code
    // disliked=()=>{
    //     this.setState({
    //         isDisliked:!this.state.isDisliked,
    //         isLiked:this.state.isLiked? !this.state.isLiked:this.state.isLiked
    //     })  
    // }

    render(){
        console.log('update')
        let iconLike = this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up";
        let iconDislike=this.state.isDisliked ? "fas fa-thumbs-down" : "far fa-thumbs-down";
        //Code from Bertrand
        // return(

        //     <div>
        //         <div className="like">
        //             <a onClick={this.liked.bind(this, true)}>
        //                 <i className = {iconLike}></i>
        //                 {this.state.countLike}
        //             </a>
        //         </div>
        //         <div className="dislike">
        //             <a onClick={this.liked.bind(this, false)}>
        //                 <i className = {iconDislike}></i>
        //                 {this.state.countDislike}
        //             </a>
        //         </div>
        //     </div>
        // )

        return(

        <div>
            <div className="like">
                <a onClick={this.liked.bind(this, this.state.isLiked,this.state.isDisliked,this.state.countLike)}>
                    <i className = {iconLike}></i>
                    {this.state.countLike}
                </a>
            </div>
            <div className="dislike">
                <a onClick={this.liked.bind(this, this.state.isDisliked,this.state.isLiked,this.state.countDislike)}>
                    <i className = {iconDislike}></i>
                    {this.state.countDislike}
                </a>
            </div>
        </div>
        )
    }
}
export default Like;