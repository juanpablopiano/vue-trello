FROM node:17.4.0-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN chown -R node ./node_modules

USER node