'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.js`

export default function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <div className="min-h-screen pt-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
      <main className="container mx-auto px-6 py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">My Resume</h1>
        <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
          <Document
            file="CV.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex justify-center"
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-500 transition duration-300"
            >
              Previous
            </button>
            <p className="text-gray-300">
              Page {pageNumber} of {numPages}
            </p>
            <button
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={pageNumber >= (numPages || 0)}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-500 transition duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

