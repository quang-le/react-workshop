import React, {Component} from 'react';
import Train from './trains';

export default class DepartureBoard extends Component{
    render(){
        return(
            <div className="DepartureBoard">
                < Train train={'1A Hermann-Debroux'}/>
                < Train train={'1A Hermann-Debroux'}/>
            </div>
        )
    }
}