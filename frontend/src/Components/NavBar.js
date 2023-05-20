import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export const NavBar = () => {

    const dropdownTitle = 'Estadisticas'

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href='/'>Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={`${dropdownTitle}`} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/individualStats"> Individuales </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/groupStats"> Grupales </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/meme">Hello there</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
