require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPwd: process.env.DB_PWD,
};
