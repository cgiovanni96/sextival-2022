import { createClient } from "@supabase/supabase-js";

export const client = createClient(
  "https://dtcfvefadhqymooinhrs.supabase.co",
  process.env.NEXT_PUBLIC_CLIENT_SERVICE || ""
);
