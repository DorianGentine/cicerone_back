const express = require('express');
const router = express.Router()

const quizzCtrl = require('../controllers/quizz');

// route: /api/quizz

router.get('/', quizzCtrl.index);
// router.post('/', quizzCtrl.create);
// router.put('/:id', quizzCtrl.update);
// router.delete('/:id', quizzCtrl.destroy);
// router.get('/:id', quizzCtrl.show);

module.exports = router;