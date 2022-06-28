const path = require('path');
const DBfilePath = path.join(__dirname, '..', 'database.sqlite');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: DBfilePath,
  },
  production: {
    dialect: 'sqlite',
    storage: DBfilePath,
  },
};
