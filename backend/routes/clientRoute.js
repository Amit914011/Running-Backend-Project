const express = require('express')
const router = express.Router()
const clientControllers = require('../controllers/clientController.js')
const uploads = require('../multerConfig.js')


router.post('/clientSave',uploads.single("image"),clientControllers.clientSave)

router.post('/clientLogin', clientControllers.clientLogin)


router.get('/getClient', clientControllers.getClient)


router.put('/updateClient/:id', clientControllers.updateClient)

module.exports = router