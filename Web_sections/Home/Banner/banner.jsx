import React from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;
export default class BannerSection extends React.Component {
  componentDidMount() {
    new WOW().init();
  }
  render() {
    return (
      <section className="banner_wrapper" id="home">
        <div className="container">
          <div
            id="banner-carousel"
            className="carousel slide text-center text-lg-start"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="4000">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-5  banner-content">
                   <div className="wow slideInDown">
                   <span>
                      GROW YOUR BUSINESS
                    </span>
                   </div>
                    <h1 className="wow slideInLeft">
                      From Idea to Products
                    </h1>
                    <p className="wow slideInLeft" data-wow-duration="2s">
                      Vision aids in business growth and takes you from scratch
                      to the heights of success.
                    </p>

                    <a
                      href="#"
                      className="get-started wow slideInUp"
                    >
                      GET STARTED <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="col-lg-5 pt-5 pt-lg-0 position-relative wow slideInRight1 ">
                    <img
                      src="assets/banner-1.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                    <div className="pos-shape">
                      <img
                        src="assets/bottom-triangle.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="4000">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-5  banner-content">
                    <span>
                      CREATE PERFECT WEBSITE
                    </span>
                    <h1>
                      Make Your Dream Website With Vision
                    </h1>
                    <p>
                      With a custom web page and built-in web page, get the
                      results that you have dreamed about.
                    </p>

                    <a
                      href="#"
                      className="get-started "
                    >
                      GET STARTED <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="col-lg-5 pt-5 pt-lg-0 ">
                    <img
                      src="assets/banner-2.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
