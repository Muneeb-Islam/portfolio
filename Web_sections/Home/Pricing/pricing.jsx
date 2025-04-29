// import { useState } from "react";

import { useState } from "react";

// const pricingPlans = [
//   {
//     name: "Basic Plan",
//     price: 19,
//     currency: "$",
//     billingCycle: "/month",
//     features: [
//       "Basic analytics",
//       "Limited file storage (5GB)",
//       "Standard templates",
//     ],
//     isPopular: false,
//   },
//   {
//     name: "Standard plan",
//     price: 39,
//     currency: "$",
//     billingCycle: "/month",
//     features: [
//       "Advanced analytics",
//       "Increased file storage (20GB)",
//       "Customizable templates",
//       "Advanced integrations",
//       "Priority customer support",
//     ],
//     isPopular: true,
//   },
//   {
//     name: "Premium plan",
//     price: 79,
//     currency: "$",
//     billingCycle: "/month",
//     features: [
//       "Premium analytics",
//       "Unlimited file storage",
//       "Custom branding options",
//       "Advanced integrations",
//     ],
//     isPopular: false,
//   },
// ];

// const PricingSection = () => {
//   const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);

//   const handlePlanSelect = (index) => {
//     setSelectedPlanIndex(index);
//   };

//   return (
//     <section
//       className="pricing_50 main_section wp-pt-80 color_text_FFFFFF"
//       id="fnnqpkglvc"
//       style={{ paddingTop: "0rem" }}
//     >
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-12">
//             <div
//               className="wb-box saasify-pricing-outer-card"
//               style={{ backgroundColor: "rgb(20, 30, 39)" }}
//             >
//               <div className="row justify-content-center">
//                 <div className="col-lg-8 text-center">
//                   <div className="wb-editor-block saasify-pricing-main">
//                     <h1>
//                       <span style={{ color: "rgb(248, 229, 89)", fontSize: "4.5rem" }}>
//                         Pricing models
//                       </span>
//                     </h1>
//                   </div>
//                 </div>
//               </div>

//               <div className="row justify-content-center wb-payment-plans">
//                 {pricingPlans.map((plan, index) => (
//                   <div
//                     key={index}
//                     className="col-md-6 col-lg-4 wp-pt-32 text-center"
//                     onClick={() => handlePlanSelect(index)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <div
//                       className="wb-box wb-plan-card saasify-pricing-card h-100 position-relative wp-border-0"
//                       style={{
//                         backgroundColor:
//                           selectedPlanIndex === index ? "rgb(32, 50, 57)" : "transparent",
//                         transition: "background-color 0.3s ease",
//                         borderRadius: "10px",
//                         padding: "1.5rem",
//                       }}
//                     >
//                       {/* Show Popular badge ONLY if selected AND isPopular */}
//                       {selectedPlanIndex === index && plan.isPopular && (
//                         <div
//                           className="wb-box saasify-popular-badge position-absolute"
//                           style={{ backgroundColor: "rgb(255, 122, 58)" }}
//                         >
//                           <p className="lh-sm">Popular</p>
//                         </div>
//                       )}
//                       <div className="saasify-plan-name-text">
//                         <h2 style={{ color: "white" }}>{plan.name}</h2>
//                       </div>
//                       <div className="saasify-pricing-text">
//                         <h2 style={{ color: "white" }}>
//                           {plan.currency}
//                           {plan.price.toFixed(2)}
//                         </h2>
//                         <h3 style={{ color: "white" }}>{plan.billingCycle}</h3>
//                       </div>

//                       <ul className="list-unstyled wp-mb-80 wp-mt-24 text-start saasify-pricing-list">
//                         {plan.features.map((feature, idx) => (
//                           <li key={idx} className="d-flex align-items-baseline">
//                             <i
//                               className="fas fa-circle-chevron-right wp-mr-10"
//                               style={{ color: "white" }}
//                             ></i>
//                             <div className="wb-editor-block saasify-pricing-list-text">
//                               <p>{feature}</p>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>

