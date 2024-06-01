import React from 'react';

import '../style/Header.css';
import logo from '../img/stackline_logo.svg';

export default function Header() {
    return (
        <div className='header-container'>
            <img 
                src={logo} 
                className='logo-img' 
                alt='logo'  
                data-testid='logo-img'
            />
        </div>
    )
}
