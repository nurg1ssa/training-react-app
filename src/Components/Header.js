import React, { Component } from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button, Col, Row } from 'react-bootstrap'
import logo from './../logo.svg';


export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar fixed='top' collapseOnSelect expand="md" bg='dark' variant='dark'>
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
                            <Form>
                                <Row>
                                    <Col>
                                        <FormControl
                                            type='text'
                                            placeholder='Search'
                                            className='me-auto' />
                                    </Col>
                                    <Col>
                                        <Button variant='outline-info'>Search</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
