import React, { Component } from "react";
import defaultImg from "../images/logo.png";
import { Link } from "react-router-dom";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <Link to="/">
          <img src={defaultImg} alt="" />
        </Link>
      </div>
    );
  }
}
