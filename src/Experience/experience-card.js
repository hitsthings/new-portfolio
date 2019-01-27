import React from 'react';

export default class ExperienceCard extends React.Component{

    onMouseEnter = () => {
        console.log('entered')
    }

    onMouseLeave = () => {
        console.log('left')
    }

    render(){
        let expand;
        if(this.props.expanded === true){
            expand = <Expanded />
        }

        return(
            <div className='experience-card-container'>
                <div className='card-topper'></div>
                <div className='card-intro'></div>
                {expand}
            </div>
        )
    }
}

const Expanded = () => {
    return(
        <div className='expanded-card'>
            <div className='section2 card-section'></div>
            <div className='section3 card-section'></div>
        </div>
    )
}