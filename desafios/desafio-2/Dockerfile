FROM node:16-alpine

WORKDIR /desafio-2

COPY package.json yarn.lock ./
RUN yarn install

RUN yarn add prisma @prisma/client

COPY . .

RUN npx prisma generate
RUN npx prisma migrate deploy

EXPOSE 3000

CMD ["yarn", "dev"]
