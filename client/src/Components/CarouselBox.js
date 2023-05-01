import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img 
            className='d-block w-100'
            
            alt='Prog1'
            />
            <Carousel.Caption>
                <h3>Prog image</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
            className='d-block w-100'
         
            alt='langprog'
            />
            <Carousel.Caption>
                <h3>Prog image</h3>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
