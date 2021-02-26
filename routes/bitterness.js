const express = require('express');
const router = express.Router()

const bitternessCtrl = require('../controllers/bitterness');

// route: /api/alcohol_title

router.get('/', bitternessCtrl.index);
router.post('/', bitternessCtrl.create);
router.put('/:id', bitternessCtrl.update);
router.delete('/:id', bitternessCtrl.destroy);
// router.get('/:id', bitternessCtrl.show);

module.exports = router;