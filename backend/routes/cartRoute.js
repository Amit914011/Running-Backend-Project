const express = require('express')
const router = express.Router()
const cartControllers = require('../controllers/cartController.js')
const uploads = require('../multerConfig.js')


router.post('/cartSave',uploads.single("image"),cartControllers.cartSave)


router.get('/getCart', cartControllers.getCart)

module.exports = router