import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import close from "../../images/icons/close.png";
import * as actions from "../../store/actionTypes";

class Checkout extends Component {
  clickHandler = (productObj) => {
    console.log("remove clicked!!!");
    console.log(productObj);

    this.props.deleteProduct(productObj);
  };

  render() {
    return (
      <div>
        <Link to="/">
          <div className="back-icon">
            <img src={close} className="close-icon" alt="back-icon" />
          </div>
        </Link>
        {this.props.productSelections.map((product) => {
          return (
            <section key={product.id} className="product-review">
              <div className="summary-wrapper">
                <img
                  src={require(`../../images/${product.imageUrl}`)}
                  className="preview-image"
                  alt="product-pic"
                />
                <div className="summary-description">
                  <div>{product.title}</div>
                  <div>{`${new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(product.price)}`}</div>
                  <div>Qty</div>
                </div>
              </div>
              <button
                onClick={() => this.clickHandler(product)}
                className="remove-selection"
              >
                remove
              </button>
            </section>
          );
        })}
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

const mapStateToProps = (state, ownProps) => {
  return {
    productSelections: Object.keys(state.purchases).map((key) => {
      return state.purchases[key];
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product) => {
      dispatch({
        type: actions.DELETE_PRODUCT,
        payload: {
          product,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
