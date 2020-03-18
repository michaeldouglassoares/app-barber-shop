'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          name: "Michael Douglas Soares",
          email: "michaeldouglas.10.94@gmail.com",
          password: bcrypt.hashSync("michael", 8),
          phone: "(41) 9 9603-2030",
          admin: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => { }
};
