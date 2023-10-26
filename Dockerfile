FROM node:20.9.0-alpine3.18 AS packages-stage

WORKDIR /app

COPY package.json .

RUN npm install

FROM node:20.9.0-alpine3.18 AS build-stage

WORKDIR /app

COPY --from=packages-stage /app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM node:20.9.0-alpine3.18 AS packages-production-stage

WORKDIR /app

COPY package.json .

RUN npm install --production

FROM node:20.9.0-alpine3.18 AS production-stage

WORKDIR /app

COPY --from=packages-production-stage /app/node_modules ./node_modules

COPY --from=build-stage /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]

