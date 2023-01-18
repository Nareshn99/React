import React from 'react';
import './Logo.css';

function Logo() {
    return (
        <div className="logo-body">
            <img
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                alt="Google Icon"
                className='mx-auto my-3'
            />
        </div>
    )
}

export default Logo
