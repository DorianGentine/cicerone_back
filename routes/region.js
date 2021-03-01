const express = require('express');
const router = express.Router();

// const auth = require('../middleware/auth');

const regionCtrl = require('../controllers/region');

// route: /api/region

router.get('/', regionCtrl.index);
router.post('/', regionCtrl.create);
router.put('/:id', regionCtrl.update);
router.delete('/:id', regionCtrl.destroy);
// router.get('/:id', regionCtrl.show);

module.exports = router;