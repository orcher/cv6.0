import React, {Component} from 'react'
import './projects.css'
import github from './res/github-brands.svg';
import TicTacToeGame from './tictactoe/index'
import MinesGame from './mines/App'
import ccphoto from './res/currency-checker.png'


class Project extends Component {
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

    getImage = () => {
        if(this.props.image !== null && this.props.image !== undefined) {
            return <img src={this.props.image} alt='proj_img' />
        } else {
            return null
        }
    }

    getContent = () => {
        if(!this.state.expanded){
            return <p className='proj-desc-box'>{this.props.desc}</p>
        } else {
            return <div className='proj-cont-box'>{this.props.cont}</div>
        }
    }

    getButton = () => {
        if(this.props.cont !== null && this.props.cont !== undefined) {
            return <button className='project-btn' onClick={() => this.handleClick()}>{this.state.expanded ? 'Shrink' : 'Expand'}</button>
        } else {
            return null
        }
    }

    render() {
        return(
            <div className={this.state.expanded ? 'project-box-selected' : 'project-box'} id={this.props.title}>
                <h1>{this.props.title}</h1>
                {this.getImage()}
                {this.getContent()}
                <div className='project-links-container'>
                    <img src={github} className="project-links-icon" alt="github" />
                    <div className='contact-item-info'>
                        <a href={this.props.code} >Code</a> available on GitHub.
                    </div>
                </div>
                {this.getButton()}
            </div>
        )
    }
}

const Projects = () => {
    const renderContent = () => {
        return(
            <div className='projects-main-box' id='proj'>
                <h1 className='projects-title'>Projects</h1>
                <div className='projects-box'>
                    <Project 
                        title='TicTacToe'
                        desc={<span>There's no better way to learn new language (in this case <b>React</b>) then writing a game. In this case 
                            I started with TicTacToe.</span>}
                        cont={<TicTacToeGame />}
                        code='https://github.com/orcher/tic-tac-toe'
                    />
                    <Project 
                        title='Mines'
                        desc={<span>My second atempt in writing a little game in order to learn some basics of React. Enjoy!</span>}
                        cont={<MinesGame />}
                        code='https://github.com/orcher/mines'
                        page='https://orcher.github.io/mines/'
                    />
                    <Project 
                        title='CurrencyChecker'
                        desc={<span>Currency Chacker is an app that allows you to check currency exchange rate.
                            Porpous of this project was to practice fetching data from external API (using NodeJS for back-end).
                            No fancy UI there though :)</span>}
                        image={ccphoto}
                        code='https://github.com/orcher/currency-check'
                    />
                </div>
            </div>
        )
    }

    return (
        renderContent()
    )
}

export default Projects