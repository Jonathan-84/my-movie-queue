const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`
  type Movie {
    list:[String]
    movieId: ID!
    title: String!
    overview: String
    image: String
    link: String
  }
  type User {
    _id: ID
    username: String
    email: String!
    movieCount: Int
    savedMovies: [Movie]
  }
  input movieInput {
    movieId: ID!
    title: String
    image: String
    link: String
    overview: String
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
    saveMovie(input: movieInput!): User
    removeMovie(movieId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
