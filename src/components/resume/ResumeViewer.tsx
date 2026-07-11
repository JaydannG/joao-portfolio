"use client";

import dynamic from "next/dynamic";

// react-pdf renders to <canvas> via pdfjs-dist, which touches browser-only
// APIs (DOMMatrix, etc.) — load it client-only so it never runs during SSR.
const PdfDocument = dynamic(() => import("./PdfDocument"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[70vh] min-h-[480px] w-full items-center justify-center border border-border-subtle bg-background-elevated text-foreground-muted">
      Loading resume&hellip;
    </div>
  ),
});

type ResumeViewerProps = {
  pdfPath: string;
};

export default function ResumeViewer({ pdfPath }: ResumeViewerProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={pdfPath}
          download
          className="inline-flex items-center gap-2 border border-accent px-5 py-2.5 text-sm font-medium tracking-wide text-accent uppercase transition-colors hover:bg-accent hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Download Resume
        </a>
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border-subtle px-5 py-2.5 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:border-foreground-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Open in New Tab
        </a>
      </div>

      <PdfDocument pdfPath={pdfPath} />
    </div>
  );
}
