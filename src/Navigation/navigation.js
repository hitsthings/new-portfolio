import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.css';

export default function Navigation(props){
    return(
        <div className='nav-panel'>
            <Link to='/about'>
                <NavButton 
                    class='nav1'
                    label='About'
                    onClick={props.setRed}
                />
            </Link>
            <Link to='/'>
                <NavButton 
                    class='nav2'
                    label='Projects'
                    onClick={props.setGreen}
                />
            </Link>
            <Link to='/experience'>
                <NavButton 
                    class='nav3'
                    label='Experience'
                    onClick={props.onClick}
                />
            </Link>
            <Link to='/contact'>
                <NavButton 
                    class='nav4'
                    label='Contact'
                    onClick={props.setBlue}
                />
            </Link>
        </div>
    )
}

const NavButton = (props) => {
    return(
        <div className={`nav-button ${props.class}`}>
            <button type='button' className='button' onClick={props.onClick}>{props.label}</button>
        </div>
    )
}