import { Router } from 'express';

import LoginController from './app/controllers/LoginController';

class Routes {
  constructor() {
    this.routes = new Router();

    this.createRoutes();
  }

  createRoutes() {
    this.routes.post('/login', LoginController.login);
  }
}

export default new Routes().routes;