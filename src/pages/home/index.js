import React, { Component } from "react";
import { connect } from "react-redux";

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
          <h1>Home page...</h1>
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
                      <button>Add to bag</button>
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
    productEntries: Object.keys(state).map((key) => {
      // console.log(state[key]);

      return state[key];
    }),
  };
};

export default connect(mapStateToProps)(Home);
