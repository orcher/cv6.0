import React, {Component} from 'react'
import './projects.css'

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
            return <p>{this.props.desc}</p>
        } else {
            return <div className='proj-cont-box'>{this.props.cont}</div>
        }
    }

    render() {
        return(
            <div className={this.state.expanded ? 'project-box-selected' : 'project-box'}>
                <h2>{this.props.title}</h2>
                {this.getContent()}
                <button className='project-btn' onClick={() => this.handleClick()}>{this.state.expanded ? 'Shrink' : 'Expand'}</button>
            </div>
        )
    }
}

const Projects = () => {
    const renderContent = () => {
        return(
            <div className='projects-main-box'>
                <h1 className='projects-title'>lksdf sdflkjlsk</h1>
                <div className='projects-box'>
                    <Project 
                        title='Title'
                        desc='Tempor excepteur voluptate consectetur sit fugiat consectetur.'
                        cont={<h1>Nostrud consectetur Lorem magna do.</h1>}
                    />
                    <Project 
                        title='Title'
                        desc='Tempor excepteur voluptate consectetur sit fugiat consectetur.'
                        cont={<h1>Nostrud consectetur Lorem magna do.</h1>}
                    />
                    <Project 
                        title='Title'
                        desc='Tempor excepteur voluptate consectetur sit fugiat consectetur.'
                        cont={<h1>Nostrud consectetur Lorem magna do.</h1>}
                    />
                    <Project 
                        title='Title'
                        desc='Tempor excepteur voluptate consectetur sit fugiat consectetur.'
                        cont={<h1>Nostrud consectetur Lorem magna do.</h1>}
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