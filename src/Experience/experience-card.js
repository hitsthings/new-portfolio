import React from 'react';

export default class ExperienceCard extends React.Component{
    constructor(){
        super()
        this.state = {
            expanded: false,
        }
    }

    toggleState = () => {
        this.setState({expanded: !this.state.expanded})
    }

    render(){
        let expand = this.state.expanded? <Expanded />: null;
        return(
            <div className='outside-wrapper'
                    onMouseEnter={this.toggleState}
                    onMouseLeave={this.toggleState}>
                <div className='experience-card-container'>
                    <div className='card-topper'></div>
                    <div className='card-intro'></div>
                </div>
                {expand}
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

