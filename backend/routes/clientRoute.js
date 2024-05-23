const express = require('express')
const router = express.Router()
const clientControllers = require('../controllers/clientController.js')
const uploads = require('../multerConfig.js')


router.post('/clientSave',uploads.single("image"),clientControllers.clientSave)

router.post('/clientLogin', clientControllers.clientLogin)


router.get('/getClient', clientControllers.getClient)

router.get('/createClientTable/:username', clientControllers.createClientTable)


router.put('/updateClient/:id', clientControllers.updateClient)

router.get('/getUserDetails/:username', clientControllers.getUserDetails)

module.exports = router