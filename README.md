<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>

</p>

## Principais Comandos

### Nest Js

- `npm run start:dev`: iniciar o nest no ambiente de desenvolvimento
- `nest generate module categorias`: criar um módulo de categorias para agrupar o contexto de uma feature, no exemplo acima, feature de categorias
- `nest generate resource categorias`: criar todos os recursos (todos os métodos http do REST, ou GraphQL, micro-serviço, etc) de uma feature, podendo criar todos os entry points do CRUD
- `nest g service prisma`: gerar um serviço prisma

### Docker

- `docker compose up`: criar e inicia todos os containers do Docker (do arquivo `docker-compose.yaml`) para rodar o MySQL
- `docker compose exec db bash`: executar um comando dentro de um container, no cenário: dentro do db, executar o comando bash

### Container com MySQL

- `mysql --password`: acessar o mysql com o password, que será digitado depois
- `SHOW DATABASES;`: listar todos os banco de dados
- `use nestjs;`: utilizar o banco de dados 'nestjs'
- `show tables;`: listar todos as tabelas
- `describe Categoria`: descrever a estrutura da tabela

### Prisma

É uma ORM para modelagem de dados

`npm install @prisma/client`: instalar o prisma client
`npx prisma init`: iniciar o prisma dentro da pasta raiz
`npx prisma migrate dev`: criar uma migração (versionamento) para o banco de dados
`npx prisma studio`: ferramenta que abre no browser para visualizar e manipular os dados dos banco de dados

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
