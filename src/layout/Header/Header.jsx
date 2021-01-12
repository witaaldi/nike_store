import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/icons/logo.svg";
import user from "../../assets/icons/user.svg";
import bag from "../../assets/icons/shopping-bag.svg";
import burger from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";
import chevron_down from "../../assets/icons/chevron_down.svg";
import fs from "../../assets/icons/free-delivery.svg";

import "./Header.css";

const Header = () => {
  const [navState, setNavState] = useState(false);
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState("English");
  const numberCart = useSelector((state) => state._bundle.numberCart);

  return (
    <Fragment>
      <header className={`${navState ? "open" : ""}`}>
        <div className="topBar">
          <div className="container">
            <div className="selectLang column">
              <button className="btnLang" onClick={() => setShow(!show)}>
                {lang}{" "}
                <img
                  src={chevron_down}
                  className={`${show ? "flip" : ""}`}
                  alt="Select Language"
                />
              </button>
              <ul className={`langList ${show ? "show" : ""}`}>
                <li
                  onClick={() => {
                    setLang("English");
                    setShow(!show);
                  }}
                >
                  English
                </li>
                <li
                  onClick={() => {
                    setLang("Indonesia");
                    setShow(!show);
                  }}
                >
                  Indonesia
                </li>
              </ul>
            </div>
            <div className="fs-note column">
              <img src={fs} alt="Free Shipping" />
              free shipping over $100 purchase
            </div>
            <ul className="right-list column">
              <li>Shipping</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <nav className="nav">
            <div className="menu-toggle" onClick={() => setNavState(!navState)}>
              <img src={burger} className="iconBars" alt="Open Nav" />
              <img src={close} className="iconClose" alt="Close Nav" />
              <i className="fas fa-bars"></i>
              <i className="fas fa-times"></i>
            </div>
            <Link to="/nike_store" className="logo">
              <img src={logo} alt="Nike Store" />
            </Link>
            <ul className="nav-list">
              <li className="userOnMobile">
                <img src={user} alt="Your Profile" />
              </li>
              <li className="nav-item">
                <Link
                  to="/nike_store"
                  className="nav-link active"
                  onClick={() => (navState ? setNavState(!navState) : null)}
                >
                  New Releases
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#"
                  className="nav-link"
                  onClick={() => (navState ? setNavState(!navState) : null)}
                >
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#"
                  className="nav-link"
                  onClick={() => (navState ? setNavState(!navState) : null)}
                >
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#"
                  className="nav-link"
                  onClick={() => (navState ? setNavState(!navState) : null)}
                >
                  Kids
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#"
                  className="nav-link"
                  onClick={() => (navState ? setNavState(!navState) : null)}
                >
                  Customize
                </Link>
              </li>
            </ul>
            <ul className="menu-right">
              <li>
                <Link to="nike_store/your-bag">
                  <img src={bag} alt="Your Bag" />
                  <div className="bag-count">{numberCart}</div>
                </Link>
              </li>
              <li>
                <img src={user} alt="Your Profile" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
