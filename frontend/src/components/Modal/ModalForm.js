import React from 'react';

import { IoIosCloseCircle } from 'react-icons/io';

export default function ModalForm({ labelHeader, setOpenModal, form }) {

  async function handleSubmit(e) {

    e.preventDefault();

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
                <input className="input-login" type="text" id={input.name} name={input.name} onChange={(e) => input.set(e.target.value)} autoComplete="off" />
              </div>
            )}
            <button className="btn-form" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </section>
  )
}