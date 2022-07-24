import { Button } from 'bootstrap';
import React, { Component } from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import logo from './../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="logo">
                        </img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/'> Home </Nav.Link>
                            <Nav.Link href='about'> About Us </Nav.Link>
                            <Nav.Link href='contacts'> Contact Us </Nav.Link>
                            <Nav.Link href='blog'> Blog </Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type='text'
                                placeholder='Search'
                                className='me-sm-2'/>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
