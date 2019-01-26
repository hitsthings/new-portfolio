import React from 'react';

export default class ExperienceCard extends React.Component{
    constructor(){
        super()
        this.state = {
            expanded: false,
        }
    }

    toggleExpand = () => {
        console.log('toggle');
        this.setState({expanded: !this.state.expanded})
    }

    render(){
        let info;
        if(this.state.expanded === true){
            info = <ExpandedCard /> 
        }else{ info = <ClosedCard />}
        return(
            <div className='experience-card-container'>
                <div className={`basic-card card-${this.props.className}`}
                >
                    <div className='card-topper' />
                    {info}
                </div>
            </div>
        )
    }
}

const ClosedCard = (props) => {
    return(
        <div className='card-closed'></div>
    )
}

const ExpandedCard = (props) => {
    return(
        <div className='card-info'></div>
    )
}