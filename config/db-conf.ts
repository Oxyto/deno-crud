import * as redis from "redis";

export const db = await redis.connect({
  hostname: "127.0.0.1",
  port: 6379,
});
