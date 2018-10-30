import React, {Component} from 'react'
import './projects.css'
import github from './res/github-brands.svg';
import arrowTop from './res/arrow-circle-up-solid.svg'
import TicTacToeGame from './tictactoe/index'
import MinesGame from './mines/App'


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

    getContent = () => {
        if(!this.state.expanded){
            return <p className='proj-desc-box'>{this.props.desc}</p>
        } else {
            return <div className='proj-cont-box'>{this.props.cont}</div>
        }
    }

    render() {
        return(
            <div className={this.state.expanded ? 'project-box-selected' : 'project-box'}>
                <h1>{this.props.title}</h1>
                {this.getContent()}
                <button className='project-btn' onClick={() => this.handleClick()}>{this.state.expanded ? 'Shrink' : 'Expand'}</button>
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
                        desc={<span>There's no better way to learn new programming language(in this case <b>React</b>) then use it to write a game, and so I did.
                            As usual for first projects I took a concept from an existing <a href='https://reactjs.org/tutorial/tutorial.html'>tutorial</a> and
                            extended it by few pices of my own.</span>}
                        cont={<TicTacToeGame />}
                    />
                    <Project 
                        title='Mines'
                        desc={<span>My second atempt in writing a little game in order to learn some basics of React. Enjoy!</span>}
                        cont={<MinesGame />}
                    />
                    <Project 
                        title='CurrencyChecker'
                        desc={<span>Currency Chacker is an app that allows you to check currency exchange rate for many different currencies.
                            Porpous of this excercise was to practice fetching data from external API and that's why I didn't focus much on UI at all.
                            This application has front end written in react and back end written in NodeJS.</span>}
                        cont=''
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