import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation(props){
    return(
        <div>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}