import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class Users extends Model {

  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        phone: Sequelize.STRING,
        admin: Sequelize.BOOLEAN
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (user) => {
      bcrypt.hashSync(user.password, 8)
    });
    return this;
  }
  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default Users; 