FROM node:alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . .

RUN npm install

CMD ["npm", "run", "start"]