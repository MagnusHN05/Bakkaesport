import React from "react";
import { Nav, Button, Navbar, Container } from 'react-bootstrap';
import logo from "../images/EsportLogo.png";

export default function NavbarComp(props) {
    return (
        <>
            <Navbar variant="dark" className="py-5" fixed="top" style={{backgroundImage: "linear-gradient(to top, transparent, #000)"}}>
              <Container>
                <Navbar.Brand href="/">
                  <img
                    alt="BakkaEsport logo"
                    src={logo}
                    width="64"
                    height="64"
                    className="d-inline-block align-top"
                  />{' '}
                </Navbar.Brand>
                <Nav
                  activeKey={props.activeKey}
                  className="justify-content-center"
                  // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                  <Nav.Item>
                    <Nav.Link eventKey="Home" href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Nyheter" href="/Nyheter">Nyheter</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Live" href="/Live">Live</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Spillere" href="/Spillere">Spillere</Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Container>
            </Navbar>
        </>
    )
}