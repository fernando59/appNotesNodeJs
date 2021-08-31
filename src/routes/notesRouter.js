
const { Router } = require('express')
const router = Router()
const { createNote, deleteNote, updateNote } = require('../controller/notesController');
const { isLoggedIn } = require('../helpers/auth');




router.post('/notes/add',isLoggedIn, createNote)
router.post('/notes/edit/:id',isLoggedIn, updateNote)
router.get('/note/delete/:id',isLoggedIn, deleteNote)


module.exports = router