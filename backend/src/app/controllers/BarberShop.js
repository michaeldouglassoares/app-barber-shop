import BarberShopService from '../service/BarberShopService';

class BarberShop {

  async get(req, res) {

    const response = await BarberShopService.getUnits();
    return res.status(200).json(response);
  }
}

export default new BarberShop();