import { s3baseUrl } from "@/config/config";

const BannerSection = ({ page_data }) => {
  const paymentPage = page_data.payment_page.page_detail;

  return (
    <section className="payment-banner text-center">
      <div className="container border-bg-bottom">
        <h2>{paymentPage.all_plan_text}</h2>
      </div>
    </section>
  );
};

export default BannerSection;
