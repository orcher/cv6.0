import React from 'react'
import './education.css'
import uni_sign from './res/uni_sign.png'

const Edu = (props) => {
    return(
        <div className='edu-box'>
            <div className='edu-logo-box'><img src={props.logo} alt='logo' /></div>
            <div className='edu-text-box'>
                <h2>{props.school_name}</h2>
                <h3>{props.faculty}</h3>
                <h3>{props.spec}</h3>
                <h3>{props.text}</h3>
            </div>
        </div>
    )
}

const Education = () => {
    const renderContent = () => {
        return(
            <div className='education-main-box' id='edu'>
                <h1 className='education-title'>Education</h1>
                <div className='education-box'>
                    <Edu 
                        logo={uni_sign}
                        school_name={<a href='https://pg.edu.pl/'>Gdansk University of Technology</a>}
                        faculty='Electronics, Telecommunications and Computer Science'
                        spec='Control Engineering and Robotics'
                        text='I did my masters in the field of "Intelligent Decision-making Systems" and 
                              gained my MSc dergee in 2011r.'
                    />
                </div>
            </div>
        )
    }

    return (
        renderContent()
    )
}

export default Education