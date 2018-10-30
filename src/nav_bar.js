import React from 'react';
import './nav_bar.css';

const NavBar = () => {
    return (
        <div className="nav-box">
            <div className="nav-item"><a href='#intro'>Intro</a></div>
            <div className="nav-item"><a href='#edu'>Education</a></div>
            <div className="nav-item"><a href='#proj'>Projects</a></div>
            <div className="nav-item"><a href='#exp'>Expirience</a></div>
        </div>
    )
}

export default NavBar
