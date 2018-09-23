import React, {Component} from 'react';
import DepartureBoard from './departureBoard';

export default class Prediction extends Component{
    render (){
        return(
            <div className="Prediction">
                <DepartureBoard/>
                <DepartureBoard/>
            </div>
        )
    }
}