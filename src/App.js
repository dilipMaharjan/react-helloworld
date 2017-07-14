import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';
class App extends Component {
    constructor() {
        super()
        this.state = {projects: [
                {
                    title: 'Header',
                    category: 'Front End'
                },
                {
                    title: 'Footer',
                    category: 'Front End'
                },
                {
                    title: 'Content',
                    category: 'Front End'
                }
            ]
        }
    }
    render() {
        return (
                <div className="App">
                    <Projects projects={this.state.projects}/>
                </div>

                );
    }
}

export default App;
