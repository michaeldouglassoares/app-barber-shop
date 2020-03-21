import Schedule from '../models/Schedule';

class ScheduleService {

  async getSchedules(id, admin) {

    try {

      const response = await Schedule.findAll({ where: { user_id: id } });
      return response;

    } catch (error) {

    }

  }
}

export default new ScheduleService();