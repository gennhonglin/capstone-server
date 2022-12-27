// Update with your config settings.
require('dotenv').config();
const USER = process.env.DB_LOCAL_USER;
const DATABASE = process.env.DB_LOCAL_DBNAME;
const PASSWORD = process.env.DB_LOCAL_PASSWORD;


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    charset: 'utf8',
    user: USER,
    password: PASSWORD,
    database: DATABASE
  }
};

// module.exports = {
//   client: 'mysql',
//   connection: `mysql://root:ondmqgdsQJKgPy6cbKfD@containers-us-west-101.railway.app:7958/railway`
// };
