import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ResumeViewer from "@/components/resume/ResumeViewer";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Resume — Joao Sieber Bittencourt",
  description: "Resume for Joao Sieber Bittencourt, VFX Artist & Compositor.",
};

export default function ResumePage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Resume
          </h1>
          <p className="max-w-(--container-prose) text-lg text-foreground-muted">
            PLACEHOLDER — Joao&apos;s full resume will be available here. In the meantime, a
            placeholder document is embedded below to demonstrate the viewer.
          </p>
        </div>

        <ResumeViewer pdfPath={siteConfig.resumePdfPath} />
      </Container>
    </section>
  );
}
