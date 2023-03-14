const { Schema } = require("mongoose");

// Saved movies schema
const movieSchema = new Schema({
  title: [
    {
      type: String,
      required: true,
    },
  ],
  overview: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  movieId: {
    type: String,
    required: true,
  },
});

module.exports = movieSchema;
