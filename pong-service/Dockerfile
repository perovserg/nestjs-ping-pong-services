FROM node:14-alpine

WORKDIR /app
COPY ./src/*.proto ./dist/
COPY ./package*.json ./

RUN npm ci

COPY nest-cli.json tsconfig.json tsconfig.build.json ./
COPY ./src ./src/

CMD ["npm", "run", "nest:start"]
