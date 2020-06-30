import React, { Component } from "react";
import data from "../data";
import {
  FaUser,
  FaCalendar,
  FaFolderOpen,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default class Post extends Component {
  render() {
    let singlePost = data.find(
      (item) => item.title === this.props.match.params.title
    );
    return (
      <>
        <div className="post-container">
          <div className="post-content">
            <section className="mainPost">
              <h3>{singlePost.title}</h3>
              <div className="post-detail">
                <div className="post-group">
                  <FaUser className="post-icon" />
                  <p> {singlePost.author}</p>
                </div>
                <div className="post-group">
                  <FaCalendar className="post-icon" />
                  <p> {singlePost.date}</p>
                </div>
                <div className="post-group">
                  <FaFolderOpen className="post-icon" />
                  {singlePost.type.map((item, index) => {
                    if (singlePost.type.length - 1 === index) {
                      return <p>{item}</p>;
                    }
                    return <p>{item},</p>;
                  })}
                </div>
              </div>
              <img alt="" src={singlePost.images} />
              <h5>{singlePost.description}</h5>
            </section> 
            <section className="sidePost">
              <h4>- PHOTOGRAPHER -</h4>
              <hr />
              <img alt="" src={singlePost.authorPhoto} />
              <h6>{singlePost.authorDetail}</h6>
              <h4>- Follow Us -</h4>
              <hr />
              <div className="follow-detail hover1">
                <span>Follow On Twitter</span>
                <FaTwitter className="follow-icon" />
              </div>
              <div className="follow-detail hover2">
                <span>Like On Facebook</span>
                <FaFacebookF className="follow-icon" />
              </div>
              <div className="follow-detail hover3">
                <span>Subscribe On Youtube</span>
                <FaYoutube className="follow-icon" />
              </div>
              <div className="follow-detail hover4">
                <span>Follow On Instagram</span>
                <FaInstagram className="follow-icon" />
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
