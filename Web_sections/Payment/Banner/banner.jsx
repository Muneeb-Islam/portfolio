import { s3baseUrl } from "@/config/config";

const BannerSection = ({page_data}) => {
const paymentPage = page_data.payment_page.sale_page_detail;
console.log(paymentPage, "--paymentPage");

return (
<section className="payment-banner text-center">
  <div className="container"
  dangerouslySetInnerHTML={{
    __html:paymentPage.get_in_touch_text,
  }}>
   
  </div>
</section>



);
}

export default BannerSection;