# api.wm.o-endpoints
> Mozilla's api.webmaker.org API written in the endpoints framework

## What?

`api.wm.o-endpoints` is a trial implementation of Mozilla's `api.webmaker.org`. This application is built using:

- [endpoints](http://endpointsjs.com/): a JavaScript API framework
- [express](http://expressjs.com/): a JavaScript application framework
- [bookshelf](http://bookshelfjs.org/): a JavaScript ORM

This API is specifically [json-api](http://jsonapi.org/) compliant.

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
$ npm start
```
