import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './PdfPage.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const titlesMap = {
  'memoirfinal.pdf': 'Memoir Final',
  'evaluationfinal.pdf': 'Evaluation Final',
  'exploratoryfinal.pdf': 'Exploratory Final',
  'lab1.pdf': 'Lab 1: Who Is Malala?',
  'lab2.pdf': 'Lab 2: The Carmudgeon Show, Ep. 129',
  'lab4.pdf': 'Lab 4: Trump: The Art of the Deal',
  // Add more titles as needed
};

const pdfSummaries = {
  'memoirfinal.pdf': 'A memoir regarding prior experiences with higher education, and how I fell very short of even my own expectations. I feel that this was well written, if a little bit too surface-level & failed to discuss some underlying issues at the time. If I were to approach the assignment differently, I may have adjusted some wording regarding my thoughts & feelings at the time, and used some more potent terms. ',
  'evaluationfinal.pdf': 'An evaluation covering the video games Halo 3: ODST. My only gripe is that I wish I could have written more about the game & all of its nuances and intricate details.',
  'exploratoryfinal.pdf': 'An exploratory essay covering the science & psychology of colors regarding the human mind. Although I was always interested in this topic, I feel that I may have brushed over too many of the finer details regarding this topic, and that I failed to cover some of the more interesting interactions of our mind and colors.',
  'lab1.pdf': 'A lab report on a short memoir written by Malala Yousafzai, regarding her experiences as a woman trying to get an education in a country where women going to school is not generally accepted. I covered each article of discussion to the best of my abilities, given the limited word count we are allowed to utilize in our labs (500 word limit.) There were some details that required omission due to the length requirement that I wish could have remained.',
  'lab2.pdf': 'A lab report on a podcast by Jason Cammisa & Derek Tam-Scott regarding the state of the automotive industry, particularly begrudging the current landscape of retro-futurism, and the common complaint that cars just "are not build like they used to be built." Due to my unfamiliarity with the format, I seldom wrote in greater detail about the podcast, rather giving basic information that could give the viewer a partial picture on what watching this particular episode was like. With hindsight, I would have preferred to write more about the show, and cover some of the points made by the hosts in greater detail. ',
  'lab4.pdf': 'A lab report on a book written by Donald Trump, former President of the United States and a fairly controversial figure. Despite Trumps numerous controversies, I feel that I covered the finer points of the book fairly well. I would have liked to read deeper have written more about some of the details Trump describes, but that 500-word limit struck again.'
};

const PdfPage = () => {
  let { pdfName } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(2);
  const [opacity, setOpacity] = useState(0);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(1), 100);
    return () => clearTimeout(timeout);
  }, []);

  const title = titlesMap[pdfName] || 'PDF Viewer';

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const toggleSummary = () => {
    setIsSummaryExpanded(!isSummaryExpanded);
};

  const pdfPath = `/assets/pdfs/${pdfName}`;

  return (
    <div className="pdf-viewer-container" style={{ opacity }}>
      <h1 onClick={toggleSummary} style={{ cursor: 'pointer' }}   className={isSummaryExpanded ? 'h1-solid' : 'h1-pulse'}>{title}</h1>
      <div className={`pdf-summary ${isSummaryExpanded ? 'expanded' : ''}`}>
        {isSummaryExpanded && (pdfSummaries[pdfName] || "Summary not available.")}
      </div>
      <Document
        className="pdf-document"
        file={pdfPath}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error('Error while loading document:', error.message)}
      >
        {Array.from({ length: numPages }, (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} renderTextLayer={false} />
        ))}
      </Document>
    </div>
  );
};

export default PdfPage;