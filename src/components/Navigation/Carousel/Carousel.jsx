import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

const Carousel = ({
  slides,
  enableAutoplay,
  infiniteLooping,
  showIndicators,
  showPlayButton,
  showArrows,
  slideInterval,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(enableAutoplay);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return stopAutoplay; // Cleanup interval on unmount
  }, [isPlaying, currentSlide]);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, slideInterval);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      infiniteLooping ? (prevSlide + 1) % slides.length : Math.min(prevSlide + 1, slides.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      infiniteLooping
        ? (prevSlide - 1 + slides.length) % slides.length
        : Math.max(prevSlide - 1, 0)
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {typeof slide === 'string' ? (
              <img src={slide} alt={`Slide ${index + 1}`} />
            ) : (
              slide
            )}
          </div>
        ))}
      </div>
      {showArrows && (
        <div className="carousel-arrows">
          <button className="arrow left" onClick={prevSlide}>&lt;</button>
          <button className="arrow right" onClick={nextSlide}>&gt;</button>
        </div>
      )}
      {showIndicators && (
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
      {showPlayButton && (
        <button className="carousel-play-button" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      )}
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  ).isRequired,
  enableAutoplay: PropTypes.bool,
  infiniteLooping: PropTypes.bool,
  showIndicators: PropTypes.bool,
  showPlayButton: PropTypes.bool,
  showArrows: PropTypes.bool,
  slideInterval: PropTypes.number,
};

Carousel.defaultProps = {
  enableAutoplay: false,
  infiniteLooping: false,
  showIndicators: true,
  showPlayButton: true,
  showArrows: true,
  slideInterval: 3000,
};

export default Carousel;

