FROM oven/bun:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN bun i
RUN bun run build

EXPOSE 8080

CMD [ "node", ".output/server/index.mjs" ]