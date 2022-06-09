const { gql } = require ('apollo-server-express');

const typeDefs = gql `
  type User {
      _id: ID!
      username: String
      email: String!
      password: String!
      heroes: [Hero]
      messages: [Message]
  }

  type Message {
    _id: ID!
    sender: String
    text: String
  }

  type Hero {
      _id: ID
      name: String
      type: String
      lives: Int
      attributes: String
      description: String
      heroImg: String
  }

  input heroData{
    name: String
    type: String
    lives: Int
    attributes: String
    description: String
  }

  type Scenario{
      _id: String
      challengeType: String
      backGroundImg: String
      description: String
      choices: [String]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user:[User]
    hero:[Hero]
    scenario:[Scenario]
    message:[Message]
  }

  type Mutation {
    addUser(username :String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addHero(heroData: heroData): User
    addMessage(sender: String, text: String): Message
  }
`;

module.exports = typeDefs