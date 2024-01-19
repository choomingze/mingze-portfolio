import { Navbar, Container,Nav, NavDropdown } from 'react-bootstrap' ;
import { useState } from "react";
export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
      console.log(activeLink)
    return (
        <Navbar expand="md" className='NavBar' >
            <Container>
                <Navbar.Brand href="#aboutme" className='Navbar_Brand 'onClick={() => onUpdateActiveLink('aboutme')}>Ming</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                    
                
                <Nav className="ms-auto">
                    <Nav.Link href="#aboutme" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experinces')}>Experinces</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )

}