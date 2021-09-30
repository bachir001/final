import React from 'react';
import { ToolsIcon } from '@iconbox/oct';
import CookieService from '../../CookieService';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import menu from './menu.svg'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';


function Navbarvv() {

    let history = useHistory();

    if (CookieService.get("Token")) {
        var id =CookieService.get("_id");
    }


    const logoutevent = async (e) => {

        e.preventDefault();
      //  1070FD
        try {
            const res = await fetch(`http://localhost:3001/users/logout/${id}`, {
                method: "post",
            });
            if (res) {

                CookieService.remove("Token");
                CookieService.remove("_id");
                CookieService.remove("Role");
                history.push("/");
            }



        } catch (e) {
            alert(e);
        }
    };




    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="primary">
            <Container>

                <Navbar.Brand href="/">
                    <ToolsIcon style={{ width: "30px" }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginTop:"1.2rem", color:"#212529", backgroundImage:`url(${menu})` ,backgroundSize:"20px" ,backgroundRepeat:"no-repeat"}} />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                    </Nav>
                    <Nav >
                        <Nav.Link eventKey={2} href="/">
                            About Us
                        </Nav.Link>

                        {CookieService.get("Token") ? (

                            <NavDropdown style={{ color: '#0B58CA' }} title="Me" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/addshop">Add Shop</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <Link to="" className="nav_link nav_logout"
                                    style={{ textDecoration: 'none', color: "#1E2125", marginLeft: "12px" }}
                                    onClick={logoutevent}>
                                    <i className="bx bx-log-out bx-tada nav__icon"></i>
                                    <span className="nav__name">Logout</span>
                                </Link>
                            </NavDropdown>
                        ) : (

                            <Nav.Link href="/signin">Signin</Nav.Link>

                        )}


                        <Nav.Link href="/shopsp">Shops</Nav.Link>


                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarvv
