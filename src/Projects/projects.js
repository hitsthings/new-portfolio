import React from 'react';
import './projects.css';
import ProjectCard from './project-card';

export default function Projects(props){
    return(
        <div className='container projects-wrapper'>
            <ProjectCard 
                image={require('../assets/something-new.png')} 
                alt='screen shot of something new app'
            />            
            <ProjectCard
                image={require('../assets/money-jars.png')} 
                alt='screen shot of money jars app'
            />

            <ProjectCard 
                image={require('../assets/family-reunion.png')} 
                alt='screen shot of family reunion app'
            />
        </div>
    )
}