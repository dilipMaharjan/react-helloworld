import React, { Component } from 'react';
class ProjectItems extends Component {
    render() {
        return (
                <div className="ProjectItems">
                    <li>{this.props.project.title} - {this.props.project.category}</li>
                </div>
                )
    }
}

export default ProjectItems;