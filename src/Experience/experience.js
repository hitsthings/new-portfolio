import React from 'react';
import ExperienceCard from './experience-card';
import './experience.css';

export default class Experience extends React.Component{

    render(){

        return(
            <div className='container'>
                <div className='card-wrapper'>
                    <ExperienceCard

                    />
                    <ExperienceCard 

                    />
                    <ExperienceCard 

                    />
                    <ExperienceCard 

                    />
                </div>
            </div>
        )
    }
}
