const { response } = require('express');
const passport = require('passport');
const {check, validationResult} =require('express-validator')
const login = (req, res = response) => {
    return res.render("auth/login");
}

const signin = (req, res = response,next) => {

    if (errors.errors.length > 0) {
        req.flash('message', errors.errors[0].msg);
        res.redirect('/login');
    }
    passport.authenticate('local.signin', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}
const singup = (req, res = response) => {
    return res.render("auth/signup")
}


const loguot = (req, res = response) => {
    req.logOut()
    return res.redirect('/login')
}


module.exports = {
    login,
    singup,
    signin,
    loguot,
}