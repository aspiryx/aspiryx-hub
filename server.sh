#!/bin/bash
export NITRO_SSL_CERT="`cat ./certs/fullchain.pem`"
export NITRO_SSL_KEY="`cat ./certs/privkey.pem`"
exec bun .output/server/index.mjs