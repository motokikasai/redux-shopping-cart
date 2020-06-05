import React, { Component } from "react";

import logo from "../../logo.svg";
import bag from "../../images/icons/bag.svg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="log">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="cart-snippet">
            <img src={bag} className="bag-icon" alt="bag-icon" />
            <div className="item-counter">0</div>
          </div>
        </div>
        <div className="product-list">
          <div className="main-content">Home page...</div>
        </div>
      </div>
    );
  }
}

export default Home;
