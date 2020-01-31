require('dotenv').config({ debug: process.env.DEBUG });

module.exports = {
  serverPort: process.env.SERVER_PORT,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPwd: process.env.DB_PWD,
};
