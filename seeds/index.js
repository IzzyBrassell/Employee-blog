const sequelize = require('./../config/connection');
const { User, Post } = require('./../models');
const userSeed = require('./userSeeds');
const postSeed = require('./postSeeds');

const seed = async () => {
    try {
      await userSeed();
      await postSeed();
      console.log('Seeding completed successfully!');
    } catch (error) {
      console.error('Error seeding the database:', error);
    }
    process.exit(0);
  };

  seed()