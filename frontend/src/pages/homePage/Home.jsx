import React from 'react';
import './Home.scss'
import { Container, Row, Col } from "reactstrap";
import { HiArrowNarrowRight } from 'react-icons/hi';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Garten from '../../assets/Garten.jpg';
import Kleidung from '../../assets/Kleidung.jpg';
import Book03 from '../../assets/Book-03.jpg';
import Spielzeug from '../../assets/Spielzeug-03.jpg';
import Decoration from '../../assets/Decoration.jpg';
import Book from '../../assets/Book.jpg';






const Home = () => {
  return (
  <>
   <section>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className='text_content'>
            <h2 className='logo_text mb-4 '>
            Sharing is Caring - 
            </h2>
            <h2 className="mb-4 text_title">
                  <span>" Teaching our children to share is teaching  them </span> <br /> 
                  <span> compassion and love. "</span>
            </h2>
            <p>Kevin Heath</p>
          </div>
          <div className="">
          <button className="category_btn d-flex justify-content-center ">
            Category
                <span className='category_icon'>
                  <HiArrowNarrowRight/>
                </span>
          </button>  
          </div>
          
        </Col>
        <Col lg="6" md="6" >
          <Carousel className='m-2 p-1'>
              <div>
                  <img src={Garten} alt="Legend-1" />
                  <p className="legend">Garten</p>
              </div>
              <div>
                  <img src={Kleidung} alt="Legend-1"/>
                  <p className="legend">Kleidung</p>
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
   <section>
    <Container>
      <Row>
        <Col lg="12">
        <h2 className="text-center">POPULAR CATEGORIES</h2>
        <div className="popular_category d-flex align-items-center justify-content-center gap-3 ">
     <button className='all_category'>All</button>

     <button className='d-flex align-items-center gap-2'>
      <img src={Garten} alt="Garten_1" />
      Garten
      </button>

     <button className='d-flex align-items-center gap-2'>
      <img src={Book} alt="Book_03" />
      Book
      </button>

      <button className='d-flex align-items-center gap-2'>
      <img src={Decoration} alt="Decoration" />
      Decoration</button>

      <button className='d-flex align-items-center gap-2'>
      <img src={Kleidung} alt="Clothes" />
      Clothes</button>
        </div>
        </Col>
      </Row>
    </Container>
   </section>
   </>
  );
};

export default Home