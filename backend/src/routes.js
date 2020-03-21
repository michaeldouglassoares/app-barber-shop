import { Router } from 'express';

import middlewareJWT from './app/middlewares/middlewareJWT';

import BarberShopController from './app/controllers/BarberShop';
import LoginController from './app/controllers/LoginController';
import ClientController from './app/controllers/ClientController';
import ScheduleController from './app/controllers/ScheduleController';

class Routes {
  constructor() {
    this.routes = new Router();

    this.createRoutes();
  }

  createRoutes() {
    this.routes.post('/login', LoginController.login);

    this.routes.use(middlewareJWT);

    this.routes.post('/clients', ClientController.store);
    this.routes.get('/schedules', ScheduleController.get);
    this.routes.get('/barbershops', BarberShopController.get);
  }
}

export default new Routes().routes;