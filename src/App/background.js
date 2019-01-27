import React from 'react';
import video from '../assets/space.mp4';

export default class Background extends React.Component{
    render(){
        let red;
        let blue;
        let yellow;
        let green;
        if(this.props.red === true){
            red = <div className='red-splash'></div>
        }
        if(this.props.blue === true){
            blue = <div className= 'blue-splash'></div>
        }
        if(this.props.green === true){
            green = <div className='green-splash'></div>
        }
        if(this.props.yellow === true){
            yellow =                 <div className='yellow-splash'></div>

        }
        return(
            <div className='background'>
                {red}
                {blue}
                {green}
                {yellow}
            </div>
        )
    }
}