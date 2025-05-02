const ServicesSection = () => {
  return (
    <section
      className="grid_246 main_section m-40"
      data-_id="6747fa2cf05e5f7adbddb2a6"
      data-section_id="services"
      data-section_title="Services cards with side text, buttons & box shadow on hover"
      data-section_name="6747fa2cf05e5f7adbddb2a6"
      id="services"
      imgheight="338"
      imgwidth="1828"
      style={{ paddingTop: '0rem' }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h2>Our Services</h2>
            <p>We think big and have hands in all leading technology platforms to provide you wide array of services.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* First Card */}
          <div className="col-md-6 col-lg-4 wp-pt-32 text-center text-md-start col-12" block-name="Block-2" imgheight="485" imgwidth="440">
            <div className="wb-box mentor-flow-service-card h-100 position-relative wp-border-0 wp-pt-32 wp-pb-32 wp-pl-32 wp-pr-32" imgheight="453" imgwidth="416" style={{ backgroundColor: 'rgb(238, 237, 222)', padding: '0rem', boxShadow: '0px 0px 0px 0px' }}>
              <div className="row justify-content-center justify-content-md-start">
                <div className="wb-editor-block ">
                  <h3>
                    App Development
                  </h3>
                </div>
                <ul className="service-list d-flex justify-content-center justify-content-md-start">
                  <li> <a href="#">React Native</a> </li>
                  <li> <a href="#">Swift</a> </li>
                  <li> <a href="#">Java/Kotlin</a> </li>
                </ul>
                <ul className=" service-card py-3">
                  <li>  <img
                    src="/assets/android.png"
                    alt=""
                    className="img-fluid"
                  /></li>
                  <li>  <img
                    src="/assets/apple.png"
                    alt=""
                    className="img-fluid"
                  /></li>
                  <li>  <img
                    src="/assets/tablet.png"
                    alt=""
                    className="img-fluid"
                  /></li>

                </ul>
              </div>
              <div className="wb-editor-block mentor-flow-service-text">
                <p>
                  <span style={{ fontSize: '1.125rem', fontWeight: 400 }}>
                    We at Byte Pulse design and develop creative mobile apps using the latest technologies and frameworks. We provide both native and hybrid apps development services.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-6 col-lg-4 wp-pt-32 text-center text-md-start col-12" block-name="Block-3" imgheight="485" imgwidth="440">
            <div className="wb-box mentor-flow-service-card h-100 position-relative wp-border-0 wp-pt-32 wp-pb-32 wp-pl-32 wp-pr-32" imgheight="453" imgwidth="416" style={{ backgroundColor: 'rgb(238, 237, 222)', padding: '0rem', boxShadow: '0px 0px 0px 0px' }}>
              <div className="row justify-content-center justify-content-md-start">
                <h3>
                  Web Development
                </h3>
                <ul className="service-list d-flex justify-content-center justify-content-md-start">
                  <li> <a href="#">UI/UX</a> </li>
                  <li> <a href="#">PHP</a> </li>
                  <li> <a href="#">MysQL</a></li>
                  <li> <a href="#">Bootstrap</a> </li>
                </ul>
                <ul className=" service-card py-3">
                  <li>  <img
                    src="/assets/ux.png"
                    alt=""
                    className="img-fluid"
                  /></li>
                  <li>  <img
                    src="/assets/php.png"
                    alt=""
                    className="img-fluid"
                  /></li>
                  <li>  <img
                    src="/assets/java.png"
                    alt=""
                    className="img-fluid"
                  /></li>
                  <li>  <img
                    src="/assets/wordpress.png"
                    alt=""
                    className="img-fluid"
                  /></li>

                </ul>
              </div>

              <div className="wb-editor-block mentor-flow-service-text">

                <p>
                  <span style={{ fontSize: '1.125rem', fontWeight: 400 }}>
                    Our creative design team together with the experienced development team provides clean, responsive, cross-browser, SEO friendly, and robust web development services.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-md-6 col-lg-4 wp-pt-32 text-center text-md-start col-12" block-name="Block-2" imgheight="485" imgwidth="440">
            <div className="wb-box mentor-flow-service-card h-100 position-relative wp-border-0 wp-pt-32 wp-pb-32 wp-pl-32 wp-pr-32" imgheight="453" imgwidth="416" style={{ backgroundColor: 'rgb(238, 237, 222)', padding: '0rem', boxShadow: '0px 0px 0px 0px' }}>
              <div className="row justify-content-center justify-content-md-start">
                <h3>
                  Custom CMS & CRM
                </h3>
                <ul className="service-list d-flex justify-content-center justify-content-md-start">
                  <li> <a href="#">ReactJs</a> </li>
                  <li> <a href="#">NodeJs</a> </li>
                  <li> <a href="#">MongoDB</a></li>
                </ul>
                <ul className="service-card py-3">
                  <li>  <img
                    src="/assets/magento.png"
                    alt=""
                    className="img-fluid"
                  /></li>
                  <li>  <img
                    src="/assets/shopify.png"
                    alt=""
                    className="img-fluid"
                  /></li>
                  <li>  <img
                    src="/assets/wordpress.png"
                    alt=""
                    className="img-fluid"
                  /></li>

                </ul>
              </div>
              <div className="wb-editor-block mentor-flow-service-text">
                <p>
                  <span style={{ fontSize: '1.125rem', fontWeight: 400 }}>
                    Our custom-built CMS and CRM systems help businesses get rid of manual processes and automate their business process to achieve rapid and sustainable growth.
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
