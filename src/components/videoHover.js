// src/components/HoverVideo.js
import React, { useRef } from 'react';

const VideoHover = ({ src, alt, width = '100%', height = 'auto' }) => {
  const videoRef = useRef(null);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Optionally reset to the beginning
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      muted
      playsInline
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ cursor: 'pointer', width, height }}
    ></video>
  );
};

export default VideoHover;
