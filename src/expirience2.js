import React, {Component} from 'react'
import './expirience2.css'
import logo from './logo.svg'

class Exp2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            expanded: false,
        }
    }

    handleClick = () => {
        this.setState({
            expanded: !this.state.expanded,
        })
    }

    render() {
        return(
            <div className='exp-box'>
                <div className='exp-logo-box' onClick={() => this.handleClick()}><img src={this.props.logo} alt='logo' /></div>
                <div className={this.state.expanded ? 'exp-text-box-selected' : 'exp-text-box'}>
                    <h2>{this.props.header}</h2>
                    <h3>{this.props.position}</h3>
                    <h4>{this.props.time}</h4>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

const Expirience2 = () => {
    const renderContent = () => {
        return(
            <div className='expirience-main-box' id='exp'>
                <h1 className='exp-title'>lksdf sdflkjlsk</h1>
                <div className='expirience-box'>
                    <Exp2 
                        logo={logo}
                        header='aldkjsalsd'
                        position='asdas asda'
                        time='ldasf-sjkdhaf'
                        text='Id reprehenderit eu exercitation irure deserunt et sit quis ea occaecat aliquip ex Lorem. Sunt occaecat aliquip ex ipsum ut ipsum cupidatat nisi ad velit deserunt. Esse occaecat ad non anim ipsum qui et id sit fugiat occaecat.
                            Eiusmod sunt esse et Lorem aliquip. Reprehenderit quis ullamco cupidatat cupidatat elit nisi aute enim. Quis cupidatat culpa eu do est laborum veniam qui laborum reprehenderit. Amet exercitation culpa nostrud irure labore ullamco excepteur elit non ullamco id.
                            Qui aliqua officia nisi velit consectetur ad mollit ut nisi esse voluptate. Dolor aute sint pariatur duis eu. Magna dolor ullamco mollit ex laboris dolor. Non do esse dolor laborum ex fugiat irure dolor nisi ut laborum elit qui minim.'
                    />
                    <Exp2 
                        logo={logo}
                        header='aldkjsalsd'
                        position='asdas asda'
                        time='ldasf-sjkdhaf'
                        text='Id reprehenderit eu exercitation irure deserunt et sit quis ea occaecat aliquip ex Lorem. Sunt occaecat aliquip ex ipsum ut ipsum cupidatat nisi ad velit deserunt. Esse occaecat ad non anim ipsum qui et id sit fugiat occaecat.
                            Eiusmod sunt esse et Lorem aliquip. Reprehenderit quis ullamco cupidatat cupidatat elit nisi aute enim. Quis cupidatat culpa eu do est laborum veniam qui laborum reprehenderit. Amet exercitation culpa nostrud irure labore ullamco excepteur elit non ullamco id.
                            Qui aliqua officia nisi velit consectetur ad mollit ut nisi esse voluptate. Dolor aute sint pariatur duis eu. Magna dolor ullamco mollit ex laboris dolor. Non do esse dolor laborum ex fugiat irure dolor nisi ut laborum elit qui minim.'
                    />
                    <Exp2
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

export default Expirience2