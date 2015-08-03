require('habitat').load('.env');

module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: process.env.POSTGRE_CONNECTION_STRING,
    directory: './migrations',
    migrations: {
      tableName: 'migrations'
    }
  }
};
