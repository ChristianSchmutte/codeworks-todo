require('dotenv').config();
const Sequelize = require('sequelize');
const createTodo = require('./todo.model');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  }
);

const db = {};
db.sequelize = sequelize;
db.todo = createTodo(sequelize, Sequelize.DataTypes);

module.exports = db;
