// src/components/Button.tsx
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:scale-[.99]">
      {children}
    </button>
  );
}
