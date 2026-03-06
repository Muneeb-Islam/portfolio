import Image from "next/image";
import { useEffect, useRef } from "react";

const AboutMe = ({ setBgColor }) => {
    const sectionRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        if (!setBgColor) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setBgColor("#222831");
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -1% 0px' }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [setBgColor]);
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !svgRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Section visible area calculation
            const visible = windowHeight - rect.top;

            if (visible > 0) {
                const move = visible * 0.3;     // speed control
                const rotate = visible * 0.4;   // rotation speed control

                svgRef.current.style.transform =
                    `translateY(${move}px) rotate(${rotate}deg)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section
            className="my_portfolio mt-3 mt-lg-4" id="portfolio" ref={sectionRef}>
            <div className="mk-myself-settings-icon" ref={svgRef} style={{
                willChange: "transform",
                transform: "translateY(655.135px) rotate(446.983deg)"
            }}><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 68 66" style={{ cursor: "none" }}><defs></defs><title>kubernetes_icons</title><path className="cls-1" d="M62.94206,39.30176c-.14868-.03428-.361-.09292-.50677-.11977a14.71841,14.71841,0,0,0-1.67107-.13464,16.2992,16.2992,0,0,1-3.12656-.513,1.9597,1.9597,0,0,1-.75169-.75665l-.70378-.20486A22.64869,22.64869,0,0,0,52.55176,21.8852c.18008-.16356.52123-.46547.61746-.55427a1.3787,1.3787,0,0,1,.32711-.98712,16.31266,16.31266,0,0,1,2.59252-1.82141,14.49625,14.49625,0,0,0,1.44845-.845c.11234-.08343.266-.2156.3837-.30977a1.752,1.752,0,1,0-2.17083-2.72592c-.11894.09376-.28085.21684-.38658.30853a14.45744,14.45744,0,0,0-1.15191,1.2184,16.32712,16.32712,0,0,1-2.35008,2.12622,1.937,1.937,0,0,1-1.05732.11482l-.66331.47373a22.84364,22.84364,0,0,0-14.46885-6.99116c-.01611-.2317-.03594-.65133-.04213-.77812a1.38116,1.38116,0,0,1-.56873-.87147,16.32741,16.32741,0,0,1,.19743-3.16207,14.50184,14.50184,0,0,0,.23748-1.657c.00537-.14043-.00289-.34446-.00289-.496a1.752,1.752,0,1,0-3.48629.00165c0,.01652.00372.03221.00413.04873-.00165.14456-.00867.31968-.00413.44607a14.652,14.652,0,0,0,.2379,1.65826,16.30436,16.30436,0,0,1,.19412,3.16124,1.90033,1.90033,0,0,1-.56584.90121l-.0413.73765a22.73722,22.73722,0,0,0-3.15133.48447A22.42237,22.42237,0,0,0,17.292,18.87347q-.318-.21931-.63027-.44689a1.37655,1.37655,0,0,1-1.035-.10036,16.2653,16.2653,0,0,1-2.35008-2.12332,14.55977,14.55977,0,0,0-1.147-1.21841c-.10614-.09086-.26846-.21476-.38741-.30976a2.07752,2.07752,0,0,0-1.2151-.45845,1.67933,1.67933,0,0,0-1.389.6154,1.84744,1.84744,0,0,0,.42871,2.5698l.02685.019c.114.09334.25442.21271.36015.28994a14.56165,14.56165,0,0,0,1.44515.84586,16.25954,16.25954,0,0,1,2.5921,1.82224,1.937,1.937,0,0,1,.35066,1.00529l.558.49892a22.5562,22.5562,0,0,0-3.5565,15.72485l-.7298.21229a2.41,2.41,0,0,1-.74921.75458,16.26839,16.26839,0,0,1-3.12449.515,14.56589,14.56589,0,0,0-1.67231.13464c-.13382.02478-.31967.07187-.46547.10821l-.01528.00331-.02478.00743a1.74955,1.74955,0,1,0,.77441,3.39667l.026-.00413c.01156-.00248.02147-.00826.033-.01032.14373-.03305.32463-.06732.451-.10161a14.69936,14.69936,0,0,0,1.56368-.59929,16.32534,16.32534,0,0,1,3.039-.89418,1.933,1.933,0,0,1,1.002.354l.76-.1301A22.68377,22.68377,0,0,0,22.26389,53.90444l-.31761.76a1.72965,1.72965,0,0,1,.15571.98587,17.02778,17.02778,0,0,1-1.57773,2.83495,14.53108,14.53108,0,0,0-.93466,1.3927c-.06939.13134-.15736.33248-.22386.47a1.75037,1.75037,0,1,0,3.14762,1.49348l.00289-.00331V61.834c.06608-.1363.15984-.31514.2156-.44276a14.4168,14.4168,0,0,0,.503-1.59755,12.191,12.191,0,0,1,1.34975-3.13151,1.4167,1.4167,0,0,1,.75128-.36676l.39525-.71452a22.55783,22.55783,0,0,0,16.08541.04089c.11069.19742.3172.57492.37171.67033a1.37739,1.37739,0,0,1,.89006.54105,16.23426,16.23426,0,0,1,1.19692,2.93078,14.5697,14.5697,0,0,0,.50595,1.59755c.05658.12886.14869.30976.2156.44688a1.75119,1.75119,0,1,0,3.15133-1.48975c-.0665-.13753-.15819-.33868-.22716-.46919A14.48039,14.48039,0,0,0,46.98634,58.46a16.26143,16.26143,0,0,1-1.54552-2.76722,1.36873,1.36873,0,0,1,.13382-1.02842,5.99541,5.99541,0,0,1-.29035-.70337A22.683,22.683,0,0,0,55.3322,41.3206c.22551.03593.61828.10449.74591.13051a1.37823,1.37823,0,0,1,.97472-.36222,16.30543,16.30543,0,0,1,3.03981.89418,14.511,14.511,0,0,0,1.56452.60384c.126.033.30563.06443.45018.09623.012.00331.02272.00826.03428.01157l.02478.00372a1.74955,1.74955,0,1,0,.77565-3.39667ZM46.38,21.54735l-7.44961,5.28126-.026-.01239a1.53767,1.53767,0,0,1-2.44218-1.17214L36.454,25.64,35.93645,16.511a18.11083,18.11083,0,0,1,10.44317,5.03634ZM32.3465,31.554h2.80357L36.893,33.733l-.6249,2.71766-2.51776,1.21179-2.52519-1.21427-.62614-2.7189ZM29.709,16.83068a18.45074,18.45074,0,0,1,1.85982-.31967l-.51833,9.143-.038.01817A1.53643,1.53643,0,0,1,28.574,26.85009l-.01446.00826L21.0616,21.542A17.95264,17.95264,0,0,1,29.709,16.83068ZM18.3427,24.95888l6.84536,6.12258-.00743.03717a1.53642,1.53642,0,0,1-.60383,2.64125l-.007.02974-8.77458,2.5318a17.9473,17.9473,0,0,1,2.5475-11.36213ZM27.508,41.22354,24.0217,49.64787A18.04728,18.04728,0,0,1,16.779,40.58295l8.99677-1.52817.01529.02024a1.5097,1.5097,0,0,1,.3015-.02685A1.53642,1.53642,0,0,1,27.482,41.18968ZM37.79875,52.057a18.02283,18.02283,0,0,1-9.836-.50512l4.42466-8.001h.00744a1.53849,1.53849,0,0,1,2.70816-.00247h.033l4.43582,8.0142q-.86362.28828-1.77309.49521Zm5.71659-2.37527-3.52222-8.51024.01073-.01528a1.5385,1.5385,0,0,1,.74467-1.992,1.522,1.522,0,0,1,.58856-.15282,1.48213,1.48213,0,0,1,.35312.026l.01529-.019,9.0769,1.53395a17.97868,17.97868,0,0,1-7.267,9.12977Zm8.2203-13.39005-8.81877-2.54006-.00826-.03717a1.53849,1.53849,0,0,1-.603-2.64125l-.0033-.01776L49.10966,24.963A18.288,18.288,0,0,1,51.73521,36.2921Z"></path></svg></div>
            <div className="container aos-init aos-animate">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h2 data-aos="zoom-in-left">
                            My Portfolio
                        </h2>

                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-3" >
                                <p data-aos="zoom-in-left">Greetings, I'm Muneeb Islam, a seasoned Backend Developer with over 7 years of experience in building scalable, high-performance systems within the evolving IT industry. My expertise lies in designing robust backend architectures, developing SaaS-based applications, and implementing DevOps-driven deployment strategies that ensure reliability, efficiency, and long-term scalability. I am deeply committed to crafting systems that are not only technically sound but also optimized for performance and seamless user experience across modern digital platforms</p>
                                <p data-aos="zoom-in-left">Having successfully collaborated with international clients and organizations across different industries, I’ve gained valuable experience working in diverse professional environments. My journey spans from working in structured corporate roles to delivering tailored backend solutions for clients globally. This hybrid exposure to both job-based environments and client-focused projects has enabled me to better understand real-world business requirements and design backend infrastructures that align with practical scalability and operational goals</p>
                                <p data-aos="zoom-in-left">I am passionate about continuous improvement and remain committed to staying aligned with modern backend development standards, cloud infrastructure trends, and deployment best practices. Beyond development, I take a strong interest in system architecture and performance optimization, ensuring that the platforms I build are capable of handling real-world production workloads with reliability and efficiency.</p>
                                <p data-aos="zoom-in-left">I am always open to opportunities that challenge my technical thinking and allow me to contribute to impactful and meaningful products. Working in environments that encourage collaboration, scalability planning, and continuous learning strongly aligns with my professional mindset and growth-oriented approach toward backend engineering and infrastructure development.</p>
                                <p data-aos="zoom-in-left">Throughout my professional journey, I have specialized in building SaaS products, managing cloud-based deployments, and implementing automated CI/CD pipelines. My experience working with international clients has strengthened my ability to understand business logic, technical requirements, and deployment workflows at a production level. I am confident that my experience in backend development, DevOps practices, and system architecture makes me a valuable contributor to any engineering team or scalable software project.</p>
                                <p data-aos="zoom-in-left">Over time, I have worked with a wide range of backend and infrastructure technologies, some of which include:</p>
                                <ul>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <li data-aos="zoom-in-left">JavaScript</li>
                                            <li data-aos="zoom-in-left">Node.js</li>
                                            <li data-aos="zoom-in-left">MongoDB</li>
                                            <li data-aos="zoom-in-left">AWS</li>
                                        </div>
                                        <div className="col-md-6">
                                            <li data-aos="zoom-in-left">SaaS Application Development</li>
                                            <li data-aos="zoom-in-left">RESTful APIs</li>
                                            <li data-aos="zoom-in-left">Cloud Deployment & Infrastructure</li>
                                        </div>
                                    </div>


                                </ul>
                            </div>
                            <div className="col-8 col-md-4">
                                <div className="position-relative">
                                    <div className="profile-image-border"></div>
                                    <Image src="/assets/muneeb/muhammad-aamir-malik-1.png" height={100} width={300} alt="portfolio image" className="img-fluid profile-img" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div
                    className="modal fade mt-80"
                    id="myModal1_id_qbjenxbtom"
                    tabIndex="-1"
                    data-bs-backdrop="static"
                    aria-labelledby="exampleModalLabel"
                    data-bs-focus="false"
                    style={{ display: "none" }}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button
                                    name="vidModal_id_qbjenxbtom"
                                    type="button"
                                    className="btn-close video-player-stop-event wb-disable"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                                <div className="ratio ratio-16x9 wb-iframe">
                                    <iframe
                                        src="https://www.youtube.com/embed/gW22hVe5_fI?si=QWWm6S6n0UlmTKJn"
                                        width="560"
                                        height="315"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
