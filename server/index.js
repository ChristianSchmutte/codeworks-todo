'use strict';
const cors = require('cors');
const morgan = require('morgan');
const Express = require('express');
const db = require('./models/db');
const router = require('./router');

require('dotenv').config();
const PORT = process.env.SERVER_PORT || 5050;

const app = Express();

app.use(cors('*'));
app.use(morgan('short'));
app.use(Express.json());

app.use('/', router);
app.use('**', (req, res) => res.sendStatus(404));

async function start() {
  app.listen(PORT, () => {
    console.log(`🚀 server running on http://localhost:${PORT}`);
  });
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({ alter: true });
    console.log('🚀 Connection has been established successfully.');
  } catch (error) {
    console.error('👎 Unable to connect to the database:', error);
  }
}

start();
