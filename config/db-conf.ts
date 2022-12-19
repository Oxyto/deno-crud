import * as redis from "redis";

export const db = await redis.connect({
  hostname: "database",
  port: 6379,
});
