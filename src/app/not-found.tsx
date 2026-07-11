import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container className="flex flex-col gap-6">
        <p className="text-sm font-medium tracking-widest text-accent uppercase">404</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Page Not Found
        </h1>
        <p className="max-w-(--container-prose) text-lg text-foreground-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-accent px-5 py-2.5 text-sm font-medium tracking-wide text-accent uppercase transition-colors hover:bg-accent hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Back Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-border-subtle px-5 py-2.5 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:border-foreground-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
