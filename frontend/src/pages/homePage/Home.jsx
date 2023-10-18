import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { HiArrowNarrowRight } from 'react-icons/hi';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Garten from '../../assets/Garten.jpg';
import Book from '../../assets/Book-01.jpg';
import Book03 from '../../assets/Book-3.jpg';

import Spielzeug from '../../assets/Spielzeug-2.jpg'


const Home = () => {
  return (
   <section>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className='text_content mt-4'>
            <h4 className='mb-2 '>
            Sharing is Caring - 
            </h4>
            <h2 className="mb-4 text_title">
                  <span>Teaching our children to share is teaching  them </span> <br /> 
                  <span> compassion and love.</span>
            </h2>
            <p>Kevin Heath</p>
          </div>
          <div className="text_btns d-flex align-items-center gap-5 mt-3">
          <button className="bestellt_btn d-flex align-items-center justify-content-between">
            Category
                <HiArrowNarrowRight className='ml- my-1 p-1' />
          </button>  
          </div>
          
        </Col>
        <Col lg="6" md="6" >
          <Carousel className='m-2 p-1'>
              <div className=''>
                  <img src={Garten} alt="Legend-1"/>
                  <p className="legend">Garten</p>
              </div>
              <div>
                  <img src={Book} alt="Legend-1" />
                  <p className="legend">Book</p>
              </div>
              <div>
                  <img src={Book03} alt="Legend-1" />
                  <p className="legend">Book</p>
              </div>
              <div>
                  <img src={Spielzeug} alt="Legend-1" />
                  <p className="legend">Spielzeug</p>
              </div>              
            </Carousel>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Home