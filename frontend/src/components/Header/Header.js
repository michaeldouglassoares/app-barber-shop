import React from 'react';

import { Button, Navbar, Nav, Form } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Barber Shop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/schedule">Agenda</Nav.Link>
          <Nav.Link href="/profile">Meu perfil</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-info">Sair</Button>
        </Form>
      </Navbar>
    </>
  )
}