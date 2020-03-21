import Sequelize, { Model } from 'sequelize';

class Schedules extends Model {

  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        name_client: Sequelize.STRING,
        schedule: Sequelize.DATE,
        service: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Schedules; 