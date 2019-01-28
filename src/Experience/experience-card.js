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

    expandCard = () => {
        this.setState({expanded: true})
    }

    closeCard = () => {
        this.setState({expanded: false})
    }

    render(){
        let expand = this.state.expanded? <Expanded {...this.props}/>: null;
        return(
            <div className='outside-wrapper'
                    onMouseEnter={this.expandCard}
                    onMouseLeave={this.closeCard}
                    onClick={this.toggleState}
            >
                <div className='experience-card-container'>
                    <div className='card-topper'>
                        <img src={this.props.logo} alt={this.props.logoAlt} />
                    </div>
                    <div className='card-intro'>
                        <img src={this.props.image} />
                        <div className='card-title'>
                            <h3>{this.props.title}</h3>
                        </div>
                    </div>
                </div>
                {expand}
            </div>
        )
    }
}


const Expanded = (props) => {
    return(
        <div className='expanded-card'>
            <div className='expanded-card-front card-section'>
            </div>
            <div className='expanded-card-back card-section'>
                {props.content}
            </div>
        </div>
    )
}



