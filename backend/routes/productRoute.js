const express = require('express')
const router = express.Router()
const productControllers = require('../controllers/productControllers')


router.post('/productSave', productControllers.productSave)

router.get('/getProduct', productControllers.getProduct)

router.get('/viewProduct/:id', productControllers.viewProduct)

router.delete('/deleteProduct/:id', productControllers.deleteProduct)

router.put('/upadteProduct/:id', productControllers.updateProduct)

module.exports = router