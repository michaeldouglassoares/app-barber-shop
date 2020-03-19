import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Menu from '../../components/Menu/Menu';
import Loading from '../../components/Loading/Loading';

export default function Home() {

  useEffect(() => {

    getMyClients();
  }, []);

  async function getMyClients() {

    try {

      //const response = await api.get('/clients');
    } catch (error) {

    }

    return true;
  }

  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? <Loading /> : ''}
      <Menu />
      <div className="container-home">
        <div className="header-home">
          <strong className="qtd-clients">Atendidos: 50</strong>
          <strong className="qtd-clients">Aguardando: 50</strong>
        </div>
        <div className="body-home">
          <div className="table-home"></div>
        </div>
      </div>
    </div>
  )
}