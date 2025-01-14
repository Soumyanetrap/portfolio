import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import projectConfig from '../../assets/configs/projectConfig';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            
            {/* Display Website Projects */}
            <section className="projects-grid">
                <h2>Websites</h2>
                {
                    projectConfig.website.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </section>
            <section className="projects-grid">
                <h2>AI Projects</h2>
                {
                    projectConfig.ai.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </section>
        </div>
    );
};

export default Projects;
