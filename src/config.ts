// All env + app constants live here so changes are one-file edits.
export const APP = {
  name: "My App",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
} as const;

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) {
    // Keep it non-fatal in dev; log loudly. You can throw if you prefer.
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[CONFIG] Missing ${name}. Set it in .env.local (and Vercel).`);
    }
  }
  return v || "";
}

/** Public (exposed to the browser) */
export const PUBLIC_ENV = {
  SUPABASE_URL: requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
  SUPABASE_ANON_KEY: requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "",
} as const;

/** Server-only (NEVER expose to browser) */
export const SERVER_ENV = {
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || "",
  // Add more secrets here as you grow
} as const;

/** Feature flags (toggle without code changes) */
export const FLAGS = {
  showAbout: (process.env.NEXT_PUBLIC_FEAT_ABOUT || "1") === "1",
  showTodos: (process.env.NEXT_PUBLIC_FEAT_TODOS || "0") === "1",
} as const;
