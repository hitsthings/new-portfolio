import React from 'react';
import ExperienceCard from './experience-card';
import './experience.css';

export default class Experience extends React.Component{

    render(){
        let arts = <ArtsConnect />
        let tech = <StanTech />
        return(
            <div className='container'>
                <div className='card-wrapper'>
                    <ExperienceCard
                        logo={require('../assets/logo-white.png')}
                        logoAlt='Artist Connect'
                        image={require('../assets/startup-weekend.png')}
                        title='1st Place Startup Weekend'
                        content={arts}
                    />
                    <ExperienceCard 
                        logo={require('../assets/stantech-logo.png')}
                        logoAlt='StanTech'
                        title='Complete Site Redesign'
                        content={tech}
                    />
                    <ExperienceCard 
                        logo={require('../assets/ck-logo.png')}
                        logoAlt='Caren Keyes original portfolio'
                        title='Original Portfolio Site'
                    />
                    <ExperienceCard 
                        logo={require('../assets/rentartstufflogo2.png')}
                        logoAlt='Rent Art Stuff'
                        title='Rent Art Stuff MVP'
                    />

                </div>
            </div>
        )
    }
}

const ArtsConnect = () => {
    return(
        <div className='arts-connect expanded-content'>
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   
                </p>
                <p>
                Vel pharetra vel turpis nunc eget lorem. Malesuada fames ac turpis egestas sed tempus urna. Iaculis nunc sed augue lacus. Massa enim nec dui nunc mattis enim ut tellus elementum.
                </p>
                <div className='card-links'>
                    <p><a href='https://www.reviewjournal.com/business/entrepreneurs/artist-connect-takes-first-place-at-startup-weekend-las-vegas-2018-1531226/' target='_blank'>View the article</a></p>
                    <p><a href='http://www.artistconnect.co/' target='_blank'>See the prototype</a></p>
                </div>
            </div>
        </div>
    )
}

const StanTechTop = () => {
    return(
        <div className='stantech-top'>
            <div class='plant-animation'></div>
        </div>
    )
}

const StanTech = () => {
    return(
        <div className='stan-tech expanded-content'>
            <div>
                <p>I've been asked to do a complete redesign of the 
                    outdated and verbose StanTech website. 
                </p>
                <p>
                    The owner left me with little direction, aside from the statement,
                    "Make it compelling" so I've been working on different animation techniques.
                    Two of the techniques I've tried are demoed in the link
                </p>
            </div>
            <div className='card-links'>
                    <p><a href='' target='_blank'>View the demo</a></p>
                    <p><a href='' target='_blank'>Code repository</a></p>
                </div>
        </div>
    )
}