import ScheduleService from '../service/SchedulService';

class ScheduleController {

  async get(req, res) {

    console.log(req.userId, req.admin)

  }
}

export default new ScheduleController();