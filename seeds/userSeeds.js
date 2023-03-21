const { User } = require('../models/index');


const users = [
    {
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    },
    {
      name: 'Jade Jadeson',
      email: 'frostedflakes64@hotmail.com',
      password: 'wordpass'
    },
    {
      name: 'Bob Johnson',
      email: 'bjohnson@example.com',
      password: 'p@ssw0rd'
    },
    {
     name: 'Names Jameson',
     email: 'NamestheJames@Jamenames.com',
     password: 'trueAdmin'
    }
  ];
  
  const userSeed = () => {User.bulkCreate(users)}
  
  module.exports = userSeed()