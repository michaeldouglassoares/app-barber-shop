import React from 'react';

import { IoIosBriefcase } from 'react-icons/io';
import { FaHome, FaCalendarAlt, FaBuffer, FaLongArrowAltRight, FaUserEdit } from 'react-icons/fa';

export default function Menu() {
  return (
    <div className="container-menu">
      <div className="logo-menu">BARBERSHOP</div>
      <div className="list-menu">
        <ul>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaHome />
            </div>
            <div className="link-menu">
              <a href="/home">HOME</a>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaCalendarAlt />
            </div>
            <div className="link-menu">
              <a href="/schedule">AGENDA</a>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <IoIosBriefcase />
            </div>
            <div className="link-menu">
              <a href="/barbershops">BARBEARIAS</a>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaUserEdit />
            </div>
            <div className="link-menu">
              <a href="/profile">MEU PERFIL</a>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaBuffer />
            </div>
            <div className="link-menu">
              <a href="/reports">RELATÓRIOS</a>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaLongArrowAltRight />
            </div>
            <div className="link-menu">
              <a href="/">SAIR</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}