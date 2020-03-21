import Sequelize from 'sequelize';

import Users from '../app/models/Users';
import Schedules from '../app/models/Schedule';
import Barbershops from '../app/models/Barbershop';

import databaseConfig from '../config/database';

const models = [Users, Schedules, Barbershops];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    // models.map(
    //     model => model.associate && model.associate(this.connection.models)
    // );
  }
}

export default new Database();