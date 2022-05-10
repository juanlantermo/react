import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import {Container, Navbar, Nav,NavDropdown} from "react-bootstrap";
export default function Navbarfun({category1,category2,category3}){
    return (
    <header className="header">
                <div className="logo">
                <CartWidget/>
                </div>  
                <Navbar  id="nav" bg="light" expand="lg">
                        <Container>
                            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" >
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">{category1}</Nav.Link>
                                <Nav.Link href="#link">{category2}</Nav.Link>
                                <Nav.Link href="#link">{category3}</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
                        
        </header>
    );
}