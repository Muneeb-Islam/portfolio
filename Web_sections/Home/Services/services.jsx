const servicesData = [
  {
    title: "App Development",
    description: "We at Byte Pulse design and develop creative mobile apps using the latest technologies and frameworks. We provide both native and hybrid apps development services.",
    techList: ["React Native", "Swift", "Java/Kotlin"],
    icons: ["/assets/android.png", "/assets/apple.png", "/assets/tablet.png"]
  },
  {
    title: "Web Development",
    description: "Our creative design team together with the experienced development team provides clean, responsive, cross-browser, SEO friendly, and robust web development services.",
    techList: ["UI/UX", "PHP", "MysQL", "Bootstrap"],
    icons: ["/assets/ux.png", "/assets/php.png", "/assets/java.png", "/assets/wordpress.png"]
  },
  {
    title: "Custom CMS & CRM",
    description: "Our custom-built CMS and CRM systems help businesses get rid of manual processes and automate their business process to achieve rapid and sustainable growth.",
    techList: ["ReactJs", "NodeJs", "MongoDB"],
    icons: ["/assets/magento.png", "/assets/shopify.png", "/assets/wordpress.png"]
  }
];

const ServicesSection = () => {
  return (
     <section className="services_wrapper  mt-80" id="services">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h2>Our <span className="font-style">Services</span></h2>
            <p>We think big and have hands in all leading technology platforms to provide you wide array of services.</p>
          </div>
        </div>

        <div className="row justify-content-center">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 wp-pt-32 text-center text-md-start col-12"
              block-name={`Block-${index + 2}`}
              imgheight="485"
              imgwidth="440"
            >
              <div className="main-service-card h-100 ">
                <div className="row justify-content-center justify-content-md-start">
                  <h3>{service.title}</h3>

                  <ul className="service-list d-flex justify-content-center justify-content-md-start">
                    {service.techList.map((tech, i) => (
                      <li key={i}><a href="#">{tech}</a></li>
                    ))}
                  </ul>

                  <ul className="service-card py-3">
                    {service.icons.map((icon, i) => (
                      <li key={i}>
                        <img src={icon} alt={service?.title} className="img-fluid" />
                      </li>
                    ))}
                  </ul>
                </div>
                  <p>
                    <span style={{ fontSize: '1.125rem', fontWeight: 400 }}>
                      {service.description}
                    </span>
                  </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
