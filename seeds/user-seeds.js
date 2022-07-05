const { User } = require('../models');

const userData = [
    {
      username: 'Chadd',
      password: 'password'
    },
    {
      username: 'Lernantino',
      password: 'password12345'
    },
    {
      username: 'Amiko',
      password: 'password1234'
    }
  ]

const seedCategories = () => User.bulkCreate(userData);

module.exports = seedCategories;