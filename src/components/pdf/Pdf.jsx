import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
// import samplePDF from './git-cheat-sheet-education.pdf';

const Pdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(1);
  };

  return (
    <div>
      <Document
        file='https://education.github.com/git-cheat-sheet-education.pdf'
        // options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={currentPage} />
      </Document>
      Page {currentPage || '--'} of {numPages || '--'}
    </div>
  )
}

export default Pdf;
