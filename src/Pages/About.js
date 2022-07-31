import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mt-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Team</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Programming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={4}>
                <Tab.Content className='mt-3'>
                  <Tab.Pane eventKey="first">
                    <img
                      src='https://media.istockphoto.com/photos/get-out-those-hats-summers-here-picture-id1074886550?k=20&m=1074886550&s=612x612&w=0&h=UuRSDq7UrOeE5xrIl6Kz90bks4Sr94aURmzD-oCpVJY='
                      style={{ width: '100%' }}

                    />
                    first
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <img
                      src='https://media.istockphoto.com/photos/get-out-those-hats-summers-here-picture-id1074886550?k=20&m=1074886550&s=612x612&w=0&h=UuRSDq7UrOeE5xrIl6Kz90bks4Sr94aURmzD-oCpVJY='
                      style={{ width: '100%' }}

                    />
                    second
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <img
                      src='https://media.istockphoto.com/photos/get-out-those-hats-summers-here-picture-id1074886550?k=20&m=1074886550&s=612x612&w=0&h=UuRSDq7UrOeE5xrIl6Kz90bks4Sr94aURmzD-oCpVJY='
                      style={{ width: '100%' }}

                    />
                    third
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <img
                      src='https://media.istockphoto.com/photos/get-out-those-hats-summers-here-picture-id1074886550?k=20&m=1074886550&s=612x612&w=0&h=UuRSDq7UrOeE5xrIl6Kz90bks4Sr94aURmzD-oCpVJY='
                      style={{ width: '100%' }}

                    />
                    fourth
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <img
                      src='https://media.istockphoto.com/photos/get-out-those-hats-summers-here-picture-id1074886550?k=20&m=1074886550&s=612x612&w=0&h=UuRSDq7UrOeE5xrIl6Kz90bks4Sr94aURmzD-oCpVJY='
                      style={{ width: '100%' }}

                    />
                    fifth
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    )
  }
}
