import CartWidget from "../CartWidget/CartWidget";
import {Navbar, Container, Nav} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"
import Logo from "../Logo/Logo";
export default function Header () {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
          <Logo Link to="/"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink to="/">
                  Inicio
                </NavLink>
                <NavLink to="/products">
                  Productos
                </NavLink>
                <NavLink to="/category/1">
                  Categoria 1
                </NavLink>
                <NavLink to="/category/2">
                  Categoria 2
                </NavLink>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
}