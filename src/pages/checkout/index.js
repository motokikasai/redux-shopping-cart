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
        <section className="product-review">
          <div className="summary-wrapper">
            <img src="../img.jpg" alt="product-pic" />
            <div className="summary-description">
              <div>Summary product title</div>
              <div>Price</div>
              <div>Qty</div>
            </div>
          </div>
          <button className="remove-selection">remove</button>
        </section>
        <section className="summary-total">
          <div className="summary">
            <p>Total</p>
            <div className="total-price">4372349727 EURO</div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Checkout;
