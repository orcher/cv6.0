import React from 'react'
import './education.css'
import logo from './logo.svg'

const Edu = (props) => {
    return(
        <div className='edu-box'>
            <div className='edu-logo-box'><img src={props.logo} alt='logo' /></div>
            <div className='edu-text-box'>
                <h2>{props.school_name}</h2>
                <h3>{props.faculty}</h3>
                <h4>{props.spec}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

const Education = () => {
    const renderContent = () => {
        return(
            <div className='education-main-box'>
                <h1 className='education-title'>lksdf sdflkjlsk</h1>
                <div className='education-box'>
                    <Edu 
                        logo={logo}
                        school_name='aldkjsalsd'
                        faculty='asdas asda'
                        spec='ldasf sjkdhaf'
                        text='Id reprehenderit eu exercitation irure deserunt et sit quis ea occaecat aliquip ex Lorem. Sunt occaecat aliquip ex ipsum ut ipsum cupidatat nisi ad velit deserunt. Esse occaecat ad non anim ipsum qui et id sit fugiat occaecat.
                            Eiusmod sunt esse et Lorem aliquip. Reprehenderit quis ullamco cupidatat cupidatat elit nisi aute enim. Quis cupidatat culpa eu do est laborum veniam qui laborum reprehenderit. Amet exercitation culpa nostrud irure labore ullamco excepteur elit non ullamco id.
                            Qui aliqua officia nisi velit consectetur ad mollit ut nisi esse voluptate. Dolor aute sint pariatur duis eu. Magna dolor ullamco mollit ex laboris dolor. Non do esse dolor laborum ex fugiat irure dolor nisi ut laborum elit qui minim.'
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