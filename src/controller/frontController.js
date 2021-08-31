const { response } = require('express');
const pool = require('../db/database');


const home = async (req, res = response) => {
    const notes = await pool.query('select * from notes where userId = ?', [req.user.id])
    return res.render("home",{notes});
}
const login = (req,res =response) =>{
    return res.render("login")
}



module.exports = {
    home,
    login
}