import React from 'react';

const Marquee = ({ text }) => {
  return (
    <div className="marquee-container mt-1">
      <div className="marquee-text fw-bolder py-1">{text}</div>
    </div>
  );
};

export default Marquee;
