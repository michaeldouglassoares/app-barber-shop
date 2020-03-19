import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

class SessionService {

  async createSessionClient(params) {

    try {
      return await jwt.sign({ params }, authConfig.secret, { expiresIn: authConfig.expiresIn });
    } catch (error) {

    }
  }
}

export default new SessionService();