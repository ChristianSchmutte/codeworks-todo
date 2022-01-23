const { Router } = require('express');
const {
  getAll,
  postOne,
  updateOne,
  deleteOne,
} = require('./controllers/todo.controller');

const router = Router();

router.get('/', (req, res) => res.send('Server running...'));
router.get('/todo', getAll);
router.post('/todo', postOne);
router.patch('/todo/:id', updateOne);
router.delete('/todo/:id', deleteOne);

module.exports = router;
