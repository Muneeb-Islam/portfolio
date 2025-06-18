import Link from "next/link";
import React, { useEffect } from "react";

function ThanxPage() {
  useEffect(() => {
    const previousPadding = document.body.style.paddingTop;
    document.body.style.paddingTop = "0px";
    return () => {
      document.body.style.paddingTop = previousPadding;
    };
  }, []);

  return (
    <>
      <section className="book-a-call-thanx-page bg-light-blue">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-lg-2">
              <h2 className="mb-4">Thank You For Booking Slot!</h2>
              <p>
                Thank you for scheduling a call with us. Your booking has been
                confirmed, and our team will reach out to you at the scheduled
                time.
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/" className="contained-button">
              Go to home
              <span className="circle"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThanxPage;
