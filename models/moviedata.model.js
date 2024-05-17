const mongoose = require("mongoose");

// Schema defination for movies
const MoviesSchema = new mongoose.Schema(
  {
    // Name of the movie
    name: {
      type: String,
      required: [true, "Please enter movie name"], // Name is required
    },
    // URL of the movie image
    image: {
      type: String,
      required: false, // Image is optional
    },
    // Summary of the movie
    summary: {
      type: String,
      required: [true, "Please enter movie summary"], // Summary is required
    },
  },
  {
    timestamps: true, // Enable automatic timestamps for createdAt and updatedAt fields
  }
);

// Create a mongoose model based on the schema
const MoviesCollectionDB = mongoose.model("MoviesCollectionDB", MoviesSchema);

// Export the model
module.exports = MoviesCollectionDB;
