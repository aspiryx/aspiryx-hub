FROM oven/bun:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN bun i
RUN bun run build

RUN NITRO_SSL_CERT=$(cat /usr/src/app/certs/fullchain.pem)
RUN NITRO_SSL_KEY=$(cat /usr/src/app/certs/privkey.pem)

CMD [ "node", ".output/server/index.mjs" ]