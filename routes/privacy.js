//connect to express
const express = require('express')
//turn on express router
const router = express.Router()
//specify location of controller files
const privacyController = require('../controllers/privacy')
//ensures user is authorized and then opens home page via homecontroller
router.get('/privacy', privacyController.getIndex)
//exports the router to be used elsewhere
module.exports = router