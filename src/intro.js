import React from 'react'
import './intro.css'

const Contacts = () => {
    return (
        <div className='contact-box'>
            <div className="contact-item"><a href='#Item1'><img className='contact-icon' src={require('./logo.svg')} alt='logo' /></a></div>
            <div className="contact-item"><a href='#Item1'><img className='contact-icon'src={require('./logo.svg')} alt='logo' /></a></div>
            <div className="contact-item"><a href='#Item1'><img className='contact-icon'src={require('./logo.svg')} alt='logo' /></a></div>
            <div className="contact-item"><a href='#Item1'><img className='contact-icon'src={require('./logo.svg')} alt='logo' /></a></div>
        </div>
    )
}

const Intro = () => {
    const renderContent = () => {
        return(
            <div className='intro-main-box'>
                <div className='intro-info-box'>
                    <div className='intro-img-box'>
                        <img src={require('./logo.svg')} alt='logo' />
                    </div>
                    <div className='intro-details-box'>
                        <div className='name-box'><h1>lsdkfjl dsklklsjdf</h1></div>
                        <div className='position-box'><h2>lsdkfjl dsklklsjdf</h2></div>
                        <Contacts />
                    </div>
                </div>
                <div className='about-box'>
                    Duis minim ex veniam enim aute proident. Ipsum proident eiusmod et nostrud cillum consectetur sunt duis aliquip laborum irure ipsum reprehenderit. Proident esse ut veniam eiusmod deserunt Lorem voluptate cupidatat laboris.
                    Veniam pariatur consectetur sit aute est laboris nostrud aliqua do nostrud esse. Lorem ad pariatur ipsum nostrud esse cupidatat enim cupidatat sint ullamco. Do Lorem in ea excepteur aliquip reprehenderit mollit dolore ipsum nisi consectetur. In Lorem reprehenderit duis consequat adipisicing ex dolor minim deserunt fugiat do officia do. Incididunt fugiat laboris ipsum aute mollit nulla culpa culpa anim tempor. Reprehenderit id ut do velit aliqua sit dolor dolore laborum est. Enim ad fugiat dolore fugiat eu.
                </div>
            </div>
        )
    }

    return (
        renderContent()
    )
}

export default Intro