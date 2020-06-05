import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import bag from "../../images/icons/bag.svg";
import * as actions from "../../store/actionTypes";

class Home extends Component {
  clickHandler = (productObj) => {
    console.log(productObj);

    this.props.addProduct(productObj);
  };

  render() {
    return (
      <div>
        <div className="header">
          <div className="log">
            <img src={logo} className="logo" alt="logo" />
          </div>

          <Link to="/checkout">
            <div className="cart-snippet">
              <img src={bag} className="bag-icon" alt="bag-icon" />
              <div className="item-counter">0</div>
            </div>
          </Link>
        </div>
        <div className="home-wrapper product-list">
          <ul>
            {this.props.productEntries.map((product) => {
              return (
                <li className="list-item" key={product.id}>
                  <img
                    src={require(`../../images/${product.imageUrl}`)}
                    className="thumbnail"
                    alt="product-pic"
                  />
                  <div className="card-content">
                    <div className="product-name">{product.title}</div>

                    <div className="price-button-wrapper">
                      <div className="price-tag">{`${new Intl.NumberFormat(
                        "de-DE",
                        { style: "currency", currency: "EUR" }
                      ).format(product.price)}`}</div>
                      <button onClick={() => this.clickHandler(product)}>
                        Add to bag
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productEntries: Object.keys(state.products).map((key) => {
      return state.products[key];
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch({
        type: actions.ADD_PRODUCT,
        payload: {
          product,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
