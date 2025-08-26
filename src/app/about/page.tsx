import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — My App",
  description: "About page for the starter app",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="text-gray-600">
        App Router page works ✅ — this page lives at <code>/about</code>.
      </p>

      <div>
        <Link
          href="/"
          className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
