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

      <object
        data={pdfPath}
        type="application/pdf"
        className="h-[70vh] w-full min-h-[480px] border border-border-subtle bg-background-elevated"
        aria-label="Embedded resume PDF"
      >
        <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center text-foreground-muted">
          <p>Your browser can&apos;t display the embedded PDF.</p>
          <a
            href={pdfPath}
            className="text-accent underline underline-offset-4 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Open the resume PDF directly
          </a>
        </div>
      </object>
    </div>
  );
}
