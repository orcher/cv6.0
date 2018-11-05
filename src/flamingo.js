import React, { Component } from 'react'
import './flamingo.css';
import github from './res/github-brands.svg';

class Flamingo extends Component {
    constructor(props){
      super(props)
      this.state = {
        expanded: false,
      }
    }
  
    getExpandButton = () => {
        if (this.props.expandable){
          return (
            <button 
              className='flamingo-exp-btn'
              onClick={() => this.setState({expanded: !this.state.expanded})}
            >
              {this.state.expanded ? '-' : '+'}
            </button>
          )
        } else {
          return null
        }
    }

    getLinks = () => {
      return (
        <div className='flamingo-links-container'>
          <img src={github} className="flamingo-links-icon" alt="github" />
          <div className='flamingo-contact-item-info'>
              <a href={this.props.code} >Code</a> available on GitHub.
          </div>
        </div>
      )
  }
  
    render() {
      return (
        <div className={this.state.expanded ? 'flamingo-main-box-exp' : 'flamingo-main-box'} id={this.props.title}>
          <div className='flamingo-back'>
            <h1>{this.props.title}</h1>
            <div className='flamingo-content'>
              {this.state.expanded ? this.props.content : null}
            </div>
            {this.state.expanded? null : this.getLinks()}
          </div>
          <div className='flamingo-front'>
            <div className='flamingo-text'>
              {this.props.description}
            </div>
            {this.getExpandButton()}
          </div>
        </div>
      )
    }
  }

  export default Flamingo