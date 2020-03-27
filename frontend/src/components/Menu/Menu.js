import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { IoIosBriefcase, IoMdReorder } from 'react-icons/io';
import { FaHome, FaCalendarAlt, FaBuffer, FaLongArrowAltRight, FaUserEdit } from 'react-icons/fa';

export default function Menu() {

  const [viewMenu, setViewMenu] = useState(true);

  function openCloseMenu() {

    const classBody = document.getElementById('container-body');
    const classMenu = document.getElementById('container-menu');

    if (viewMenu) {
      classMenu.style.display = 'none';
      classBody.style.width = '100%';
      setViewMenu(true);
    } else {
      classMenu.style.display = 'none';
      classBody.style.width = 'calc(100% - 300px)';
      setViewMenu(false);
    }
  }
  return (
    <section className="container-menu" id="container-menu">
      <div className="space-menu">
        <div className="open-close-menu"><IoMdReorder onClick={openCloseMenu} /></div>
        <div className="logo-menu">BARBERSHOP</div>
      </div>
      <div className="list-menu">
        <ul>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaHome />
            </div>
            <div className="link-menu">
              <Link to="/home">HOME</Link>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaCalendarAlt />
            </div>
            <div className="link-menu">
              <Link to="/schedule">AGENDA</Link>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <IoIosBriefcase />
            </div>
            <div className="link-menu">
              <Link to="/barbershops">BARBEARIAS</Link>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaUserEdit />
            </div>
            <div className="link-menu">
              <Link to="/profile">MEU PERFIL</Link>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaBuffer />
            </div>
            <div className="link-menu">
              <Link to="/reports">RELATÓRIOS</Link>
            </div>
          </li>
          <li className="container-itens">
            <div className="icon-itens-menu">
              <FaLongArrowAltRight />
            </div>
            <div className="link-menu">
              <Link to="/">SAIR</Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}