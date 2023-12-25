#!/bin/bash
export NITRO_SSL_CERT="`cat ./certs/fullchain1.pem`"
export NITRO_SSL_KEY="`cat ./certs/privkey1.pem`"
exec bun .output/server/index.mjs