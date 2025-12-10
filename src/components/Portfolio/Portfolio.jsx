import React, { useState, useEffect } from 'react';

// Use placeholder images for now - replace with your actual images
const portfolioImages = [
  { id: 1, src: './src/assets/cake.png', title: 'Cake' },
  { id: 2, src: './src/assets/cabin.png', title: 'Cabin' },
  { id: 3, src: './src/assets/circus.png', title: 'Circus' },
  { id: 4, src: './src/assets/game.png', title: 'Game' },
  { id: 5, src: './src/assets/safe.png', title: 'Safe' },
  { id: 6, src: './src/assets/submarine.png', title: 'Submarine' },
];

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioImages.length) % portfolioImages.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <section style={{
      padding: '80px 0',
      textAlign: 'center',
      marginTop: '60px'
    }}>
      <div className="container">
        <h2 style={{
          fontSize: '36px',
          marginBottom: '30px',
          color: '#2c3e50'
        }}>PORTFOLIO COMPONENT</h2>
        
        {/* Portfolio Grid - 3 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginTop: '50px'
        }}>
          {portfolioImages.map((image, index) => (
            <div 
              key={image.id}
              onClick={() => openLightbox(index)}
              style={{
                cursor: 'pointer',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img 
                src={image.src} 
                alt={image.title}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isOpen && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px'
            }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '40px',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1001
              }}
            >
              &times;
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: 'white',
                fontSize: '30px',
                cursor: 'pointer',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1001
              }}
            >
              ‹
            </button>

            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '80%',
                maxHeight: '80vh',
                position: 'relative'
              }}
            >
              <img
                src={portfolioImages[currentIndex].src}
                alt={portfolioImages[currentIndex].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '4px'
                }}
              />
              <div style={{
                color: 'white',
                textAlign: 'center',
                marginTop: '15px',
                fontSize: '18px'
              }}>
                {portfolioImages[currentIndex].title}
                <div style={{
                  fontSize: '16px',
                  color: '#aaa',
                  marginTop: '5px'
                }}>
                  {currentIndex + 1} / {portfolioImages.length}
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: 'white',
                fontSize: '30px',
                cursor: 'pointer',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1001
              }}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;