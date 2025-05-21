const achievementsData = [
  {
    icon: "/assets/startup.svg",
    number: "12",
    symbol: "+",
    text: "Years Experience",
    class: "card1",
  },
  {
    icon: "/assets/team.svg",
    number: "40",
    symbol: "+",
    text: "Talented Squad",
    class: "card2",
  },
  {
    icon: "/assets/mobile.svg",
    number: "30",
    symbol: "+",
    text: "Apps Developed",
    class: "card3",
  },
  {
    icon: "/assets/computers.svg",
    number: "100",
    symbol: "%",
    text: "Projects Delivered",
    class: "card4",
  },
  {
    icon: "/assets/world.svg",
    number: "10",
    symbol: "+",
    text: "Countries Served",
    class: "card5",
  },
  {
    icon: "/assets/deal.svg",
    number: "100",
    symbol: "%",
    text: "Client Satisfaction",
    class: "card6",
  },
];

import CountUp from "react-countup";

const Achievements = () => {
  return (
    <section className="achievement_wrapper mt-80" id="achievement">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h2>
                Byte Pulse <span className="font-style"> Mobile App & Web Development </span> Company
              </h2>
              <p>
                Our mission is to provide stable, robust, and innovative web and mobile apps development solutions.
              </p>
              <p className="fw-600">
                Technical consultancy is one of our favorites services. We work closely with businesses to get rid of manual processes and help them improve their process using our CRM and CMS system.
              </p>
            </div>
            <div className="mt-3">
              <p>Let's Start a New Project Together</p>
              <a href="#contact_us" className="contained-button mt-2">
                Request A Quote <i className="fas fa-chevron-right fa-icon"></i>
                <span className="circle"></span>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              {achievementsData.map((item, index) => (
                <div key={index} className="col-md-6 col-lg-6 col-xl-4">
                  <div className={`achiement-card ${item.class}`}>
                    <img src={item.icon} alt={item.text} />
                    <span className="services-cuntr counter">
                      <CountUp end={parseInt(item.number)} duration={2} />
                    </span>
                    <span className="services-cuntr">{item.symbol}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Achievements;

