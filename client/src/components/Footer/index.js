import React from "react";
import {Container,Nav, Navbar, NavbarBrand} from "react-bootstrap"

function Footer(){
    return (
        <div className="fixed-bottom">
        <Nav className="justify-content-center">
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand>&copy: Established 2020 - The Corona ERA </NavbarBrand>
            </Container>
        </Navbar>
        </Nav>
        </div>
    )
}

export default Footer;