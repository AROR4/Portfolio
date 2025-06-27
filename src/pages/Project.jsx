import React from 'react';
import { ProjectCard } from '../components/ui/Card';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="bg-[#111010] py-16 px-4 sm:px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">My Work</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            A curated collection of my best work — blending design, functionality, and impact.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.tech.join(' • ')}
              image={project.images[0]}
              link={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
