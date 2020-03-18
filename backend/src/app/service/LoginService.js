import UserModel from '../models/Users';

class LoginService {

  constructor() {
    this.flag = true;
    this.message = '';
  }

  async returnMessageError(message) {
    this.flag = false;
    this.message = message;
  }

  async createLogin(email, password) {

    try {

      const user = await UserModel.findOne({ where: { email } });

      if (!user || !(await user.checkPassword(password))) {
        return this.returnMessageError('Usuário não encontrado.');
      }

      return {
        user: user.name.split(' ')[0],
        email: user.email,
        admin: user.admin
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LoginService();