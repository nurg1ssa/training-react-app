import React, { Component } from 'react'
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap'


export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Card className='m-5'>
              <Row>
                <Col md="2">
                  <img
                    width={150}
                    height={150}
                    className="mr-3"
                    src='https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  />
                </Col>
                <Col md="7">
                  <Card.Body>
                    <h5>Blog post</h5>
                    <p> bla bla bla bla bla</p>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className='m-5'>
              <Row>
                <Col md="2">
                  <img
                    width={150}
                    height={150}
                    className="mr-3"
                    src='https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  />
                </Col>
                <Col md="7">
                  <Card.Body>
                    <h5>Blog post</h5>
                    <p> bla bla bla bla bla</p>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className='m-5'>
              <Row>
                <Col md="2">
                  <img
                    width={150}
                    height={150}
                    className="mr-3"
                    src='https://images.pexels.com/photos/913807/pexels-photo-913807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  />
                </Col>
                <Col md="7">
                  <Card.Body>
                    <h5>Blog post</h5>
                    <p> bla bla bla bla bla</p>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md="3">
            <h5 className='text-center mt-5'>Categories</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>Bla bla bla</ListGroup.Item>
                <ListGroup.Item>Bla bla bla</ListGroup.Item>
                <ListGroup.Item>Bla bla bla</ListGroup.Item>
                <ListGroup.Item>Bla bla bla</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mt-3'>
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla Bla bla
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
