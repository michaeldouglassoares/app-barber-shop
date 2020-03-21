import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Menu from '../../components/Menu/Menu';
import Loading from '../../components/Loading/Loading';
import { IoIosAddCircle } from 'react-icons/io';

export default function Barbershops() {

  const [loading, setLoading] = useState(true);
  const [barberShops, setBarberShops] = useState([]);

  useEffect(() => {
    getBarberShops();
  }, []);

  async function getBarberShops() {

    try {

      const response = await api.get('/barbershops');

      if (response.status === 200) {
        setLoading(false);
        setBarberShops(response.data);
      }
    } catch (error) {

    }
  }

  return (
    <div>
      {loading ? <Loading /> : ''}
      <Menu />
      <section className="container-body" id="container-body">
        <div className="header-body">
          <div className="header-left">
            <strong>Listagem barbearias</strong>
          </div>
          <div className="header-right">
            <div className="space-new-barber">
              <strong><IoIosAddCircle />Nova unidade</strong>
            </div>
          </div>
        </div>
        <div className="container-barber">
          <div className="container-table-barber">
            <div className="body-table-barber">
              <div className="radius-table">
                <div className="header-table">
                  <ul className="itens-table">
                    <li className="row-header">NOME</li>
                    <li className="row-header">ENDEREÇO</li>
                    <li className="row-header">BAIRRO</li>
                    <li className="row-header">NUMERO</li>
                    <li className="row-header">Nº BARBEIROS</li>
                  </ul>
                </div>
                <div className="result-table">
                  {barberShops.map((barberShop, index) =>
                    <ul key={index} className="itens-table">
                      <li className="row-header">{barberShop.name}</li>
                      <li className="row-header">{barberShop.address}</li>
                      <li className="row-header">{barberShop.bairro}</li>
                      <li className="row-header">{barberShop.number}</li>
                      <li className="row-header">5</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}