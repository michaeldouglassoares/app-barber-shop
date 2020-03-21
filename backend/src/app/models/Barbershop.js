import Sequelize, { Model } from 'sequelize';

class Barbershops extends Model {

  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        bairro: Sequelize.STRING,
        number: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Barbershops; 