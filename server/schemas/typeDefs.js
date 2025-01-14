const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`
  type shelvedMovie {
  _id: ID!
    movieId: String
    title: String
    overview: String
    poster: String
    link: String
    trailer: String
  }

   type getMovie {
  _id: ID!
    movieId: String
    title: String
    overview: String
    poster: String
    link: String
    trailer: String
  }

   type thatMovie {
  _id: ID!
    movieId: String
    title: String
    overview: String
    poster: String
    link: String
    trailer: String
  }
    type queuedMovie {
    _id: ID!
    movieId: String
    title: String
    overview: String
    poster: String
    link: String
    trailer: String
  }
    
  type User {
    _id: ID!
    username: String
    email: String!
    movieCount: Int
    queuedMovies: [queuedMovie]
    shelvedMovies: [shelvedMovie]
     kickMovies: [thatMovie]
      getMovies: [getMovie]
  }

  input movieInput {
    movieId: String
    title: String
    overview: String
    poster: String
    link: String
    trailer: String
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    queueMovie(input: movieInput!): User
    shelveMovie(input: movieInput!): User
    thatMovie(input: movieInput!): User
    getMovie(input: movieInput!): User
    removeQueuedMovie(_id: ID!): User
    removeShelvedMovie(_id: ID!): User
    removeThatMovie(_id: ID!): User
    removeGetMovie(_id: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
