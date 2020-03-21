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

  const [loading, setLoading] = useState(true);
  const [schedules, setSchedules] = useState([]);

  async function schedule() {

    try {

      const response = await api.get('/schedules');

      if (response.status === 200) {
        setLoading(false);
        setSchedules(response.data);
      }

    } catch (error) {
      if (error.response.status === 401) {
        sessionStorage.clear();
        window.location.href = '/';
      }
    }
  }

  function openModalEdit(schedule) {
    console.log(schedule);
  }

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
                ({schedules.map((schedule) =>
                  <ul className="itens-table">
                    <li className="row-header">{schedule.name_client}</li>
                    <li className="row-header">{new Date(schedule.schedule).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</li>
                    <li className="row-header">{schedule.service}</li>
                    <li className="row-header btn-edit"><FaUserEdit onClick={() => openModalEdit(schedule)} /></li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}