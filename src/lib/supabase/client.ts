import { createBrowserClient } from "@supabase/ssr";
import { PUBLIC_ENV } from "@/config";

export function createClient() {
  return createBrowserClient(PUBLIC_ENV.SUPABASE_URL, PUBLIC_ENV.SUPABASE_ANON_KEY);
}
