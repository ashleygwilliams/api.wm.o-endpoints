require('habitat').load('.env');

module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: process.env.POSTGRES,
    directory: './migrations',
    migrations: {
      tableName: 'migrations'
    }
  }
};
