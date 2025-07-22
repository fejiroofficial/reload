import React from 'react';

const Button = ({ clickHandler, children, className = '' }) => {
  return (
    <button onClick={clickHandler} className={`px-6 py-2 rounded-md font-medium cursor-pointer text-base ${className}`}>
      {children}
    </button>
  );
};

export default Button;
