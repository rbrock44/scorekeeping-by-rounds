# Stage 1
FROM node:10-alpine as build-step

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && npm run ngcc && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

#RUN mkdir -p /app
#
#WORKDIR /app

#COPY package.json /app

COPY . .

#RUN npm install
RUN npm run build:prod

## Copy our default nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

#COPY . /app

#RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/docs /usr/share/nginx/html
