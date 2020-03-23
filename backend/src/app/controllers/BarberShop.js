import BarberShopService from '../service/BarberShopService';

class BarberShop {

  async get(req, res) {

    const response = await BarberShopService.getUnits();
    return res.status(200).json(response);
  }

  async newBarberShop(req, res) {

    const { userId } = req;
    const { name, address, bairro, number } = req.body;

    const response = await BarberShopService.create(userId, name, address, bairro, number);

    if (response) {
      return res.status(200).json(response);
    }
    return res.status(400).json(response);
  }
}

export default new BarberShop();