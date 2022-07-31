import React, { Component } from 'react'
import { Card, Container, CardGroup, Button } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our team</h2>
          <CardGroup className='m-4'>
            <Card className='m-2' bg='warning'>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/7157628/pexels-photo-7157628.jpeg?auto=compress&cs=tinysrgb&w=800'
              />
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  bla bla bla bla bla bla
                </Card.Text>
                <Button variant='primary'>About us</Button>
              </Card.Body>
            </Card>
            <Card className='m-2'>
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  bla bla bla bla bla bla
                </Card.Text>
                <Button variant='primary'>About us</Button>
              </Card.Body>
              <Card.Img
                variant='bottom'
                src='https://images.pexels.com/photos/7157628/pexels-photo-7157628.jpeg?auto=compress&cs=tinysrgb&w=800'
              />
            </Card>
            <Card className='m-2' bg='warning'>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/7157628/pexels-photo-7157628.jpeg?auto=compress&cs=tinysrgb&w=800'
              />
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  bla bla bla bla bla bla
                </Card.Text>
                <Button variant='primary'>About us</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
    )
  }
}
