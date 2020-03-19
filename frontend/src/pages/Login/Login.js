import React, { useState } from 'react';

import api from '../../services/api';

import Loading from '../../components/Loading/Loading';

export default function Login() {

  const [date] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      if (email === '' && password === '') {
        alert('Preencha todos os campos.');
        return;
      }

      setLoading(true);
      const response = await api.post('/login', { email, password });

      if (response.status === 200) {
        sessionStorage.setItem('token', response.data);
        window.location.href = '/home';
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  }

  return (
    <div className="all-content-login">
      {loading ? <Loading /> : ''}
      <div className="head-login">
        <div className="logo-login"></div>
      </div>
      <div className="row center ">
        <div className="container-login">
          <div className="row center column">
            <div className="title-login">Insira seus dados para <br className="hide-pc"></br> prosseguir com o atendimento:</div>
            <div className="area-form-initial">
              <form onSubmit={handleSubmit}>
                <div className="content-box-login">
                  <div id="area-pf">
                    <div className="column m-20">
                      <label className="gray-login" htmlFor="field-cpf">E-mail:</label>
                      <input className="input-login row" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" autoFocus />
                    </div>
                    <div className="column m-20">
                      <label className="gray-login">Senha:</label>
                      <input className="input-login row" value={password} onChange={e => setPassword(e.target.value)} type="password" autoComplete="off" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="row center">
                      <button type="submit" className="bt-default m-20">Continuar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="footer center">
        </div>
      </div>
    </div>
  )
}