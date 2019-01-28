import React from 'react';
import './contact.css';

export default function Contact(props){
    return(
        <div className='contact-wrapper container'>
            <h3>Get in Touch</h3>
            <p>Do you have a problem that I can solve? Just want to chat?</p>
            <div className='contact-buttons'>
                <a href='https://github.com/Carenelizabeth' target='_blank'><button className='github-button'></button></a>
                <a href='https://www.linkedin.com/in/caren-keyes-5595b130/' target='_blank'><button className='linked-button'></button></a>
                <a href='https://twitter.com/caren_keyes' target='_blank'><button className='twitter-button'></button></a>
                <a href='mailto:Caren Keyes<cejkeye@gmail.com>' target='_blank'><button className='email-button'></button></a>
            </div>
        </div>
    )
}