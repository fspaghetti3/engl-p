import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.scss';

const Project = ({ documents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [shadowClass, setShadowClass] = useState('');
  const navigate = useNavigate();

  const changeSlide = (newIndex) => {
    setOpacity(0);
    setShadowClass('shadow-effect');
  
    setTimeout(() => {
      setCurrentIndex(newIndex);
  
      setTimeout(() => {
        setOpacity(1);
        setShadowClass('');
      }, 100);
    }, 500);
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? documents.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === documents.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  const handleNavigate = (pdf) => {
    setOpacity(0);
    setTimeout(() => {
      navigate(`/pdf/${encodeURIComponent(pdf)}`);
    }, 500);
  };


  return (
    <div className="carousel-container">
      <button onClick={goToPrev}>&lt; Prev</button>
      <div
        key={currentIndex}
        className={`carousel-slide ${shadowClass}`}
        style={{ opacity }}
        onClick={() => handleNavigate(documents[currentIndex].pdf)}
      >
        <div className="card-name">{documents[currentIndex].title}</div>
        <img
          src={documents[currentIndex].thumbnail}
          alt={`Document ${documents[currentIndex].id}`}
          className="thumbnail-img"
        />
      </div>
      <button onClick={goToNext}>Next &gt;</button>
    </div>
  );
};

export default Project;