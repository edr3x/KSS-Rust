FROM node:18-alpine as base

FROM base as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

FROM base as prod

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules 

COPY package.json yarn.lock ./

RUN yarn install --production

COPY --from=builder /app ./

EXPOSE 5050

CMD [ "node", "/app/server.js" ]


