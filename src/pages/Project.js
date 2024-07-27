import React from 'react';
import ProjectCard from '../components/ProjectCard';

const project = [
  { title: 'Me Music', description: 'Audio App', link: '#' },
  { title: 'Chat App', description: 'Message App', link: '#' }
];

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      {project.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
