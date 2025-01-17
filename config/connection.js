const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.NODE_ENV === 'production'
  ? new Sequelize(process.env.DB_URI_INTERNAL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Adjust this based on your PostgreSQL setup
        },
      },
    })
  : new Sequelize(process.env.DB_URI_EXTERNAL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Adjust this based on your PostgreSQL setup
        },
      },
    });

module.exports = sequelize;

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
