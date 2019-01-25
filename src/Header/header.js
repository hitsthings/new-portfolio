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
            1700
        );
        setTimeout(
            function() {
                this.setState({animation: true});
            }
            .bind(this),
            100
        );
        setTimeout(
            function() {
                this.setState({animation: false});
            }
            .bind(this),
            3000
        );
    }

    render(){
        let headerContent;
        let animationContent;
        let navigationContent;
        if(this.state.opener === true){
            headerContent = <Opener />
            navigationContent = null
        }else {
            headerContent = <Intro />
            navigationContent = <Navigation />
        }
        if(this.state.animation === true){
            animationContent = <Swoosh />
        }else {animationContent = null}
        return(
            <header>
                <div className='content-wrapper'>
                    {headerContent}
                    {animationContent}
                </div>
                <div className='header-navigation'>
                   {navigationContent}
                </div>
            </header>
        )
    }
}

const Opener = (props) => {
    return(
        <div className='header-content'>
            <h1>Hello World</h1>
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