const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

// import schema from movie.js
const shelvedMovieSchema = require("./shelvedMovie.js");
const queuedMovieSchema = require("./queuedMovie.js");
const kickMovieSchema = require("./kickMovies.js");
const getMovieSchema = require("./getMovies.js");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedMovies to be an array of data that adheres to the movieSchema
    queuedMovies: [queuedMovieSchema],
    shelvedMovies: [shelvedMovieSchema],
    getMovies: [getMovieSchema],
    kickMovies:[kickMovieSchema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `movieCount` with the number of saved movies we have
userSchema.virtual("movieCount").get(function () {
  let movieCount = this.queuedMovies.length + this.shelvedMovies.length
  return movieCount;
});

const User = model("User", userSchema);

module.exports = User;