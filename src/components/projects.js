import React, { Component } from 'react';
import ProjectItems from './projectItem'
        class Projects extends Component {
    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(
                    project => {
                        return(
                                <ProjectItems project={project}/>
                                );
                    }

            );
        }
        return (
                <div className="Projects">
                    <h1>Projects</h1>
                    {projectItems}
                </div>
                )
    }
}

export default Projects;
