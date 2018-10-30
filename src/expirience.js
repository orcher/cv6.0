import React from 'react'
import './expirience.css'
import logo from './logo.svg'

const Exp = (props) => {
    return(
        <div className='exp-box'>
            <div className='exp-logo-box'><img src={props.logo} alt='logo' /></div>
            <div className='exp-text-box'>
                <h2>{props.header}</h2>
                <h3>{props.position}</h3>
                <h4>{props.time}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

const Expirience = () => {
    const renderContent = () => {
        return(
            <div className='expirience-main-box' id='exp'>
                <h1 className='exp-title'>lksdf sdflkjlsk</h1>
                <div className='expirience-box'>
                    <Exp 
                        logo={logo}
                        header='aldkjsalsd'
                        position='asdas asda'
                        time='ldasf-sjkdhaf'
                        text='Id reprehenderit eu exercitation irure deserunt et sit quis ea occaecat aliquip ex Lorem. Sunt occaecat aliquip ex ipsum ut ipsum cupidatat nisi ad velit deserunt. Esse occaecat ad non anim ipsum qui et id sit fugiat occaecat.
                            Eiusmod sunt esse et Lorem aliquip. Reprehenderit quis ullamco cupidatat cupidatat elit nisi aute enim. Quis cupidatat culpa eu do est laborum veniam qui laborum reprehenderit. Amet exercitation culpa nostrud irure labore ullamco excepteur elit non ullamco id.
                            Qui aliqua officia nisi velit consectetur ad mollit ut nisi esse voluptate. Dolor aute sint pariatur duis eu. Magna dolor ullamco mollit ex laboris dolor. Non do esse dolor laborum ex fugiat irure dolor nisi ut laborum elit qui minim.'
                    />
                    <Exp 
                        logo={logo}
                        header='aldkjsalsd'
                        position='asdas asda'
                        time='ldasf-sjkdhaf'
                        text='Id reprehenderit eu exercitation irure deserunt et sit quis ea occaecat aliquip ex Lorem. Sunt occaecat aliquip ex ipsum ut ipsum cupidatat nisi ad velit deserunt. Esse occaecat ad non anim ipsum qui et id sit fugiat occaecat.
                            Eiusmod sunt esse et Lorem aliquip. Reprehenderit quis ullamco cupidatat cupidatat elit nisi aute enim. Quis cupidatat culpa eu do est laborum veniam qui laborum reprehenderit. Amet exercitation culpa nostrud irure labore ullamco excepteur elit non ullamco id.
                            Qui aliqua officia nisi velit consectetur ad mollit ut nisi esse voluptate. Dolor aute sint pariatur duis eu. Magna dolor ullamco mollit ex laboris dolor. Non do esse dolor laborum ex fugiat irure dolor nisi ut laborum elit qui minim.'
                    />
                    <Exp 
                        logo={logo}
                        header='aldkjsalsd'
                        position='asdas asda'
                        time='ldasf-sjkdhaf'
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

export default Expirience