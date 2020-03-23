import BarberShop from '../models/Barbershop';

class BarberShopService {

  async getUnits() {

    return await BarberShop.findAll();
  }

  async create(userId, name, address, bairro, number) {

    try {

      const response = await BarberShop.create({ name, address, bairro, number });
      return response ? response : false;
    } catch (error) {

    }
  }
}

export default new BarberShopService();