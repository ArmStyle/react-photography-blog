import React, { Component } from "react";
import defaultImg from "../images/profile.jpg";
import { Link } from "react-router-dom";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-content">
          <div className="mainImageWrapper">
            <img alt="" src={defaultImg} />
          </div>
          <div className="sideImageWrapper">
            <p>PHOTOGRAPHER</p>
            <h2>Siriwut Netwichian</h2>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h5>
            <Link to="/" className="btn-hero">
              contact me
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
