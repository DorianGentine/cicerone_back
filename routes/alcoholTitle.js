const express = require('express');
const router = express.Router()

const alcoholTitleCtrl = require('../controllers/alcoholTitle');

// route: /api/alcohol_title

router.get('/', alcoholTitleCtrl.index);
router.post('/', alcoholTitleCtrl.create);
router.put('/:id', alcoholTitleCtrl.update);
router.delete('/:id', alcoholTitleCtrl.destroy);
// router.get('/:id', alcoholTitleCtrl.show);

module.exports = router;