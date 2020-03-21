import BarberShop from '../models/Barbershop';

class BarberShopService {

  async getUnits() {

    return await BarberShop.findAll();
  }
}

export default new BarberShopService();