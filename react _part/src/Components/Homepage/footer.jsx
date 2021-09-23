import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function Footer() {
    return (
        <Navbar expand="lg" bg="dark" variant="#0B58CA" >

            <Nav.Link href="#features" style={{ width: "50%", margin: "auto" }}> © Copyright 2021 </Nav.Link>

        </Navbar>

    )
}

export default Footer;
