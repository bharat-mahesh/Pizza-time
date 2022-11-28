import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";


import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";


const featureData = [
  {
    title: "Free and Quick Delivery",
    imgUrl: featureImg01,
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
  },
];

const Home = () => {
  const [allProducts, setAllProducts] = useState(products);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">WE ARE SOON GOING INTERNATIONAL !</h5>
                <h1 className="mb-4 hero__title">
                  <span>CRAVING?</span> Dont Overthink <br /> 
                  <span> It's Just One More Bite</span>
                </h1>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">Grab Pizza</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                    <i class="ri-e-bike-2-fill"></i>
                    </span>{" "}
                    Free Delivery
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                    <i class="ri-service-fill"></i>
                    </span>{" "}
                    30 min Delivery Guaranteed
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we do?</h5>
              <h2 className="feature__title">You Just Have To Grab A Bite</h2>
              <p className="mb-1 mt-4 feature__text">
                We deliver fresh hand tossed pizza with all the precautions straight to your doorstep!
              </p>
              <p className="feature__text">
                We have all the kinds of breads that you can try according to your mood.
                {" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Pizza</h2>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Choose US?</span>
                </h2>
                <p className="tasty__treat-desc">
                  
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Access to different categories of pizza
                    </p>
                    <p className="choose__us-desc">
                    The pizza delivery application is providing access to the customers over different categories of pizza. They can choose their favorite one from an online application and have enjoyment.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                    If there is much crowd at the application, then a schedule order option is also provided at the pizza ordering application. You can schedule your order, and it will be delivered to your home at the specified time.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Real-time order tracking{" "}
                    </p>
                    <p className="choose__us-desc">
                    The application will enable the customers to take advantage of real-time order tracking. The tracking of the pizza order is possible to get delivery at the specified time. It is one of the best features available with the application for getting an order at the doorstep.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
