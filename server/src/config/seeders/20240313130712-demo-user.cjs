"use strict";

const bcrypt=  require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports =  {
  up: async (queryInterface, Sequelize) => {
    const hashPassword = await bcrypt.hash("12345", 5);
    return await queryInterface.bulkInsert("Users", [
      {
        email: "sl@mail.ru",
        password: hashPassword,
        role: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
