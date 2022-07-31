import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default class Contact extends Component {
  render() {
    return (
      <Container style={{width:'500px'}}>
        <h1 className='text-center'>Contact Us</h1>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email'></Form.Control>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
          <Form.Label>Example textarea</Form.Label>
            <Form.Control as='textarea' rows='3' placeholder='Enter email'></Form.Control>
            </Form.Group>
            <Form.Group controlId='formBasicCheckBox'>
          <Form.Label>Example textarea</Form.Label>
            <Form.Check type='checkbox' label='Check me out'></Form.Check>
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
