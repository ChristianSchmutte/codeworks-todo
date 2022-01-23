const db = require('../models/db');

async function getAll(req, res) {
  try {
    const dbRes = await db.todo.findAll();
    res.status(200);
    res.send(dbRes);
    res.end();
  } catch (error) {
    res.status(500);
    res.send(error);
    res.end();
  }
}
async function postOne(req, res) {
  try {
    const newTodo = req.body;
    console.log('post', newTodo);
    const dbRes = await db.todo.create(newTodo);
    res.status(201);
    res.send(dbRes);
    res.end();
  } catch (error) {
    res.status(500);
    res.send(error);
    res.end();
  }
}
async function updateOne(req, res) {
  try {
    const id = req.params.id;
    const changes = req.body;
    const dbRes = await db.todo.update(changes, {
      where: { id },
      returning: true,
    });
    if (dbRes[0] > 0) {
      res.status(202);
      // sequelize returns [num records, array of updated records]
      res.send(dbRes[1][0]);
      res.end();
    } else {
      res.status(404);
      res.send(`todo id ${id} not found`);
      res.end();
    }
  } catch (error) {
    res.status(500);
    res.send(error);
    res.end();
  }
}

async function deleteOne(req, res) {
  try {
    const id = req.params.id;
    await db.todo.destroy({ where: { id } });
    res.sendStatus(204);
    res.end();
  } catch (error) {
    res.status(500);
    res.send(error);
    res.end();
  }
}

module.exports = { getAll, postOne, updateOne, deleteOne };
