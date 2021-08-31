
const { Router } = require('express')
const router = Router()
const { home, login } = require('../controller/frontController')

const { isLoggedIn } = require('../helpers/auth');
router.get('/',isLoggedIn, home)


module.exports = router