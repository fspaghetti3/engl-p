import React from 'react';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom'; 

const pdfs = [
  { id: 'memoirfinal.pdf', title: 'Memoir Final' },
  { id: 'evaluationfinal.pdf', title: 'Evaluation Final' },
  { id: 'exploratoryfinal.pdf', title: 'Exploratory Final' },
  { id: 'lab1.pdf', title: 'Lab 1'},
  { id: 'lab2.pdf', title: 'Lab 2'},
  { id: 'lab4.pdf', title: 'Lab 4'}
];

function Header({ onFadeStart, onFadeEnd }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    onFadeStart(); // Start fade-out transition
    setTimeout(() => {
      navigate(path);
      onFadeEnd(); // Fade back in after navigation
    }, 500); // Adjust timing to match CSS transition duration
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Frederick Solleder</h1>
      </div>
      <div className="navbar">
        <nav className="navigation">
          <ul>
            <li>
              <button onClick={() => handleNavigate('/')}>Home</button>
            </li>
          </ul>
          <ul className="pdf-buttons">
            {pdfs.map((pdf) => (
              <li key={pdf.id}>
                <button onClick={() => handleNavigate(`/pdf/${pdf.id}`)}>
                  {pdf.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;