import React from 'react';

export default class ProjectCard extends React.Component{
    render(){
        return(
            <div className='project-card-container'>
                <div className={`project-card ${this.props.className}`}>
                    <div className='project-card-front'>
                        <img src={this.props.image} alt={this.props.alt}/>
                    </div>
                    <div className='project-card-back'>
                        <div className='project-title'>
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className='project-links'>
                            <a href={this.props.github} target="blank">
                            <button className='github-link'></button>
                            </a>
                            <a href={this.props.live} target="blank">VIEW IT LIVE</a>
                        </div>
                        <div className='project-text'>
                            <p>{this.props.text}</p>
                        </div>
                        <div className='project-stack'>
                            <img src={this.props.stackURL} alt={`${this.props.title} stack`}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}