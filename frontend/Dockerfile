FROM node:latest

WORKDIR /usr/app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 8080

CMD ["pnpm", "run", "dev"]
