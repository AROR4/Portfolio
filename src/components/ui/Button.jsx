import React from 'react';

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';

  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
  };

  const sizeStyles = {
    sm: 'py-1.5 px-4 text-sm',
    md: 'py-2 px-6 text-base',
    lg: 'py-3 px-8 text-lg'
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
