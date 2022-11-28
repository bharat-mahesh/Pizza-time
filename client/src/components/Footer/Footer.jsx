import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>JUST ONE MORE BITE</h5>
              <p>
                WE COMMIT !!
                <br></br>
                U WONT BE ABLE TO RESIST
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Our POLICIES</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Privacy</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Terms and conditions</span>
              </ListGroupItem>
            
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Help and FAQs</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Kandivali (west), mumbai-400067</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 123456789</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: mern@somaiya.edu</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Follow US</h5>
            <p>Connect  with us for any suggestion</p>
            <div className="feedback">
              <span>
              <i class="ri-twitter-fill"></i>
              <br></br>
              <i class="ri-instagram-fill"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
