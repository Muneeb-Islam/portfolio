import { useEffect, useRef } from "react";
const reviews = [
  {
    name: "Lauren via Fiverr",
    text: "Wonderful service and even better customer service. This was a great experience!",
    theme: "theme1",
  },
  {
    name: "Christopher Peters via Upwork",
    text: "Great work, flexible on changes, helped me understand choices. Will hire again!",
    theme: "theme2",
  },
  {
    name: "David via Freelancer",
    text: "Extremely professional and delivered before deadline!",
    theme: "theme1",
  },
  {
    name: "Amanda via LinkedIn",
    text: "Communication was smooth and project was perfect!",
    theme: "theme2",
  },
  {
    name: "Mark via Fiverr",
    text: "Highly recommended for future projects.",
    theme: "theme1",
  },
];
const ReviewsSection = ({ setBgColor }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!setBgColor) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setBgColor("#222831");
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setBgColor]);

  return (
    <section className="reviews_section" id="reviews" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>
              Some Reviews
            </h2>
          </div>
        </div>
      </div>
      <div className="reviews-wrapper">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`reviews-track single-review ${index % 2 === 0 ? "scroll-left" : "scroll-right"
              }`}
          >
            <div className="review-card">
              <div
                className={`mk-review-item-info ${review.theme === "theme1"
                  ? "mk-reviwe-color-theme1-invert"
                  : "mk-reviwe-color-theme2-invert"
                  }`}
              >
                {review.name}
              </div>
              <div
                className={`mk-review-item ${review.theme === "theme1"
                  ? "mk-reviwe-color-theme1"
                  : "mk-reviwe-color-theme2"
                  }`}
              >
                {review.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;