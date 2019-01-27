import React from 'react';
import Navigation from '../Navigation/navigation';

export default class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            opener: true,
            animation: false,
        }
    }

    componentDidMount(){
        this.changeContent()
    }

    changeContent = () => {
        setTimeout(
            function() {
                this.setState({opener: false});
            }
            .bind(this),
            1950
        );
        setTimeout(
            function() {
                this.setState({animation: true});
            }
            .bind(this),
            800
        );
        setTimeout(
            function() {
                this.setState({animation: false});
            }
            .bind(this),
            3000
        );
        setTimeout(
            function() {
                this.setState({opener: null});
            }
            .bind(this),
            2000
        );
    }

    render(){
        let headerContent;
        let animationContent;
        if(this.state.opener === true){
            headerContent = <Opener />
        }else if(this.state.opener === false){
            headerContent = null
        }else if(this.state.opener === null){
            headerContent = <Intro />
        }
        if(this.state.animation === true){
            animationContent = <Swoosh />
        }else {animationContent = null}
        return(
            <header>
                <div className='header-wrapper'>
                    <div className='content-wrapper'>
                        {headerContent}
                        {animationContent}
                    </div>
                </div>
                <div className='header-navigation'>
                   <Navigation {...this.props}/>
                </div>
            </header>
        )
    }
}

const Opener = (props) => {
    return(
        <div className='header-content'>
            <h1>Hi, I'm Caren</h1>
        </div>
    )
}

const Swoosh = (props) => {
    return(
        <div className='swoosh-animation header-content'></div>
    )
}

const Intro = (props) => {
    return(
        <div className='header-content'>
            <h2>From design to development</h2>
            <h2>I make things happen</h2>
        </div>
    )
}