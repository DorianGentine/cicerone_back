const express = require('express');
const router = express.Router();

// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

const regionCtrl = require('../controllers/region');

router.get('/', regionCtrl.index);
router.post('/', regionCtrl.create);
// router.get('/:id', regionCtrl.getOneThing);
router.put('/:id', regionCtrl.update);
router.delete('/:id', regionCtrl.destroy);

module.exports = router;