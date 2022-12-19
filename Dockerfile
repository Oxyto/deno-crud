FROM denoland/deno:alpine AS server

EXPOSE 80

WORKDIR /app

COPY . .
RUN deno cache main.ts
CMD ["deno", "run", "-A", "main.ts"]
