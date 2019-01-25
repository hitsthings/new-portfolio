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
                />
            </Link>
            <Link to='/projects'>
                <NavButton 
                    class='nav2'
                    label='Projects'
                />
            </Link>
            <Link to='/experience'>
                <NavButton 
                    class='nav3'
                    label='Experience'
                />
            </Link>
            <Link to='/contact'>
                <NavButton 
                    class='nav4'
                    label='Contact'
                />
            </Link>
        </div>
    )
}

const NavButton = (props) => {
    return(
        <div className={`nav-button ${props.class}`}>
            <button type='button' className='button'>{props.label}</button>
        </div>
    )
}