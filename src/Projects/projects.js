import React from 'react';
import './projects.css';
import ProjectCard from './project-card';

export default function Projects(props){
    return(
        <div className='container projects-wrapper'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}