import React from 'react';
import { ProjectCard } from '../components/ui/Card';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="bg-[#111010] min-w-[calc(100vh-80px)]  py-15 px-55 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
       <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">My Work</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            A curated collection of my best work — blending design, functionality, and impact.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
