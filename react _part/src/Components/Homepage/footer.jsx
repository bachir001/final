import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function Footer() {
    return (
        <Navbar expand="lg" bg="dark" >

            <Nav.Link href="#features" style={{ width: "50%", margin: "auto",color:"#fff" }}> © Copyright 2021 </Nav.Link>

        </Navbar>

    )
}

export default Footer;
