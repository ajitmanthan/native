const express = require('express')
const router = express.Router()
const User = require('../controller/user')

router.post('/createUser',User.userCreate)





module.exports = router