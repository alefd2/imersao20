#!/bin/bash

# Instala as dependências
yarn install

# Roda as migrações Prisma
npx prisma migrate deploy

# Executa o projeto
yarn dev
