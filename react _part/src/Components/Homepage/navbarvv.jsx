import React from 'react';
import { ToolsIcon } from '@iconbox/oct';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'


function navbarvv() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="#0B58CA">
            <Container>

                <Navbar.Brand href="#home">
                    <ToolsIcon style={{width:"30px"}} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            Home
                        </Nav.Link>
                        <NavDropdown style={{color:'#0B58CA'}}  title="Me" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#deets">GPS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbarvv
