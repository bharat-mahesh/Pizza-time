import React, { useRef, useEffect, useState } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Pizzas",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };


  useEffect(() => {
    if (localStorage.getItem("user") !== null){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  const Logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location = "/home"
  }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>JUST ONE MORE BITE</h5>
          </div>

          {/* header content*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-3">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== cart icon and login button on right ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
            <i class="ri-shopping-cart-2-fill"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              {isLoggedIn && (<Link to="#" onClick={Logout}>Logout</Link>)}
              {!isLoggedIn && (<Link to="/login"><i class="ri-user-3-fill"></i></Link>)}
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-fill"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
