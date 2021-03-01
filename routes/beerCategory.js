const express = require('express');
const router = express.Router()

const beerCategoryCtrl = require('../controllers/beerCategory');

// route: /api/alcohol_title

router.get('/', beerCategoryCtrl.index);
router.post('/', beerCategoryCtrl.create);
router.put('/:id', beerCategoryCtrl.update);
router.delete('/:id', beerCategoryCtrl.destroy);
// router.get('/:id', beerCategoryCtrl.show);

module.exports = router;