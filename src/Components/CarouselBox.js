import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import girl1 from '../assets/girl1.jpg'
import girl2 from '../assets/girl2.jpg'


export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: '100%' }}
            className='d-block'
            src={girl1}
            alt="girl1"
          />
          <Carousel.Caption>
            <h1>Girl on beach</h1>
            <p>bla bla bla bla bla bla bla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: '100%' }}
            className='d-block'
            src={girl2}
            alt="girl2"
          />
          <Carousel.Caption>
            <h1>Girl on beach</h1>
            <p>bla bla bla bla bla bla bla</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
