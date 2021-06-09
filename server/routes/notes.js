const express = require('express');



const { getNotes, createNote, updateNote, deleteNote} = require('../controllers/notes');


const router = express.Router();

router.get('/', getNotes);
router.get('/', createNote);

// router.get('/:id', updateNote);
// router.get('/:id', deleteNote);


module.exports = router;

