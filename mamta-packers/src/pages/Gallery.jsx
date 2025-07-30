import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Replace with your real image and video URLs
  const images = [
    '/assets/gallary1.jpg',
    '/assets/gallary2.jpg',
    '/assets/gallary3.jpg',
    '/assets/gallary4.jpg',
    '/assets/gallary5.jpg',
    '/assets/gallary6.jpg',
    '/assets/gallary7.jpg',
    '/assets/gallary8.jpg',
  ];

  const videos = [
    'https://www.youtube.com/embed/ScMzIvxBSi4',
    'https://www.youtube.com/embed/tgbNymZ7vqY',
    'https://www.youtube.com/embed/sBws8MSXN7A',
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
  ];

  return (
    <div className="gallery-container">
      <section className="gallery-section">
        <h2 className="section-title">Image Gallery</h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="section-title">Video Gallery</h2>
        <div className="gallery-grid">
          {videos.map((src, index) => (
            <div className="gallery-item" key={index}>
              <iframe
                width="100%"
                height="200"
                src={src}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;