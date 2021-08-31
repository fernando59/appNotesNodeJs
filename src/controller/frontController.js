const { response } = require('express');
const pool = require('../db/database');


const home = async (req, res = response) => {
    const notes = await pool.query('select * from notes where userId = ?', [req.user.id])
    return res.render("home",{notes});
}
const login = (req,res =response) =>{
    return res.render("login")
}
const notesAdd= async (req, res = response) => {
    return res.render("./notes/createNote");
}
const notesEdit= async (req, res = response) => {
    const { id } = req.params;
    const note = await pool.query('SELECT * FROM notes WHERE id = ?', [id]);
    return res.render("./notes/editNote",{note:note[0]});
}



module.exports = {
    home,
    login,
    notesAdd,
    notesEdit
}