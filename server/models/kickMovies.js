const { Schema } = require("mongoose");

// Saved movies schema
const kickMovieSchema = new Schema({
  // _id: { 
  //   type: mongoose.Schema.Types.ObjectId, 
  //   auto: true 
  // },
  title: 
    {
      type: String,
      required: true,
    },
  
  overview: {
    type: String,
  },
  poster: {
    type: String,
  },
  trailer: {
    type: String,
  },
  link: {
    type: String,
  },
  movieId: {
    type: String,
 
  },
});

module.exports = kickMovieSchema;
