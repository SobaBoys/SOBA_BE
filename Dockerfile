FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

USER node

CMD ["npm", "dev" , "server"]

EXPOSE 8080