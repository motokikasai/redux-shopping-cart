import React, { Component } from "react";
import { Link } from "react-router-dom";

import hanger from "../../images/icons/hanger.svg";
import close from "../../images/icons/close.png";

class Error extends Component {
  render() {
    return (
      <div className="error-wrapper">
        <Link to="/">
          <div className="back-icon">
            <img src={close} className="close-icon" alt="back-icon" />
          </div>
        </Link>
        <div>
          <img src={hanger} className="empty-hanger" alt="hanger-icon" />
        </div>
        <div className="not-found">Cart is empty. Start shopping now!</div>
      </div>
    );
  }
}

export default Error;
