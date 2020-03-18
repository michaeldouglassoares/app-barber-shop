import LoginService from '../service/LoginService';

class LoginController {

  async login(req, res) {

    const { email, password } = req.body;

    if (email === '' && password === '') {
      return res.status(400).json({ status: false, message: 'Favor informar e-mail e senha para proseguir.' });
    }
    const response = await LoginService.createLogin(email, password);

    if (LoginService.flag) {
      return res.status(200).json(response);
    }
    return res.status(400).json({ status: false, message: LoginService.message });
  }
}

export default new LoginController();