import React,{Component} from 'react';
import Line from './line';

export default class Network extends Component{
    render(){
        return(
            <div className="Network">
                <Line lineInfo={'1B Stockel'}/>
                <Line lineInfo={'1A Hermann-Debroux'}/>
                <Line lineInfo={'1A Hermann-Debroux'}/>
                <Line lineInfo={'1A Hermann-Debroux'}/>
                <Line lineInfo={'1A Hermann-Debroux'}/>
                <Line lineInfo={'1A Hermann-Debroux'}/>
                <Line lineInfo={'1A Hermann-Debroux'}/>
            </div>
        
        );
    }
}