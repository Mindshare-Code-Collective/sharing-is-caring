import React, { useState, useEffect, useContext } from 'react';
import './Home.scss';
import { Container, Row, Col, Input } from 'reactstrap';
import { HiArrowNarrowRight } from 'react-icons/hi';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Garten from '../../assets/Garten.jpg';
import Kleidung from '../../assets/Kleidung.jpg';
import Alle from '../../assets/Alle.png';
import Book03 from '../../assets/Book-03.jpg';
import Spielzeug from '../../assets/Spielzeug-03.jpg';
import Decoration from '../../assets/Decoration.jpg';
import Book from '../../assets/Book.jpg';
import ProductCard from '../dashboard/ProductCard';
import { AppContext } from '../../AppContext';

const Home = () => {
  const { userObject } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categoryNames = {
    All: 'Alle',
    Garten: 'Garten',
    Book: 'Bücher',
    Decoration: 'Dekoration',
    Clothes: 'Kleidung',
  };

  useEffect(() => {
    if (userObject && userObject.products) {
      let filtered = userObject.products;

      // Filter by category
      if (selectedCategory !== categoryNames.All) {
        filtered = filtered.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase());
      }

      // Filter by search term
      if (searchTerm.trim() !== '') {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        filtered = filtered.filter((product) => product.name.toLowerCase().includes(lowerCaseSearchTerm));
      }

      setFilteredProducts(filtered);
    }
  }, [selectedCategory, searchTerm, userObject]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderCategoryButtons = () => {
    return Object.values(categoryNames).map((category, index) => (
      <button
        key={index}
        className={`category_button ${selectedCategory.toLowerCase() === category.toLowerCase() ? 'active' : ''}`}
        onClick={() => handleCategoryChange(category)}
      >
        <img src={getImageByCategory(category)} alt={`${category} Image`} />
        {category}
      </button>
    ));
  };

  const getImageByCategory = (category) => {
    switch (category) {
      case categoryNames.Garten:
        return Garten || 'Garten';
      case categoryNames.Book:
        return Book || 'Book';
      case categoryNames.Decoration:
        return Decoration || 'Decoration';
      case categoryNames.Clothes:
        return Kleidung || 'Clothes';
      case categoryNames.All:
        return Alle || 'Alle';
      default:
        return category;
    }
  };

  return (
    <>
      <section className="header-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className='text_content'>
                <h2 className='logo_text mb-4 '>
                  Sharing is Caring -
                </h2>
                <h2 className="mb-4 text_title">
                  <span>" Teaching our children to share is teaching them </span> <br />
                  <span> compassion and love. "</span>
                </h2>
                <p>Kevin Heath</p>
              </div>
              <div className="">
                <button className="category_btn d-flex justify-content-center ">
                  Category
                  <span className='category_icon'>
                    <HiArrowNarrowRight />
                  </span>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <Carousel className="m-2 p-1" autoPlay={true} interval={3000}>
                <div>
                  <img src={Garten} alt="Garten" />
                  <p className="legend">Garten</p>
                </div>
                <div>
                  <img src={Kleidung} alt="Kleidung" />
                  <p className="legend">Kleidung</p>
                </div>
                <div>
                  <img src={Book03} alt="Book" />
                  <p className="legend">Book</p>
                </div>
                <div>
                  <img src={Spielzeug} alt="Spielzeug" />
                  <p className="legend">Spielzeug</p>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="category-section">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="text-center">POPULAR CATEGORIES</h2>
              <div className="popular_category d-flex align-items-center justify-content-center gap-3">
                {renderCategoryButtons()}
                <div className="search-bar">
                  <Input type="text" placeholder="Search by product name" value={searchTerm} onChange={handleSearchChange} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {filteredProducts && filteredProducts.map((product, index) => <ProductCard key={index} product={product} />)}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;