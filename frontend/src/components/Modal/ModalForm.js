import React from 'react';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { IoIosCloseCircle } from 'react-icons/io';

export default function ModalForm({ route, values, labelHeader, setOpenModal, form }) {

  const history = useHistory();

  async function handleSubmit(e) {

    e.preventDefault();

    const inputs = document.querySelectorAll('.input-form');

    var flag = false;
    var params = {};
    for (var i = 0; i <= inputs.length; i++) {
      const input = inputs[i];

      if (input !== undefined) {
        if (input.value === '') {
          flag = true;
        } else {
          var name = input.name;
          params[name] = input.value;
        }
      }
    }
    if (flag) alert('preencha todos os campos.');

    try {

      const response = await api.post(route, params);
      if (response.status === 200) {
        values.push(response.data);
        setOpenModal(false);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        history.push('/');
      }
    }
  }

  return (
    <section className="container-modal" id="container-modal">
      <div className="box-modal">
        <div className="header-modal-form">
          <div className="header-modal-label">{labelHeader}</div>
          <div className="header-modal-close">
            <div className="icon-close" onClick={() => setOpenModal(false)}>
              <IoIosCloseCircle />
            </div>
          </div>
        </div>
        <div className="form-modal">
          <form className="form-login" onSubmit={handleSubmit}>
            {form.map((input, index) =>
              <div key={index} className="inputs-form">
                <label className="label-input" htmlFor={input.name}>{input.label}:</label>
                <input className="input-form" type="text" name={input.name} autoComplete="off" />
              </div>
            )}
            <button className="btn-form" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </section>
  )
}