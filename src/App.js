import React, { Component } from 'react';
import Intro from './intro'
import NavBar from './nav_bar';
import Education from './education'
import Projects from './projects'
import Expirience2 from './expirience2'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="main-box">
                <NavBar />
                <div className="content-box">
                    <Intro />
                    <Education />
                    <Projects />
                    <Expirience2/>
                </div>
            </div>
        );
    }
}

export default App;
