# syntax=docker/dockerfile:1

FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY config.js .
COPY ./src/server/appServer.js ./src/server/
COPY ./src/server/repository/db.js ./src/server/repository/
COPY ./src/server/repository/sequelize/ ./src/server/repository/sequelize/

EXPOSE 3000

CMD [ "npm", "start" ]