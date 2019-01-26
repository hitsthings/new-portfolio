import React from 'react';
import ExperienceCard from './experience-card';
import './experience.css';

export default class Experience extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='card-wrapper'>
                    <ExperienceCard className={1}/>
                    <ExperienceCard className={2}/>
                    <ExperienceCard className={3}/>
                    <ExperienceCard className={4}/>
                </div>
            </div>
        )
    }
}

