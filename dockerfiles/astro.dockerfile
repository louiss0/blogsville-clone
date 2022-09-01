FROM node:18-buster-slim

WORKDIR /app

RUN npm install -g pnpm 

RUN npm install -g astro 

ENTRYPOINT [ "astro" ] 