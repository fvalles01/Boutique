const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const productController = require('../controllers/product');


router.get('/', auth, productController.getAllProducts);
router.post('/', auth, multer, productController.createProduct);
router.put('/:id', auth, multer, productController.modifyProduct);
router.get('/:id', auth, productController.getOneProduct);
router.delete('/:id', auth, productController.deleteProduct);


module.exports = router;