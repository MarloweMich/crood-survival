const { AuthenticationError } = require('apollo-server-express');
const { User, Hero, Scenario, Message} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    user: async() => {
        return User.find({});
    },

    hero: async() =>{
        return Hero.find({});
    },

    scenario: async()=>{
        return Scenario.find({})
    },

    message: async() => {
      return Message.find({})
    }

    

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    addHero: async (parent, {heroData}, context) => {
      console.log("hero added?")
      if (context.user) {
        console.log("are you here?")
      const updatedUser = await User.findOneAndUpdate(
        {_id: context.user._id},
        {
          $push: {heroes: heroData},
        },
        {new: true, runValidators: true}
      )
      return updatedUser;
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addMessage: async (parent, { sender, text }) => {
      const message = await Message.create({sender, text});

      await User.findOneAndUpdate(
        {username: sender},
        {$push: {messages: message._id}}
      )
      return message
    }
    

  }
};

module.exports = resolvers;