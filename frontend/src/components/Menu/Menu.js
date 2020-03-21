import React, { useState } from 'react';

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
    </section>
  )
}