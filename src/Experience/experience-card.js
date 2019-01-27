import React from 'react';

export default class ExperienceCard extends React.Component{

    render(){
        return(
            <div className='outside-wrapper'
                    onMouseEnter={this.props.expand}
                    onMouseLeave={this.props.close}>
                <div className='experience-card-container'>
                    <div className='card-topper'></div>
                    <div className='card-intro'></div>
                </div>
                {this.props.expanded}
            </div>
        )
    }
}

