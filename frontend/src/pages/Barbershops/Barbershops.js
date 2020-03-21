import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Menu from '../../components/Menu/Menu';
import Loading from '../../components/Loading/Loading';

export default function Barbershops() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBarberShops();
  }, []);

  async function getBarberShops() {

    try {

      const response = await api.get('/barbershops');
      console.log(response);
    } catch (error) {

    }
  }

  return (
    <div>
      {loading ? <Loading /> : ''}
      <Menu />
      <div className="container">

      </div>
    </div>
  )
}