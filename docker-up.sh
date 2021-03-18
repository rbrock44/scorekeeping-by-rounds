#!/usr/bin/env sh

docker stop scorekeeping-by-rounds || true
docker rm scorekeeping-by-rounds || true
docker build -f Dockerfile -t scorekeeping-by-rounds:latest .
docker run -p 44200:80 --detach --name scorekeeping-by-rounds scorekeeping-by-rounds:latest
