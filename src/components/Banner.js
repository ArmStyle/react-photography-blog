import React, { Component } from "react";
import defaultImg from "../images/logo.png";
export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img src={defaultImg} alt="" />
      </div>
    );
  }
}
