import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shippingCost = 0;
  
  
  const pizzas=[]
  
  for(let i =0;i<cartItems.length;i++){
    
    pizzas.push({
      "pizzaName":cartItems[i].name,
      "quantity":cartItems[i].quantity
    })
  
  
  }
  
  
  const [pizzainfo,setPizzaInfo]=useState(pizzas)
  const totalAmount = cartTotalAmount + Number(shippingCost);
  const submitHandler = async (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      phone: enterNumber,
      address: enterAddress,
      postalCode: postalCode,
      pizza:pizzainfo,
      billAmount:totalAmount
    };

    const data=await axios.post("http://localhost:5000/checkout",userShippingAddress)
    window.location = `/status/${data.data._id}`
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <h2>.....      Checkout</h2>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    onChange={(e) => setEnterAddress(e.target.value)}
                  />
                </div>
                {/* <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div> */}
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn" >
                  Confirm order
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>Rs.{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>Rs.{shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>Rs.{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
