## Stage 1
#FROM node:10-alpine as build-step
#
#COPY package.json package-lock.json ./
#
#RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
#
### Storing node modules on a separate layer will prevent unnecessary npm installs at each build
#RUN npm i && npm run ngcc && mkdir /ng-app && cp -R ./node_modules ./ng-app
#
#WORKDIR /ng-app
#
##RUN mkdir -p /app
##
##WORKDIR /app
#
##COPY package.json /app
#
#COPY . .
#
##RUN npm install
#RUN npm run build:prod
#
##COPY . /app
#
##RUN npm run build --prod
#
## Stage 2
#FROM nginx:1.17.1-alpine
#COPY --from=build-step /app/docs /usr/share/nginx/html


# base image
FROM node:12.2.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
#RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

## start app
#CMD ng serve --host 0.0.0.0
RUN npm run build --prod
