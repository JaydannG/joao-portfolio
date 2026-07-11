"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Self-hosted worker copied from node_modules/pdfjs-dist/build/pdf.worker.min.mjs
// (see public/pdf.worker.min.mjs) — re-copy it if the react-pdf/pdfjs-dist
// version is ever bumped, since the worker must match the library version.
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

type PdfDocumentProps = {
  pdfPath: string;
};

function FallbackLink({ pdfPath, message }: { pdfPath: string; message: string }) {
  return (
    <div className="flex h-[70vh] min-h-[480px] flex-col items-center justify-center gap-4 p-8 text-center text-foreground-muted">
      <p>{message}</p>
      <a
        href={pdfPath}
        className="text-accent underline underline-offset-4 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Open the resume PDF directly
      </a>
    </div>
  );
}

export default function PdfDocument({ pdfPath }: PdfDocumentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [failedToLoad, setFailedToLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setContainerWidth(width);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (failedToLoad) {
    return <FallbackLink pdfPath={pdfPath} message="Your browser couldn't load the embedded PDF." />;
  }

  return (
    <div
      ref={containerRef}
      aria-label="Embedded resume PDF"
      className="w-full border border-border-subtle bg-background-elevated"
    >
      <Document
        file={pdfPath}
        onLoadSuccess={(pdf) => setNumPages(pdf.numPages)}
        onLoadError={() => setFailedToLoad(true)}
        loading={
          <div className="flex h-[70vh] min-h-[480px] items-center justify-center text-foreground-muted">
            Loading resume&hellip;
          </div>
        }
        error={<FallbackLink pdfPath={pdfPath} message="Your browser couldn't load the embedded PDF." />}
        className="flex flex-col items-center gap-4 p-2 sm:p-4"
      >
        {numPages &&
          containerWidth > 0 &&
          Array.from({ length: numPages }, (_, index) => (
            <Page key={index} pageNumber={index + 1} width={containerWidth - 16} />
          ))}
      </Document>
    </div>
  );
}
