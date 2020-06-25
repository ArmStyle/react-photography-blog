import React, { Component } from "react";
import data from "../data";

export default class Post extends Component {
  render() {
    let singlePost = data.find(
      (item) => item.title === this.props.match.params.title
    );
    console.log(singlePost);
    //
    return (
      <>
        <div className="post-container">
          <div className="post-content">
            <section className="mainPost">
              <h3>{singlePost.title}</h3>
              <div className="post-detail">
                <p>{singlePost.author}</p>
                <p>{singlePost.title}</p>
                <p>{singlePost.type}</p>
              </div>
              <img alt="" src={singlePost.images} />
              <h5>{singlePost.description}</h5>
            </section>
            <section className="sidePost">
              <h4>- PHOTOGRAPHER -</h4>
              <img alt="" src={singlePost.images} />
              <h6>{singlePost.authorDetail}</h6>
              <h4>- Follow Us -</h4>
              <div>
                <p>Follow On Twitter</p>
              </div>
              <div>
                <p>Like On Facebook</p>
              </div>
              <div>
                <p>Subscribe On Youtube</p>
              </div>
              <div>
                <p>Follow On Instagram</p>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
