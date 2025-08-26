import Link from "next/link";
import { Button } from "@/components/Button";
import Feature from "@/components/Feature";
import { FLAGS } from "@/config";

export default function Page() {
  return (
    <main className="min-h-svh grid place-items-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Next.js + Tailwind + Supabase-ready ✅
        </h1>

        <div className="flex items-center justify-center gap-4">
          <Feature when={FLAGS.showAbout}>
            <Link href="/about" className="text-blue-600 underline underline-offset-4">About</Link>
          </Feature>
          <Link href="/api/ping" className="text-gray-600 underline underline-offset-4">Check API</Link>
          <Button>It works 🎯</Button>
        </div>
      </div>
    </main>
  );
}
