const express = require('express');
const router = express.Router();
const movies = require('../models/moviedata.model.js');
const { getMovies, getMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/moviecontroller.js');

// Route to get all movies
router.get('/', getMovies);

// Route to get a specific movie by ID
router.get("/:id", getMovie);

// Route to create a new movie
router.post("/", createMovie);

// Route to update an existing movie by ID
router.put("/:id", updateMovie);

// Route to delete a movie by ID
router.delete("/:id", deleteMovie);

module.exports = router;
