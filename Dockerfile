FROM oven/bun:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . */etc/letsencrypt/live/aspiryx.space/fullchain.pem */etc/letsencrypt/live/aspiryx.space/privkey.pem /usr/src/app/

RUN bun i
RUN bun run build

CMD [ "node", ".output/server/index.mjs" ]