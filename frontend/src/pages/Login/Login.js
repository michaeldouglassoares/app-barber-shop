import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import Modal from '../../components/Modal/Modal';
import Loading from '../../components/Loading/Loading';

export default function Login() {

  const history = useHistory();
  const [viewModal, setViewModal] = useState(false);
  const [messageModal, setMessaModal] = useState('');

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      if (email === '' && password === '') {
        setViewModal(true);
        setMessaModal('Favor preencher todos os campos.');
        return;
      }

      setLoading(true);
      const response = await api.post('/login', { email, password });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.response);
        localStorage.setItem('name', response.data.name);
        history.push('/home')
      }
    } catch (error) {
      if (error.response.status === 400) {
        setLoading(false)
        setViewModal(true);
        setMessaModal(error.response.data.message);
        return;
      }
    }
  }

  return (
    <div className="container-login">
      {loading ? <Loading /> : ''}
      {viewModal ? <Modal viewModal={setViewModal} message={messageModal} /> : ''}

      <div className="box-login">
        <label className="label-login">BARBER SHOP</label>
        <div className="form-login">
          <form className="form-login" onSubmit={handleSubmit}>
            <label className="label-input" htmlFor="email">E-MAIL:</label>
            <input className="input-form" type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} autoComplete="off" />
            <label className="label-input" htmlFor="email">SENHA:</label>
            <input className="input-form" type="password" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)} autoComplete="off" />
            <button className="btn-form" type="submit">Acessar</button>
          </form>
        </div>
      </div>
    </div>
  )
}