//                       <div className="saasify-plan-btn position-absolute">
//                         <a
//                           href="#"
//                           className="w-100 d-block"
//                           style={{
//                             backgroundColor:
//                               selectedPlanIndex === index
//                                 ? "rgb(255, 122, 58)"
//                                 : "var(--wb-website-theme-secondary-color)",
//                           }}
//                         >
//                           <span>Get Started</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//         <div className="row justify-content-center wp-pt-32">
//           <div className="col-lg-6 text-center text-lg-start col-12 wp-pt-0" block-name="Block-2">
//             <div className="wb-editor-block cuisina-whyus-main text-center">
//               <p style={{ fontSize: "1.125rem", fontWeight: 400 }}>
//                 Looking for more? We provide custom pricing plans tailored to your unique needs.&nbsp;
//                 <span style={{ fontWeight: 500 }}>
//                   <a
//                     className="wb-btn-text text-decoration-underline wb-transition-linear-03"
//                     href="#"
//                   >
//                     Contact Sales
//                   </a>
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PricingSection;

const pricingPlans = [
  {
    name: "Basic Plan",
    price: 19,
    currency: "$",
    billingCycle: "/month",
    features: [
      "Basic analytics",
      "Limited file storage (5GB)",
      "Standard templates",
    ],
    isPopular: false,
    backgroundColor: "rgba(0, 0, 0, 0)",
    buttonColor: "",
  },
  {
    name: "Standard plan",
    price: 39,
    currency: "$",
    billingCycle: "/month",
    features: [
      "Advanced analytics",
      "Increased file storage (20GB)",
      "Customizable templates",
      "Advanced integrations",
      "Priority customer support",
    ],
    isPopular: true,
    backgroundColor: "rgb(32, 50, 57)",
    buttonColor: "rgb(255, 122, 58)",
  },
  {
    name: "Premium plan",
    price: 79,
    currency: "$",
    billingCycle: "/month",
    features: [
      "Premium analytics",
      "Unlimited file storage",
      "Custom branding options",
      "Advanced integrations",
    ],
    isPopular: false,
    backgroundColor: "rgba(0, 0, 0, 0)",
    buttonColor: "",
  },
];

const PricingSection = () => {

  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);

  const handlePlanSelect = (index) => {
    setSelectedPlanIndex(index);
  };
  return (
    <section
      className="pricing_50 main_section wp-pt-80 color_text_FFFFFF"
      id="fnnqpkglvc"
      style={{ paddingTop: "0rem" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="wb-box saasify-pricing-outer-card"
              style={{ backgroundColor: "rgb(20, 30, 39)" }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <div className="wb-editor-block saasify-pricing-main">
                    <h1>
                      <span style={{ color: "rgb(248, 229, 89)", fontSize: "4.5rem" }}>
                        Pricing models
                      </span>
                    </h1>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center wb-payment-plans">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className="col-md-6 col-lg-4 wp-pt-32 text-center">
                    <div
                      className="wb-box wb-plan-card saasify-pricing-card h-100 position-relative wp-border-0"
                      style={{ backgroundColor: plan.backgroundColor }}
                    >
                      {plan.isPopular && (
                        <div
                          className="wb-box saasify-popular-badge position-absolute"
                          style={{ backgroundColor: "rgb(255, 122, 58)" }}
                        >
                          <p className="lh-sm">Popular</p>
                        </div>
                      )}
                      <div className="saasify-plan-name-text">
                        <h2 style={{ color: "white" }}>{plan.name}</h2>
                      </div>
                      <div className="saasify-pricing-text">
                        <h2 style={{ color: "white" }}>
                          {plan.currency}
                          {plan.price.toFixed(2)}
                        </h2>
                        <h3 style={{ color: "white" }}>{plan.billingCycle}</h3>
                      </div>

                      <ul className="list-unstyled wp-mb-80 wp-mt-24 text-start saasify-pricing-list">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="d-flex align-items-baseline">
                            <i
                              className="fas fa-circle-chevron-right wp-mr-10"
                              style={{ color: "white" }}
                            ></i>
                            <div className="wb-editor-block saasify-pricing-list-text">
                              <p>{feature}</p>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="saasify-plan-btn position-absolute">
                        <a
                          href="#"
                          className="w-100 d-inline-block"
                          style={{
                            backgroundColor: plan.buttonColor || "var(--wb-website-theme-secondary-color)",
                          }}
                        // style={{
                        //   backgroundColor:
                        //     selectedPlanIndex === index
                        //       ? "rgb(255, 122, 58)"
                        //       : "var(--wb-website-theme-secondary-color)",
                        // }}
                        >
                          <span>Get Started</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

