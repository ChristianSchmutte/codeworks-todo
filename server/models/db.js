require('dotenv').config();
const Sequelize = require('sequelize');
const createTodo = require('./todo.model');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: 3306,
  logging: console.log,
  maxConcurrentQueries: 100,
  dialectOptions: {
    ssl:'Amazon RDS'
  },
  pool: { maxConnections: 5, maxIdleTime: 30},
  language: 'en'
});

const db = {};
db.sequelize = sequelize;
db.todo = createTodo(sequelize, Sequelize.DataTypes);

module.exports = db;
