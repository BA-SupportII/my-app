// Placeholder; fill when you add Stripe keys.
import type Stripe from "stripe";
export type StripeClient = Stripe; // for typing without importing unless needed

// You can lazy-import 'stripe' in a server route when ready, e.g.:
// const stripe = new (await import("stripe")).default(SERVER_ENV.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });
