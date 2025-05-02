const DetailSection = () => {


    return (
        <section className="portfolio_detail m-40">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-8">
                        <h3>This is an example of portfolio details</h3>
                        <p>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
                        <p>Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.</p>
                        <div className="testimonial-item">
                            <p>    <i className="fa-solid fa-quote-left pe-2"></i>
                                <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                <i className="fa-solid fa-quote-right ps-2"></i>
                            </p>
                            <div>
                                <img src="/assets/testimonials-2.jpg" className="testimonial-img" alt="" />
                                <h4>Sara Wilsson</h4>
                                <p className="mb-0">Designer</p>
                            </div>
                        </div>
                        <p>Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.</p>
                        <p>Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.</p>
                    </div>
                    <div className="col-lg-3 mt-3 mt-lg-0">
                        <div class="portfolio-info">
                            <h3>Project information</h3>
                            <ul>
                                <li><span>Category</span> Web design</li>
                                <li><span>Client</span> XYZ Company</li>
                                <li><span>Project date</span> 01 March, 2020</li>
                                <li><span>Project URL</span> <a href="#">www.example.com</a></li>
                                <li><a href="#" class="btn-visit align-self-start">Visit Website</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DetailSection;