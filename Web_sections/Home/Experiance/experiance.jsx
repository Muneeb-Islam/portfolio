import React from 'react'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null


export default class ExperianceSection extends React.Component {
componentDidMount() {
new WOW().init()
}
render(){
return (
<section className="experience_wrapper" id="why_us">
    <div className="container">
        <div className="row justify-content-center align-items-center px-lg-4">
            <div className="col-lg-6 text-center text-lg-start  wow slideInLeft">
                <h2>Why Choose Us?</h2>
                <p>With all the competition in the industry, it is wise to ask what makes us so special. Being trusted
                    by many, we provide multiple things that make us stand out among our competitors.</p>

                <div className="experience-list pt-4 d-block d-md-flex justify-content-md-between">
                        <ul className="list-unstyled mb-0">
                            <li className="d-flex align-items-baseline"><i
                                    className="fa-solid fa-circle-check me-3"></i> Innovative technologies</li>
                            <li className="d-flex align-items-baseline"><i
                                    className="fa-solid fa-circle-check me-3"></i> Multiple Templates</li>
                            <li className="d-flex align-items-baseline"><i
                                    className="fa-solid fa-circle-check me-3"></i> No Expertise required</li>
                        </ul>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-baseline"><i
                                    className="fa-solid fa-circle-check me-3"></i> Payment Processing Solutions</li>
                            <li className="d-flex align-items-baseline"><i
                                    className="fa-solid fa-circle-check me-3"></i> Community Building Services </li>
                            <li className="d-flex align-items-baseline"><i
                                    className="fa-solid fa-circle-check me-3"></i> Program Drip System</li>
                        </ul>
                </div>
                <div className="border-line mt-4"></div>

                <div className="d-lg-flex align-items-center pt-5 bottom-icon">
                    <i className="fa-solid fa-file-invoice me-4"></i>
                    <div className="bottom-text pt-4 pt-lg-0">
                        <h3>Best Practices From Industry Experts</h3>
                        <p>We provide websites with technical SEO that allows you to stand out in the market without
                            putting much effort.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow slideInRight">
                <img src="assets/exp-clients.png" alt="" className="img-fluid" />
            </div>
        </div>
    </div>
</section>
)
}
}