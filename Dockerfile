# Stage 1 - build the Angular app
FROM node:24-alpine AS build

WORKDIR /app

# Install dependencies first so this layer is cached unless the manifests change
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

# Stage 2 - serve the built app
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/scorekeeping-by-rounds /usr/share/nginx/html

EXPOSE 80
