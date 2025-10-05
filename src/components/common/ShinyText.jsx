import React from 'react';
import './ShinyText.css';

const ShinyText = ({
  text,
  disabled = false,
  speed = 3,
  className = ''
}) => {
  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        '--animation-speed': `${speed}s`
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
