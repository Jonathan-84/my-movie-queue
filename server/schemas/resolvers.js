// Import Models
const { User } = require("../models");

// Automatically Relay Errors to Client
const { AuthenticationError } = require("apollo-server-express");

// Import JWTs
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password')
       
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    queueMovie: async (parent, {input}, context) => {
      if (context.user) {
        // console.log(context.user);
        // console.log(input);
        
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { queuedMovies: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please log in!");
    },
    shelveMovie: async (parent, {input}, context) => {
      if (context.user) {
        // console.log(context.user);
        // console.log(input);
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { shelvedMovies: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please log in!");
    },

    thatMovie: async (parent, {input}, context) => {
      if (context.user) {
        // console.log(context.user);
        // console.log(input);
        
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { kickMovies: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please log in!");
    },

    getMovie: async (parent, {input}, context) => {
      if (context.user) {
        // console.log(context.user);
        // console.log(input);
        
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { getMovies: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please log in!");
    },
    

    removeQueuedMovie: async (parent, {_id}, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { queuedMovies: { _id   }} },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please log in!");
    },
    removeShelvedMovie: async (parent, {_id}, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { shelvedMovies: { _id }} },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please log in!");
    },
    removeThatMovie: async (parent, {_id}, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { kickMovies: { _id   }} },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please log in!");
    },
    removeGetMovie: async (parent, {_id}, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { getMovies: { _id   }} },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please log in!");
    },
  }
}
module.exports = resolvers;
