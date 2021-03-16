#!/usr/bin/env sh

docker stop scorekeeping-by-rounds || true
docker rm scorekeeping-by-rounds || true
