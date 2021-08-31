const { Router } = require('express');
const { check } = require('express-validator');
const router = Router()
const passport = require('passport');
const {  login, signin, loguot, singup } = require('../controller/authController')





router.get('/login', login)
router.post('/signin',[
    check('username', 'El usuario es requerido  ').notEmpty(),
    check('password', 'La contraseña es requerida').notEmpty()
] 
    ,signin)
router.get('/signup', singup)
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }));
router.get('/logout', loguot)

module.exports = router