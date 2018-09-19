import React,{Component} from 'react';

class Form extends Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        let name=e.target.name.value;  // va chercher la valeur de l'input name
        let description=e.target.description.value ;// idem avec input description
        let newBar={name, description};
        this.props.addBar(newBar);  //comme this a été bindé dans App, il utilisé le contexte où il est appelé, càd Forms
    }

    render(){
        return(     //bind va lier this au contexte où la fonction est appelée, càd ici App.jsx 
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}> 
                    <input type="text" name="name"/>
                    <input type="text" name="description"/>
                    <button>Coin!</button>
                </form>
            </div>
        )
    }
}
export default Form;