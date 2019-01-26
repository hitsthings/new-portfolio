import React from 'react';

export default class ProjectCard extends React.Component{
    render(){
        console.log(this.props.image)
        return(
            <div className='project-card-container'>
                <div className='project-card'>
                    <div className='project-card-front'>
                        <img src={this.props.image} alt={this.props.alt}/>
                    </div>
                    <div className='project-card-back'>

                    </div>
                </div>
            </div>
        )
    }
}