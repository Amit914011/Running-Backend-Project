const express = require('express')
const router = express.Router()
const productControllers = require('../controllers/productControllers')


router.post('/productSave', productControllers.productSave)

router.get('/getProduct', productControllers.getProduct)

module.exports = router