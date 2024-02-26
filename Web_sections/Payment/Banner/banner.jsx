import { s3baseUrl } from "@/config/config";

const BannerSection = ({ page_data }) => {
  const paymentPage = page_data.payment_page.page_detail;
  console.log(paymentPage, "--paymentPage");

  return (
    <section className="payment-banner text-center">
      <div className="container">
        <h2>{paymentPage.all_plan_text}</h2>
      </div>
      {/* <div
        className="container"
        dangerouslySetInnerHTML={{
          __html: paymentPage.all_plan_text,
        }}
      ></div> */}
    </section>
  );
};

export default BannerSection;
