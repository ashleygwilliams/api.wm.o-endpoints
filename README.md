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
$ knex seed:run
$ npm start
```

## Scripts
This application uses npm scripts to run some tasks.

- `npm run db:reset`: drops the database, recreates the database, runs migrations
- `npm run db:seed`: alias for `knex seed:run`

## Routes
You can also view these at the root route: `/v1`.

```
{
  "elements": "/v1/elements?include={page}&filter[{page_id}]",
  "pages": "/v1/pages?include={project,elements}&filter[{project_id}]",
  "projects": "/v1/projects?include={user,pages}&filter[{user_id,featured,title}]",
  "users": "/v1/users?include={projects}&filter[{language}]"
}
```

For example, you can retrieve all pages with their elements, for a project with an `id` of `1` using the following URL:

`http://localhost:8080/v1/pages?include=elements&filter[project_id]=1`
