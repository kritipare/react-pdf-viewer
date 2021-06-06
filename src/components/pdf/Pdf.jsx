import { Button } from '@material-ui/core';
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

  const onPageChange = (offset) => {
    setCurrentPage(currentPage + offset);
  };

  const onPrevious = () => {
    onPageChange(-1);
  };

  const onNext = () => {
    onPageChange(1);
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
      <Button onClick={() => onPrevious()} disabled={currentPage <= 1}>
        Previous
      </Button>
      <Button onClick={() => onNext()} disabled={currentPage >= numPages}>
        Next
      </Button>
      Page {currentPage || '--'} of {numPages || '--'}
    </div>
  )
}

export default Pdf;
