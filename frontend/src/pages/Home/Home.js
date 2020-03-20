import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Calendar from 'react-calendar';
import { FaUserEdit } from 'react-icons/fa'

import Menu from '../../components/Menu/Menu';
import Loading from '../../components/Loading/Loading';

export default function Home() {

  useEffect(() => {

    schedule();
  }, []);

  async function schedule() {

    try {

      const response = await api.get('/schedules');
      console.log(response);

    } catch (error) {

    }

    return true;
  }

  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? <Loading /> : ''}
      <Menu />
      <section className="container">
        <div className="header-home">
          <div className="container-left">
            <div className="row-left">Olá, {sessionStorage.getItem('name')}</div>
            <div className="row-left">20/03/2020</div>
          </div>
          <div className="container-qtd">
            <div className="qtd-attended">ATENDIDOS 50</div>
            <div className="qtd-waiting">AGUARDANDO 50</div>
          </div>
        </div>
        <div className="container-home">
          <div className="body-calendar">
            <div className="container-calendar">
              <Calendar />
            </div>
          </div>
          <div className="body-table">
            <div className="radius-table">
              <div className="header-table">
                <ul className="itens-table">
                  <li className="row-header">CLIENTE</li>
                  <li className="row-header">HORÁRIO</li>
                  <li className="row-header">SERVIÇO</li>
                  <li className="row-header">AÇÕES</li>
                </ul>
              </div>
              <div className="result-table">
                <ul className="itens-table">
                  <li className="row-header">Michael Douglas Soares</li>
                  <li className="row-header">15:00</li>
                  <li className="row-header">Barba/Cabelo</li>
                  <li className="row-header btn-edit"> <FaUserEdit /></li>
                </ul>
                <ul className="itens-table">
                  <li className="row-header">Matheus Afornali</li>
                  <li className="row-header">16:00</li>
                  <li className="row-header">Barba</li>
                  <li className="row-header btn-edit"> <FaUserEdit /></li>
                </ul>
                <ul className="itens-table">
                  <li className="row-header">Rafael Cardoso</li>
                  <li className="row-header">16:30</li>
                  <li className="row-header">Barba/Cabelo</li>
                  <li className="row-header btn-edit"> <FaUserEdit /></li>
                </ul>
                <ul className="itens-table">
                  <li className="row-header">Thiago Oliveira</li>
                  <li className="row-header">17:30</li>
                  <li className="row-header">Barba/Cabelo</li>
                  <li className="row-header btn-edit"> <FaUserEdit /></li>
                </ul>
                <ul className="itens-table">
                  <li className="row-header">Matheus Afornali</li>
                  <li className="row-header">16:00</li>
                  <li className="row-header">Barba</li>
                  <li className="row-header btn-edit"> <FaUserEdit /></li>
                </ul>
                <ul className="itens-table">
                  <li className="row-header">Rafael Cardoso</li>
                  <li className="row-header">16:30</li>
                  <li className="row-header">Barba/Cabelo</li>
                  <li className="row-header btn-edit"> <FaUserEdit /></li>
                </ul>
                <ul className="itens-table">
                  <li className="row-header">Thiago Oliveira</li>
                  <li className="row-header">17:30</li>
                  <li className="row-header">Barba/Cabelo</li>
                  <li className="row-header btn-edit"> <FaUserEdit /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}