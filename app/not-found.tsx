import Link from "next/link";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-28 md:pt-36 bg-white">
      <div className="container-custom max-w-xl text-center py-20">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#888888] block mb-4">
          Status 404 — Record Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#111111] mb-6">
          Looks like this page took a different direction.
        </h1>
        <p className="text-base text-[#555555] leading-relaxed mb-8">
          The requested corporate resource, publication, or practice memorandum may have moved or is no longer available under this URL.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" icon>
            Return to Homepage
          </Button>
          <Button href="/services" variant="outline">
            Browse Practice Areas
          </Button>
        </div>
      </div>
    </div>
  );
}
