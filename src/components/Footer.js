import React, { Component } from "react";
import {
  AiFillYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <AiOutlineFacebook className="footer-icon" />
          <AiFillInstagram className="footer-icon" />
          <AiOutlineTwitter className="footer-icon" />
          <AiFillYoutube className="footer-icon" />
        </div>
        <div>
          <span className="footer-text1">Created By </span>
          <span className="footer-text2"> Mr. ArmStyle</span>
        </div>
      </div>
    );
  }
}
