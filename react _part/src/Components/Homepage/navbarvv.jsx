import React from 'react';
import { ToolsIcon } from '@iconbox/oct';
import CookieService from '../../CookieService';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import menu from './menu.svg'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';


const x = {};

function Navbarvv() {

    let history = useHistory();

    if (CookieService.get("Token")) {
        var id = CookieService.get("_id");
    }


    const logoutevent = async (e) => {

        e.preventDefault();
        //  1070FD
        try {
            const res = await fetch(`https://mechanical-delivery.onrender.com/users/logout/${id}`, {
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

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="danger">
            <Container>

                <Navbar.Brand href="/">
                    <ToolsIcon className="navdrop" style={{ width: "30px" ,color:"#fff"}} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginTop: "1.2rem", color: "#212529", backgroundImage: `url(${menu})`, backgroundSize: "20px", backgroundRepeat: "no-repeat" }} />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto" >
                    </Nav>
                    <Nav >

                        {CookieService.get("Token") ? (

                            <NavDropdown className="navdrop" style={{ color: '#fff' }} title="Me" id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link className="navdrop" style={{ textDecoration: 'none', marginLeft: "12px"}}to="/profile">Profile</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="navdrop" style={{ textDecoration: 'none', marginLeft: "12px"}}to="/addshop">Add Shop</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <Link to="" className="nav_link nav_logout"
                                    style={{ textDecoration: 'none', color: "#1E2125", marginLeft: "12px" }}
                                    onClick={logoutevent}>
                                    <i className="bx bx-log-out bx-tada nav__icon"></i>
                                    <span className="nav__name">Logout</span>
                                </Link>
                            </NavDropdown>
                        ) : (
                            <Nav.Link className="navdrop"> <Link  to="/signin">signin</Link></Nav.Link>
                        )}

                        <Nav.Link className="navdrop"> <Link to="/shopsp">Shops</Link> </Nav.Link>

                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarvv
