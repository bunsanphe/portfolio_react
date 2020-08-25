import React from "react";
import {Navbar} from "react-bootstrap";
import {Container} from "../Grid"


function Navi() {
  return (
    <Container fluid>
    <Navbar variant="light" bg="light" expand="lg">
        <Navbar.Brand>Bunsan Heng Phe</Navbar.Brand>
        {/* <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav> */}
    </Navbar>
    </Container>
  );
}

export default Navi;