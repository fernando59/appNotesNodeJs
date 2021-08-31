const { Router } = require('express')
const router = Router()
const { home,  notesAdd, notesEdit} = require('../controller/frontController');
const { isLoggedIn } = require('../helpers/auth');



router.get('/',isLoggedIn, home)
router.get('/note',isLoggedIn, notesAdd)
router.get('/note/edit/:id',isLoggedIn, notesEdit)

module.exports = router