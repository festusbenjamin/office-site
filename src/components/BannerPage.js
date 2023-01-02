import "./bannerpage.css";
import React, { Component } from "react";

class BannerPage extends Component {
  render() {
    return (
      <div className="banner-page">
        <div className="mask-page">
          <img
            className="banner-image-page"
            src={this.props.image}
            alt="Doctor"
          />
        </div>
        <div className="content-page">
          <h1>{this.props.heading}</h1>
          <hr />
          <h3>{this.props.text}</h3>
        </div>
      </div>
    );
  }
}

export default BannerPage;
