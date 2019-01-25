import React from 'react';

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
        if(this.state.opener === true){
            headerContent = <Opener />
        }else {headerContent = <Intro />}
        if(this.state.animation === true){
            animationContent = <Swoosh />
        }else {animationContent = null}
        return(
            <header>
                <div className='content-wrapper'>
                    {headerContent}
                    {animationContent}
                </div>
                <div className='header-buttons'>
                   <h2>Header buttons</h2>
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