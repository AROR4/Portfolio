import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Throttle function
function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

/**
 * @param {{ children: React.ReactNode, className?: string, hover?: boolean }} props
 */
const Card = ({ children, className = '', hover = true }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;
      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={hover ? onMouseMove : undefined}
      onMouseLeave={hover ? onMouseLeave : undefined}
      style={{
        transform: hover
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          : undefined,
        transition: 'transform 0.4s ease',
        background: 'linear-gradient(145deg, #252525, #1a1a1a)', 
        borderRadius: '1.5rem',
        border: '1px solid #2e2e2e',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}

      className={`overflow-hidden ${hover ? 'transition-transform' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

const LogoCard = ({ children, className = '', hover = true }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;
      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={hover ? onMouseMove : undefined}
      onMouseLeave={hover ? onMouseLeave : undefined}
      style={{
        transform: hover
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          : undefined,
        transition: 'transform 0.4s ease',
        borderRadius: '1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}

      className={`overflow-hidden ${hover ? 'transition-transform' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * @param {{ image: string, title: string, category: string, link: string }} props
 */
const ProjectCard = ({ image, title, category, link }) => {
  return (
    <Link to={link} className="block">
      <Card className="group cursor-pointer">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-400 mb-2">{category}</p>
          <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
        </div>
      </Card>
    </Link>
  );
};

export default Card;
export { ProjectCard ,LogoCard};
