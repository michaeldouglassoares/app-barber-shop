import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    width: '500px',
    height: '300px',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default function ModalMain({ viewModal, message }) {
  const [modalIsOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" >
        <div className="header-modal">
          <h2>Atenção</h2>
        </div>
        <div className="message-modal">{message}</div>
        <div className="btn-modal">
          <button className="btn-form" onClick={() => viewModal(false)}>Fechar</button>
        </div>
      </Modal>
    </div>
  );
}
