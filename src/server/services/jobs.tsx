import { createServerSupabase } from "@/lib/supabase/server";

/**
 * Minimal jobs table model (create this in Supabase when ready):
 * create table public.jobs (
 *   id uuid primary key default gen_random_uuid(),
 *   type text not null,
 *   payload jsonb not null default '{}'::jsonb,
 *   status text not null default 'queued',
 *   created_at timestamptz default now()
 * );
 * alter table public.jobs enable row level security;
 * create policy "public insert" on public.jobs for insert with check (true);
 * create policy "public read own" on public.jobs for select using (true); -- tighten later
 */

export async function enqueueJob<T extends Record<string, unknown>>(type: string, payload: T) {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("jobs")
    .insert({ type, payload, status: "queued" })
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}
