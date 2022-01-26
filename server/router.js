const { Router } = require('express');
const {
  getAll,
  postOne,
  updateOne,
  deleteOne,
} = require('./controllers/todo.controller');

const router = Router();

router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));
router.get('/todo', getAll);
router.post('/todo', postOne);
router.patch('/todo/:id', updateOne);
router.delete('/todo/:id', deleteOne);

module.exports = router;
