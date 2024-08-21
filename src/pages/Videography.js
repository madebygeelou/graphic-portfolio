// src/App.js
import React from 'react';
import VideoHover from '../components/videoHover';

const Videography = () => {
  return (
    <div className="videos">
      <VideoHover
        src="./assets/conceopt1.mp4" 
        width="300px" 
        height="auto" 
      />
      <VideoHover
        src=""
        width="300px" 
        height="auto" 
      />
      {/* Add more HoverVideo components as needed */}
    </div>
  );
};

export default Videography;
