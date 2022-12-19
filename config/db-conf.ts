import * as redis from "redis";

export const db = await redis.connect({
  hostname: Deno.env.get("DB_HOST") ?? "database",
  port: Number(Deno.env.get("DB_PORT") ?? 6379),
});
