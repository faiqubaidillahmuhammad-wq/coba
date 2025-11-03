import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";

// Worker lokal agar tidak error di CRA + React 19
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PDFViewer({
  fileUrl = "/Form_Rekomendasi_251102115902.pdf",
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPage(n) {
    if (n < 1) return setPageNumber(1);
    if (n > numPages) return setPageNumber(numPages);
    setPageNumber(n);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 dark:bg-slate-900 min-h-screen">
      <div className="flex items-center gap-2">
        <button
          onClick={() => goToPage(pageNumber - 1)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          ‹ Prev
        </button>
        <span className="text-sm">
          Page {pageNumber} / {numPages || "-"}
        </span>
        <button
          onClick={() => goToPage(pageNumber + 1)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Next ›
        </button>
        <button
          onClick={() => setScale((s) => Math.max(0.5, s - 0.25))}
          className="ml-4 px-3 py-1 border rounded hover:bg-gray-100"
        >
          -
        </button>
        <button
          onClick={() => setScale((s) => s + 0.25)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          +
        </button>
      </div>

      <div className="w-full flex justify-center border rounded bg-white p-4">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Loading PDF...</div>}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
    </div>
  );
}
