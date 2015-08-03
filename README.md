# api.wm.o-endpoints
> Mozilla's api.webmaker.org API written in the endpoints framework

## Prerequisites

- [NodeJS](https://nodejs.org/)
- [PostgreSQL](http://www.postgresql.org/)
- [Knex](http://knexjs.org/): `npm install -g knex`

## Up and Running

```
$ git clone git@github.com:ashleygwilliams/api.wm.o-endpoints.git
$ cd api.wm.o-endpoints
$ npm install
$ npm run env # WINDOWS USERS: use COPY env.dist .env
$ createdb wm
$ knex migrate:latest
```
