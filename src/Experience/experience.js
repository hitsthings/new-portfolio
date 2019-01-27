import React from 'react';
import ExperienceCard from './experience-card';
import './experience.css';

export default class Experience extends React.Component{
    constructor(){
        super()
        this.state = {
            expanded1: true,
            expanded2: false,
            expanded3: false,
            expanded4: false,
        }
    }

    expand1 = () => {
        this.setState({expanded1: true})
    }

    close1 = () => {
        this.setState({expanded1: false})
    }

    expand2 = () => {
        this.setState({expanded2: !this.state.expanded2})
    }

    close2 = () => {
        this.setState({expanded2: false})
    }

    expand3 = () => {
        this.setState({expanded3: !this.state.expanded3})
    }

    close3 = () => {
        this.setState({expanded3: false})
    }

    expand4 = () => {
        this.setState({expanded4: !this.state.expanded4})
    }

    close4 = () => {
        this.setState({expanded4: false})
    }

    render(){
        let expand = <Expanded />

        return(
            <div className='container'>
                <div className='card-wrapper'>
                    <ExperienceCard
                        expand={this.expand1}
                        close={this.close1}
                        expanded={this.state.expanded1? expand: null} 
                    />
                    <ExperienceCard 
                        expand={this.expand2}
                        close={this.close2}
                        expanded={this.state.expanded2? expand: null}
                    />
                    <ExperienceCard 
                        expand={this.expand3}
                        close={this.close3}
                        expanded={this.state.expanded3? expand: null}
                    />
                    <ExperienceCard 
                        expand={this.expand4}
                        close={this.close4}
                        expanded={this.state.expanded4? expand: null}
                    />
                </div>
            </div>
        )
    }
}

const Expanded = () => {
    return(
        <div className='expanded-card'>
            <div className='expanded-card-front card-section'>
                <p>Top</p>
            </div>
            <div className='expanded-card-back card-section'>
                <p>Bottom</p>
            </div>
        </div>
    )
}
