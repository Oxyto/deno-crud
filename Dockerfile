FROM denoland/deno:alpine AS server

EXPOSE ${DB_PORT}

WORKDIR /app

COPY . .
RUN deno cache main.ts
CMD ["deno", "run", "-A", "main.ts"]
