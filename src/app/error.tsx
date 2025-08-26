"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-svh grid place-items-center bg-gray-50 text-gray-900">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="text-gray-600">Please try again.</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Try again
          </button>
          {process.env.NODE_ENV !== "production" && (
            <pre className="mt-4 max-w-lg text-left text-xs text-gray-500 overflow-auto">
              {error?.message}
            </pre>
          )}
        </div>
      </body>
    </html>
  );
}
