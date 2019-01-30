import React from 'react';
import ExperienceCard from './experience-card';
import './experience.css';

export default class Experience extends React.Component{

    render(){
        let arts = <ArtsConnect />
        let tech = <StanTech />
        let techIntro = <StanTechTop />
        let portfolio = <Portfolio />
        let rent = <ArtStuff />
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
                        topContent={techIntro}
                        content={tech}
                    />
                    <ExperienceCard 
                        logo={require('../assets/ck-logo.png')}
                        logoAlt='Caren Keyes original portfolio'
                        title='Original Portfolio Site'
                        image={require('../assets/portfolio.png')}
                        logoAlt='original portfolio website'
                        content={portfolio}
                    />
                    <ExperienceCard 
                        logo={require('../assets/rentartstufflogo2.png')}
                        logoAlt='Rent Art Stuff'
                        title='Rent Art Stuff MVP'
                        image={require('../assets/artstuff.png')}
                        content={rent}
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
                I had the opportunity to be the only developer on an amazing team or artists and entrepreneurs.                </p>
                <p>
                Over about two days, I built out a demo of our space and gear sharing platform for all kinds of artists.                 </p>
                <div className='card-links'>
                    <p><a href='https://www.reviewjournal.com/business/entrepreneurs/artist-connect-takes-first-place-at-startup-weekend-las-vegas-2018-1531226/' target='_blank'>NEWS ARTICLE</a></p>
                    <p><a href='http://www.artistconnect.co/' target='_blank'>PROTOTYPE</a></p>
                </div>
            </div>
        </div>
    )
}

const StanTechTop = () => {
    return(
        <div className='stantech-top'>
            <div className='plant-animation'></div>
        </div>
    )
}

const StanTech = () => {
    return(
        <div className='stan-tech expanded-content'>
            <div>
                <p>I’ve been asked to do a complete redesign of the StanTech website. The commission is to “make it pop.”
                </p>
                <p>
                With that in mind, I am currently prototyping a series of animations to use on the landing page. The rest of the site will be themed off the initial design. 
                </p>
            </div>
            <div className='card-links'>
                <p><a href='https://carenelizabeth.github.io/stantech-ideas/' target='_blank'>IDEA DEMO</a></p>
                <p><a href='https://github.com/Carenelizabeth/stantech-ideas' target='_blank'>RESPOSITORY</a></p>
            </div>
        </div>
    )
}

const Portfolio = () => {
    return(
        <div className='old-portfolio expanded-content'>
            <div>
                <p>
                This was my original portfolio site.  
                </p>
                <p>
                The design is subdued, but I used the opportunity to optimize for responsive design. The header images change and move responsively to match device screens.    
                </p>
            </div>
            <div className='card-links'>
                <p><a href='https://carenelizabeth.github.io/my-portfolio/' target='_blank'>WEBSITE</a></p>
                <p><a href='https://github.com/Carenelizabeth/my-portfolio' target='_blank'>RESPOSITORY</a></p>
            </div>
        </div>
    )
}

const ArtStuff = () => {
    return(
        <div className='rent-stuff expanded-content'>
            <div>
                <p>
                I am currently working on a full-featured size for the company that emerged from startup weekend using Mongo, Express, React and Node.  
                </p>
                <p>Completed features include a multi-step form for uploading listings and complex user profiles. Currently working on scheduling and reservation systems. </p>
            </div>
            <div className='card-links'>
                <p><a href='https://github.com/Carenelizabeth/arts-client' target='_blank'>CLIENT-SIDE RESPOSITORY</a></p>
            </div>
        </div>
    )
}