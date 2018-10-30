import React from 'react'
import './intro.css'
import photo from './res/photo.png';
import linkedin from './res/linkedin-brands.svg';
import gmail from './res/envelope-solid.svg';
import github from './res/github-brands.svg';
import phone from './res/mobile-alt-solid.svg';

const Contacts = () => {
    return (
        <div className='contact-box'>
            <div className="contact-item">
                <a href='tel:+447541733940'>
                    <img className='contact-icon' src={phone} alt='logo' />
                </a>
            </div>
            <div className="contact-item">
                <a href='mailto:domanski.k.a@gmail.com'>
                    <img className='contact-icon' src={gmail} alt='logo' />
                </a>
            </div>
            <div className="contact-item">
                <a href='https://github.com/orcher'>
                    <img className='contact-icon' src={github} alt='logo' />
                </a>
            </div>
            <div className="contact-item">
                <a href='https://www.linkedin.com/in/krzysztof-domanski-49bb638a'>
                    <img className='contact-icon' src={linkedin} alt='logo' />
                </a>
            </div>
        </div>
    )
}

const Intro = () => {
    const renderContent = () => {
        return(
            <div className='intro-main-box' id='intro'>
                <div className='intro-info-box'>
                    <div className='intro-img-box'>
                        <img src={photo} alt='photo' />
                    </div>
                    <div className='intro-details-box'>
                        <div className='name-box'><h1>Krzysztof Domanski</h1></div>
                        <div className='position-box'><h2>Aspiring Web Developer</h2></div>
                        <Contacts />
                    </div>
                </div>
                <div className='about-box'>
                    I am developer with experience in all sort of technologies and industries ranging from embedded development
                    on Linux platform for automotive industry to desktop applications and UI design. Recently I have been working
                    on web development using mostly ASP .Net and found it very interesting. I love to learn new technologies and
                    diving into challenges.
                </div>
            </div>
        )
    }

    return (
        renderContent()
    )
}

export default Intro