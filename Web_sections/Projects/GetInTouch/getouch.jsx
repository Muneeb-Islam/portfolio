
import Link from 'next/link';
import * as React from 'react';

const GetInTochSection = () => {

    return (
        <section className='project_contact_wrapper pt-3 pt-lg-4 pb-60'>
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center">
                    <div className="col-lg-11 project_contact">
                        <h3>Interested in working together?</h3>
                        <p>I'm always open to discussing new opportunities and exciting projects.</p>
                        <Link href="/#contact" className='view-details-btn'>Get In Touch</Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GetInTochSection;
