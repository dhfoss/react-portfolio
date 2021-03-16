import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar.css';

const App = () => {
  return (

        <Navbar
        bg="secondary" 
        expand="lg"
        className="h2"
        >
            <Navbar.Brand href="/"><span className="h1 mr-3">DHF</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="mr-3" href="/">Home</Nav.Link>

                    <NavDropdown className="mr-3" title="Portfolio" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/portfolio">My Projects</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/portfolio#burntPopkorn">Burnt Popkorn</NavDropdown.Item>
                        <NavDropdown.Item href="/portfolio#minionMingle">Minion Mingle</NavDropdown.Item>
                        <NavDropdown.Item href="/portfolio#employeeDirectory">Employee Directory</NavDropdown.Item>
                        <NavDropdown.Item href="/portfolio#weatherDashboard">Weather Dashboard</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className="mr-3" href="/resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default App;