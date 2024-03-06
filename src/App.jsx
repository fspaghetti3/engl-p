import React, { useState } from 'react';
import './index.scss';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import Project from './components/project/Project';
import PdfPage from './pages/PdfPage';

function App() {

  const [contentOpacity, setContentOpacity] = useState(1);

  // Callback to start the fade-out transition
  const handleFadeTransitionStart = () => setContentOpacity(0);

  // Callback to end the fade-in transition
  const handleFadeTransitionEnd = () => setContentOpacity(1);
  
  const documents = [
    {
      id: 1,
      thumbnail: '/assets/thumbnails/memoirthumbnail.png',
      pdf: 'memoirfinal.pdf',
      title: 'Memoir Final'
    },
    {
      id: 2,
      thumbnail: '/assets/thumbnails/evaluationthumbnail.png',
      pdf: 'evaluationfinal.pdf',
      title: 'Evaluation Final'
    },
    {
      id: 3,
      thumbnail: '/assets/thumbnails/exploratorythumbnail.png',
      pdf: 'exploratoryfinal.pdf',
      title: 'Exploration Final'
    },
    {
      id: 4,
      thumbnail: '/assets/thumbnails/lab1thumbnail.png',
      pdf: 'lab1.pdf',
      title: 'Lab 1'
    },
    {
      id: 5,
      thumbnail: '/assets/thumbnails/lab2thumbnail.png',
      pdf: 'lab2.pdf',
      title: 'Lab 2'
    },
    {
      id: 6,
      thumbnail: '/assets/thumbnails/lab4thumbnail.png',
      pdf: 'lab4.pdf',
      title: 'Lab 4'
    }
  ];

  return (
    <Router>
      <div className="App">
      <Header
          onFadeStart={handleFadeTransitionStart}
          onFadeEnd={handleFadeTransitionEnd}
        />
      <div style={{ opacity: contentOpacity, transition: 'opacity 0.5s ease' }}>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <Project documents={documents} />
              </>
            } />
            <Route path="/pdf/:pdfName" element={<PdfPage />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;