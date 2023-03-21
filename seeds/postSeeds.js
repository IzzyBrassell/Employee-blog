const sequelize = require('../config/connection');
const { Post } = require('./../models')

const posts = [
    {
      textContent: 'I finished my project on time today!',
      userId: 1 // Replace with the ID of the user who made this post
    },
    {
      textContent: 'I learned a new skill today!',
      userId: 2 // Replace with the ID of the user who made this post
    },
    {
      textContent: 'I had a great meeting with my team today!',
      userId: 3 // Replace with the ID of the user who made this post
    }
  ];

  const postSeed = () => {Post.bulkCreate(posts)}

  module.exports = postSeed()