import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Github } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#111010] text-white flex items-center justify-center">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <section className="min-w-[calc(100vh-80px)]  py-15 px-55 bg-[#111010] text-white">
      <div className="max-w-4xl mx-auto px-6">

        {project.images && project.images.length > 0 && (
          <>
            <div className="mb-6 overflow-x-auto">
              <div className="flex gap-4">
                {project.images.map((img, index) => (
                    <img
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      className=" w-[240px] h-auto rounded-[1.5rem]"
                    />
                
                ))}
              </div>
              <p className="text-center text-sm text-gray-400 mt-3">Screenshots</p>
            </div>
          </>
        )}

        {/* 🧾 Project Info */}
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-indigo-400 mb-4 text-sm">{project.tech.join(' • ')}</p>

        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-8">
          {project.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* 🔗 GitHub Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          <Github size={16} /> View on GitHub
        </a>

        {/* ⬅ Back Link */}
        <div className="mt-6">
          <Link
            to="/works"
            className="text-sm text-indigo-400 hover:underline inline-block"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
