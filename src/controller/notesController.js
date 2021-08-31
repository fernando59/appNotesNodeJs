const { response } = require('express');
const pool = require('../db/database');


const createNote = async (req, res = response) => {
    const { title, description } = req.body;
    const notes = {
        title,
        description,
        userId: req.user.id
    };
    await pool.query('INSERT INTO notes set ?', [notes]);
    req.flash('success', 'Create Exitosamente');
    res.redirect('/');
}

const updateNote = async (req, res = response) => {
    const { id } = req.params;
    const { title, description} = req.body; 
    const note= {
        title,
        description,
    };
    await pool.query('UPDATE notes set ? WHERE id = ?', [note, id]);
    req.flash('success', 'Editado Exitosamente');
    res.redirect('/');
}

const deleteNote = async (req, res = response) => {
    const { id } = req.params;
    await pool.query('DELETE FROM notes WHERE ID = ?', [id]);
    req.flash('success', 'Eliminado Exitosamente');
    res.redirect('/');
}


module.exports = {
    createNote,
    deleteNote,
    updateNote
}