import React, { Component } from 'react';
import Intro from './intro'
import NavBar from './nav_bar';
import Education from './education'
import Projects from './projects'
import Experience2 from './experience2'
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
                    <Experience2 />
                </div>
            </div>
        );
    }
}

export default App;
