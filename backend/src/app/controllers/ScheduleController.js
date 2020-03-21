import ScheduleService from '../service/SchedulService';

class ScheduleController {

  async get(req, res) {

    const response = await ScheduleService.getSchedules(req.userId, req.admin);

    if (response) {
      return res.status(200).json(response);
    }
    return res.status(400).json(response);
  }
}

export default new ScheduleController();