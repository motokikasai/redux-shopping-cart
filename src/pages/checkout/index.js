import React, { Component } from "react";
import { Link } from "react-router-dom";

import close from "../../images/icons/close.png";

class Checkout extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <div className="back-icon">
            <img src={close} className="close-icon" alt="back-icon" />
          </div>
        </Link>
        <section>{/* each item selected... */}</section>
        <div className="not-found">Cart is empty. Start shopping now!</div>
      </div>
    );
  }
}

export default Checkout;
