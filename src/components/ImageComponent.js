// ImageComponent.jsx
import React, { useEffect, useState } from 'react';
import './ImageComponent.css';

const ImageComponent = () => {
  const [imageWidth, setImageWidth] = useState('50vw');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newImageWidth = scrollY === 0 ? '50vw' : '100%';
      setImageWidth(newImageWidth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="image-container" style={{ width: imageWidth }}>
      <img
        src="https://images.prismic.io/zero-cms-disco/ffeceafb-2f56-4f57-8b5f-5c1c566b9a0b_1_Vimeo_FXE_Hero_1_0491-Edit.jpg?auto=compress,format" // Replace with your actual image source
        alt="Your "
        className="image"
      />
    </div>
  );
};

export default ImageComponent;
