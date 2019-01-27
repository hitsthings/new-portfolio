import React from 'react';
import './about.css';

export default function About(props){
    return(
        <div className='about-wrapper container'>
            <div className='about-container'>
                <h3>I'm Caren. Nice to meet you.</h3>
                <p>Once I was a photographer. 
                </p>
                <p>Before that, I was a microbiologist.
                </p>
                <p>Now I explore the final frontier of full-stack web development.
                </p>
                <p>My speciality is MERN stack (Mongo, Express, React, Node.js), but I'm always learning something
                    new. I love to make dreams a reality, every step of the way.
                </p>
            </div>
        </div>
    )
}