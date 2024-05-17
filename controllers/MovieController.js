const movies = require('../models/moviedata.model.js');

// Get all movies
const getMovies = async (req, res) => {
    try {
        const movie = await movies.find({});
        res.status(200).json(movie); // Respond with the list of movies
    } catch (error) {
        res.status(500).json({ message: error.message }); // Respond with error message
    }
}

// Get a specific movie by ID
const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movieData = await movies.findById(id);
        if (!movieData) {
            return res.status(404).json({ message: 'Movie data not found' }); // Respond with not found error
        }
        res.status(200).json(movieData); // Respond with the movie data
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: error.message }); // Respond with error message
    }
}

// Create a new movie
const createMovie = async (req, res) => {
    try {
        console.log(req.body); // Log the request body
        const movie = await movies.create(req.body);
        res.status(201).json(movie); // Respond with the created movie data and status 201
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: error.message }); // Respond with error message
    }
}

// Update an existing movie by ID
const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const updateMovieData = await movies.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateMovieData) {
            return res.status(404).json({ message: 'Movie data not found' }); // Respond with not found error
        }
        res.status(200).json(updateMovieData); // Respond with the updated movie data
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: error.message }); // Respond with error message
    }
}

// Delete a movie by ID
const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMovieData = await movies.findByIdAndDelete(id);
        if (!deleteMovieData) {
            return res.status(404).json({ message: 'Movie data not found' }); // Respond with not found error
        }
        res.status(200).json({ message: "Movie data successfully deleted!" }); // Respond with success message
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: error.message }); // Respond with error message
    }
}

module.exports = {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}
