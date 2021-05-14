FROM node:lts-alpine as build

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

ARG PORT

ENV PORT=$PORT

COPY package.json /usr/src/app/package.json
RUN npm install

COPY . /usr/src/app

EXPOSE $PORT
CMD ["ts-node", "index.ts"]




