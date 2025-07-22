import React from 'react';

const Badge = ({ text, className = '' }) => {
  return (
    <p className={`text-[14px] bg-[#282828] text-[#F9F9F9] rounded-full p-2 max-w-[120px] text-center ${className}`}>
      {text}
    </p>
  );
};

export default Badge;
