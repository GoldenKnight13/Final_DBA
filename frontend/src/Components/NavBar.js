import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export const NavBar = () => {

    const dropdownTitle = 'Estadisticas'

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href='/'>Restaurantes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/graph'>Graph</Nav.Link>
                        <Nav.Link href='/showDataPage'>Show Data</Nav.Link>
                        <Nav.Link href='/proof'>Proof</Nav.Link>
                        <NavDropdown title={`${dropdownTitle}`} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/individualStats">Individuales</NavDropdown.Item>
                            <NavDropdown.Item href="/groupStats">
                                Grupales
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
