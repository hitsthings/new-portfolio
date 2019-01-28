import React from 'react';
import './projects.css';
import ProjectCard from './project-card';

const data = [
    {
        title: 'Money Jars',
        live: 'https://money-jars.herokuapp.com/',
        github: 'https://github.com/Carenelizabeth/money-jars-client',
        text: 'I needed a way for my kids to manage their money that was as awesome as the budgeting software that I personally use. I utilized its public API to allow me to add funds on my end while they can get granular with their savings goals on theirs.',
    },
    {
        title: 'Something New',
        live: 'http://somethingnew.carenkeyes.com/',
        github: 'https://github.com/Carenelizabeth/something-new',
        text: 'Have you ever been looking for something new and have no idea where to start? Wouldn’t it be great to read the highest-rated reviews for an area, rather than having to search for a business first? Something New combines data from CityGrid and Google maps to let you do just that.',
    },
    {
        title: 'Family Reunion',
        live: 'https://family-reunion-2018.herokuapp.com/',
        github: 'https://github.com/Carenelizabeth/family-reunion',
        text: 'Sometimes it feels like we spend most of our family get-togethers in a hotel room trying to decide what to do next. Family Reunion was born from a desire for a large group of people to easily decide who wants to do what. One participant posts an activity and others can join in or discuss.',
    }
]

export default function Projects(props){
    return(
        <div className='container projects-wrapper'>
        <ProjectCard
                image={require('../assets/money-jars.png')} 
                alt='screen shot of money jars app'
                title={data[0].title}
                live={data[0].live}
                github={data[0].github}
                text={data[0].text}
                stackURL={require('../assets/money-stack.png')}
            />
            <ProjectCard 
                image={require('../assets/something-new.png')} 
                alt='screen shot of something new app'
                title={data[1].title}
                live={data[1].live}
                github={data[1].github}
                text={data[1].text}
                stackURL={require('../assets/something-stack.png')}
            />            


            <ProjectCard 
                image={require('../assets/family-reunion.png')} 
                alt='screen shot of family reunion app'
                title={data[2].title}
                live={data[2].live}
                github={data[2].github}
                text={data[2].text}
                stackURL={require('../assets/family-stack.png')}
            />
        </div>
    )
}