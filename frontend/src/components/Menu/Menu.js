import React from 'react';

export default function Menu() {
  return (
    <div className="container-menu">
      <div className="logo-menu">BARBERSHOP</div>
      <div className="list-menu">
        <ul>
          <li><div className="icon-itens-menu"></div><a href="/home">HOME</a></li>
          <li><div className="icon-itens-menu"></div><a href="/schedule">AGENDA</a></li>
          <li><div className="icon-itens-menu"></div><a href="/barbershops">BARBEARIAS</a></li>
          <li><div className="icon-itens-menu"></div><a href="/profile">MEU PERFIL</a></li>
          <li><div className="icon-itens-menu"></div><a href="/profile">RELATÓRIOS</a></li>
          <li><div className="icon-itens-menu"></div><a href="/">SAIR</a></li>
        </ul>
      </div>
    </div>
  )
}